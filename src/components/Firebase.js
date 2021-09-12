import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp({
    apiKey: "AIzaSyAEWZAOnEkjP9lKDtrqDTNmgTC3OqTPxzY",
    authDomain: "chatappmessenger-b3039.firebaseapp.com",
    projectId: "chatappmessenger-b3039",
    storageBucket: "chatappmessenger-b3039.appspot.com",
    messagingSenderId: "151703727373",
    appId: "1:151703727373:web:b13bfeb349c6c9235c9444"
}).auth();

