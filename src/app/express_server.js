const express = require('express');
const session = require('express-session');
const FirebaseStore = require('connect-session-firebase')(session);


const admin = require('firebase-admin');
const helmet = require('helmet');

const bodyParser = require('body-parser');

const serviceAccount = require('./credentials/server.json');

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://south-trade.firebaseio.com' 
  }, 'server');

  const store = new FirebaseStore({  
    database: firebase.database(),
   });

module.exports =  {
    configServer : function(handle){
        const server = express();
        server.use(helmet());
        server.set('trust proxy', 1);
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(
        session({
            store: store,
            name: '__session',
            secret: 'mysecret',
            secure: true,
            httpOnly: true,
            resave: false,
            rolling: true,
            cookie: { maxAge: 604800000 }, // week
            saveUninitialized: false,
            signed: true,
        })
        );

        server.use((req, res, next) => {
            req.firebaseServer = firebase;
            next();
        });

        server.post('/api/login', (req, res) => {
            const token = req.body.userToken;

            firebase.auth().verifyIdToken(token)
            .then((decodedToken) => {
            req.session.decodedToken = decodedToken
            return decodedToken
            })
            .then((decodedToken) =>{
                res.setHeader('Cache-Control', 'private');
                res.json({ status: true, decodedToken })
            })
            .catch((error) =>{
                throw(error)
            })
        })

        server.post('/api/logout', (req, res) => {
            req.session.decodedToken = null
            res.json({ status: true })
        })

        server.get('*', (req, res) => handle(req, res));
        return server;
    }
}

