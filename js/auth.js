// ======================================
// TIMELINES: THE ARCHIVE
// auth.js
// ======================================

import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

export async function registerAsset(displayName, email, password){

    const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

    await updateProfile(userCredential.user,{
        displayName
    });

    await sendEmailVerification(userCredential.user);

    return userCredential.user;

}
