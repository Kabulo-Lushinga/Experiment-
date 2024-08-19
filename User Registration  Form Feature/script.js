import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged, signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

    import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjpwX1WD8_PDzb0eYSJm4sHGJoOGTHsqw",
    authDomain: "video-website-52fed.firebaseapp.com",
    databaseURL: "https://video-website-52fed-default-rtdb.firebaseio.com",
    projectId: "video-website-52fed",
    storageBucket: "video-website-52fed.appspot.com",
    messagingSenderId: "858972884092",
    appId: "1:858972884092:web:06c2cbe42cdb2de8bb8df9",
    measurementId: "G-6D73MQ57JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export function emailSignup(email, password,json){
    const auth = getAuth();
    //alert(email)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert(user)
        setDetails(user.id,json)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
}

export function emailSignin(email, password){
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

function setDetails(id,json){
    const db = getDatabase();
    set(ref(db, 'database/users/' + id), json);
}


function setProfile(name){

}


