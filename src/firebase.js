import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCs28dqe54pXBMlUmOLfz3GG9RecQlo6HM",
    authDomain: "discord-clone-af7e1.firebaseapp.com",
    projectId: "discord-clone-af7e1",
    storageBucket: "discord-clone-af7e1.appspot.com",
    messagingSenderId: "111148200933",
    appId: "1:111148200933:web:04cda99e161f3c0b29750c"
  };

  const firebaseApp = firebase.initializeApp (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;