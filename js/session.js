// ======================================
// TIMELINES: THE ARCHIVE
// session.js
// ======================================

import { auth } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

export function checkSession(callback){

    onAuthStateChanged(auth, (user)=>{

        callback(user);

    });

}
