import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjpwX1WD8_PDzb0eYSJm4sHGJoOGTHsqw",
  authDomain: "video-website-52fed.firebaseapp.com",
  databaseURL: "https://video-website-52fed-default-rtdb.firebaseio.com",
  projectId: "video-website-52fed",
  storageBucket: "video-website-52fed.appspot.com",
  messagingSenderId: "858972884092",
  appId: "1:858972884092:web:3035310cf23cea60bb8df9",
  measurementId: "G-L1SPXCWK9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function emailSignup(email, password){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

function emailSignin(email, password){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}


function setProfile(name){

}
