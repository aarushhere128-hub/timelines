// ======================================
// TIMELINES: THE ARCHIVE
// argusDatabase.js
// ======================================

import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from
"https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// --------------------------------------
// Load ARGUS Stage
// --------------------------------------

export async function loadArgusStage(uid){

    const assetRef =
        doc(db, "assets", uid);

    const snapshot =
        await getDoc(assetRef);

    if(!snapshot.exists()){

        return 0;

    }

    const data =
        snapshot.data();

    return data.argusStage || 0;

}


// --------------------------------------
// Save ARGUS Stage
// --------------------------------------

export async function saveArgusStage(uid, stage){

    const assetRef =
        doc(db, "assets", uid);

    await updateDoc(assetRef,{

        argusStage: stage

    });

}


// --------------------------------------
// Mark Orientation Complete
// --------------------------------------

export async function completeOrientation(uid){

    const assetRef =
        doc(db,"assets",uid);

    await updateDoc(assetRef,{

        argusCompleted: true

    });

}
// --------------------------------------
// Save ARGUS Name
// --------------------------------------

export async function saveArgusName(uid, name){

    const assetRef =
    doc(db, "assets", uid);

    await updateDoc(assetRef, {

        argusName: name,
        argusConfigured: true

    });

}
