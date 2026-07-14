// ======================================
// TIMELINES: THE ARCHIVE
// argusDatabase.js
// ======================================

import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc,
    arrayUnion
} from 
"https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";



// --------------------------------------
// Save ARGUS Message
// --------------------------------------

export async function saveArgusLine(uid, text){


    const assetRef =
    doc(db, "assets", uid);


    await updateDoc(assetRef, {

        argusConversation:
        arrayUnion(text)

    });


}



// --------------------------------------
// Load ARGUS History
// --------------------------------------

export async function loadArgusConversation(uid){


    const assetRef =
    doc(db, "assets", uid);


    const snapshot =
    await getDoc(assetRef);



    if(!snapshot.exists()){

        return [];

    }



    const data =
    snapshot.data();



    return data.argusConversation || [];


}
