const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const fetchCities = () => {
  db.collection("users")
    .doc("SF")
    .get()
    .then(async (docRef) => {
      const city = await docRef.data();
      console.log("CITY: ", city);
    })
    .catch((e) => {
      console.error("something went wrong", e);
    });
};

fetchCities();
