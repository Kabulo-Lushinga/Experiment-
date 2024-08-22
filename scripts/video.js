import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import {getStorage,ref as storageRef} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged, signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const filePicker = require('file-picker');

export function pickFile(){
    filePicker.MultipleFilePicker(function(files){});
}

export function uploadVideo(/*uid,*/videoName/*,videoFilePath*/){
    const db = getDatabase();
    const storage=getStorage();
    const pathReference = ref(storage, 'videos/'+videoName);
    /*set(ref(db, 'database/users/' + uid+'/videos'), {
       // name:,
        //uid:,

    });*/
}

function getVideos(){}

function getUserVideos(){}

function uploadVideos(){

}

function deleteVideo(vidId){}


function editVideo(){}