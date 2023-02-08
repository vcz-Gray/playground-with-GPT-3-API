const firebase = require("firebase");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmSBSbrHwW8gFYUJiN4tdHuuHKaky_Dwo",
  authDomain: "myfirstblogger-1675264620328.firebaseapp.com",
  projectId: "myfirstblogger-1675264620328",
  storageBucket: "myfirstblogger-1675264620328.appspot.com",
  messagingSenderId: "102550426301",
  appId: "1:102550426301:web:d3997b2b101228a58a5dd4",
  measurementId: "G-TFYW372CNP",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

module.exports = db;
