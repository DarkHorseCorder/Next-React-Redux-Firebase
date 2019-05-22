const functions = require('firebase-functions')
const next = require('next');
const routes = require('./routes');


const serverTools = require("./express_server");

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, conf: { distDir: 'next' } })
const handle = routes.getRequestHandler(nextApp);

const server = serverTools.configServer(handle);  

exports.next = functions.https.onRequest(async (req, res) => {
  await nextApp.prepare();
  return server(req, res);
});