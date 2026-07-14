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

        email: user.email,

        assetID: assetID,

        rank: "Candidate",

        argusName: "ARGUS",

        argusConversation: [],

        timelinesCompleted: 0,

        memoryAnchors: [],

        achievements: [],

        createdAt: serverTimestamp()

    });

}
