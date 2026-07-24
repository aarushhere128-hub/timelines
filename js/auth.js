// ======================================
// TIMELINES: THE ARCHIVE
// auth.js
// ======================================

import { auth } from "./firebase.js";
import { db } from "./firebase.js";

import {
    collection,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
export async function registerAsset(displayName, password) {


    const hiddenEmail =
        displayName.toLowerCase().replace(/\s/g,"")
        +
        Date.now()
        +
        "@archive.local";


    const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            hiddenEmail,
            password
        );


    await updateProfile(
        userCredential.user,
        {
            displayName
        }
    );


    return userCredential.user;

}
export async function loginAsset(email, password) {

    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
    );

    return userCredential.user;

}
export async function findAssets(displayName) {

    console.log("Searching for:", displayName);

    const q = query(
        collection(db, "assets"),
        where("displayName", "==", displayName)
    );

    const snapshot = await getDocs(q);

    console.log("Documents found:", snapshot.size);

    const assets = [];

    snapshot.forEach(doc => {

        console.log(doc.id, doc.data());

        assets.push(doc.data());

    });

    return assets;

}
