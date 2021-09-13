const functions = require("firebase-functions");
const createUser = require("./createUser");
const admin = require("firebase-admin");
const serviceAccount = require("./config/blog-adbdb-firebase-adminsdk-s2sr9-d930b0da0f.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.createUser = functions.https.onRequest(createUser.createUser);
