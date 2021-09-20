import functions = require("firebase-functions");
import admin = require("firebase-admin");

// firebase-adminの初期化
admin.initializeApp();

exports.deleteUser = functions
    .region("asia-northeast1")
    .firestore.document("delete_users/{docId}")
    .onCreate(async (snap, context) => {
      const deleteDocument = snap.data();
      const uid = deleteDocument.uid;

      await admin.auth().deleteUser(uid);
    });
