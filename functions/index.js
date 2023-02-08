const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const { createTestDocs } = require("./src/createTestDocs");
const { setData } = require("./src/setData");

admin.initializeApp();

const firestore = getFirestore();

exports.createTestDocs = functions.https.onRequest(async (req, res) => await createTestDocs(req, res, firestore));
exports.setData = functions.https.onRequest(async (req, res) => await setData(req, res, firestore));

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
