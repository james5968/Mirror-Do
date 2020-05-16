import * as firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAgw2zP56UmqYc-A558jVzq5S2BbxFXX_Y",
    authDomain: "mirror-do.firebaseapp.com",
    databaseURL: "https://mirror-do.firebaseio.com",
    projectId: "mirror-do",
    storageBucket: "mirror-do.appspot.com",
    messagingSenderId: "374836442871",
    appId: "1:374836442871:web:2e92a9b7a63a84769245f2",
    measurementId: "G-CZX00X1NBV"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

let firebaseAuth = firebaseApp.auth();

export { firebaseAuth };