// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3TEqjhQdJmYV8S-ODV9tN8B4_zK_7Bns",
  authDomain: "formikandyupvalidation.firebaseapp.com",
  databaseURL: "https://formikandyupvalidation-default-rtdb.firebaseio.com",
  projectId: "formikandyupvalidation",
  storageBucket: "formikandyupvalidation.appspot.com",
  messagingSenderId: "657222276143",
  appId: "1:657222276143:web:0ec4a13913c93b74b422da",
  measurementId: "G-4FSLNN4BQN",
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
