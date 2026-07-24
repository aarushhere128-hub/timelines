// ======================================
// TIMELINES: THE ARCHIVE
// app.js
// ======================================

import { checkSession } from "./session.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import { db } from "./firebase.js";

import {
    typeLine,
    ask,
    clearTerminal
} from "./terminal.js";


const screen = document.querySelector(".screen");


// ======================================
// NEW USER INTRO
// ======================================

async function showIntro(){

    clearTerminal();

    await typeLine("Booting Archive Terminal...");
    await typeLine("");

    await typeLine("Authentication Service Online.");
    await typeLine("");
await typeLine("Please identify yourself.");
await typeLine("");

const displayName = await ask("Display Name");

console.log("Entered name:", displayName);

}


// ======================================
// SESSION CHECK
// ======================================

checkSession(async(user)=>{


    // No account

    if(!user){

        showIntro();

        return;

    }



    // Check Archive profile

    const assetRef =
        doc(db,"assets",user.uid);


    const assetSnap =
        await getDoc(assetRef);



    // Account exists but no Asset profile

    if(!assetSnap.exists()){


        await typeLine("");
        await typeLine("Archive record incomplete.");
        await typeLine("");

        window.location.href =
            "asset-create.html";


        return;

    }



    // Fully initialized Asset

    clearTerminal();

    await typeLine("Welcome back, Asset.");

    setTimeout(()=>{

        window.location.href =
            "game.html";

    },1000);



});
