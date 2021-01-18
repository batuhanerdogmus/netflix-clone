import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdRWPZpE8oPoro1068osfLrI_1vvYnlvY",
  authDomain: "netflix-clone-fb3a4.firebaseapp.com",
  projectId: "netflix-clone-fb3a4",
  storageBucket: "netflix-clone-fb3a4.appspot.com",
  messagingSenderId: "812965915930",
  appId: "1:812965915930:web:b6dd8edf21e19c1c5bd0a3",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
