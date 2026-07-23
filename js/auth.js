// ======================================
// TIMELINES: THE ARCHIVE
// auth.js
// ======================================

import { auth } from "./firebase.js";

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
