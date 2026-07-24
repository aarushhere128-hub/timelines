// ======================================
// TIMELINES: THE ARCHIVE
// profile.js
// ======================================

import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// --------------------------------------
// Create Asset Profile
// --------------------------------------

export async function createAssetProfile(user, assetID) {

    const assetRef = doc(db, "assets", user.uid);

    const assetSnap = await getDoc(assetRef);

    // Prevent duplicate profiles
    if (assetSnap.exists()) {
        return;
    }

    await setDoc(assetRef, {

        uid: user.uid,

        displayName: user.displayName,

        loginEmail: user.email,

        assetID: assetID,

        rank: "Candidate",

        argusName: "ARGUS",
        argusStage: 0,

argusCompleted: false,

      

        timelinesCompleted: 0,

        memoryAnchors: [],

        achievements: [],

        createdAt: serverTimestamp()

    });
    await setDoc(doc(db,"loginIndex",user.uid),{

    displayName: user.displayName,

    assetID: assetID,

    loginEmail: user.email

});

}
