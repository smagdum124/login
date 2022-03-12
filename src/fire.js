// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5WfIkYU2l7ozn1qVzgIknVanWJV5-hRo",
  authDomain: "myapp-1cd5a.firebaseapp.com",
  projectId: "myapp-1cd5a",
  storageBucket: "myapp-1cd5a.appspot.com",
  messagingSenderId: "289470435274",
  appId: "1:289470435274:web:34e852371bd481eae88933",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;
