const functions = require('firebase-functions');
const admin = require('firebase-admin')
//admin.initializeApp(functions.config().firebase);
const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyB9WqLlVHBqN7iRX9AT4JTQ58zi25Ow8bA",
    authDomain: "ss5706021630011.firebaseapp.com",
    databaseURL: "https://ss5706021630011.firebaseio.com",
    projectId: "ss5706021630011",
    storageBucket: "ss5706021630011.appspot.com",
    messagingSenderId: "763399554777"
  };
var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

exports.transport2558 = functions.https.onRequest((request, response) => {
    return db.ref('transport2558').once('value').then(function(snapshot) {
      var data = snapshot.val();
      response.send(data)
    });
  });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
