import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf6u6L9dYzb6mT6ecDuyB0ZQxkB2x5zvw",
    authDomain: "influencer-gears.firebaseapp.com",
    projectId: "influencer-gears",
    storageBucket: "influencer-gears.appspot.com",
    messagingSenderId: "771461076651",
    appId: "1:771461076651:web:86336b4bfeecadf38a89ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;