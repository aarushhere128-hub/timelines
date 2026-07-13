// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAtHdHHxjRor_O2-stzKO9QlyGB7edMuns",
    authDomain: "timelines-12036.firebaseapp.com",
    projectId: "timelines-12036",
    storageBucket: "timelines-12036.firebasestorage.app",
    messagingSenderId: "588774930565",
    appId: "1:588774930565:web:03eaebedbc94e23902d1ec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
