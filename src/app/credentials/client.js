import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDm3LgxpRocWgOS7btDGEJ0W1-UxJwP0ng",
  authDomain: "south-trade.firebaseapp.com",
  databaseURL: "https://south-trade.firebaseio.com",
  projectId: "south-trade",
  storageBucket: "south-trade.appspot.com",
  messagingSenderId: "72721953522"
};
if(!firebase.apps.length) firebase.initializeApp(config);
  

export const database = firebase.database();
//export const database = firebase.database().ref('/users_packs');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();