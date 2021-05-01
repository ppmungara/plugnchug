import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/storage';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAOv8_egKfyp9FqHooTvd8rgpCWkf6BQww",
    authDomain: "plugnchug-3b5dd.firebaseapp.com",
    projectId: "plugnchug-3b5dd",
    databaseURL: "https://plugnchug-3b5dd-default-rtdb.firebaseio.com",
    storageBucket: "plugnchug-3b5dd.appspot.com",
    messagingSenderId: "674667478258",
    appId: "1:674667478258:web:9398a6d6db2cc65261246b",
    measurementId: "G-BHC7Z9R4Z3"
};
firebase.initializeApp(config);
firebase.analytics();

const projectStorage = firebase.storage();
const projectDatabase = firebase.database();

export {projectStorage, projectDatabase};