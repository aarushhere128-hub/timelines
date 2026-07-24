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
    registerAsset,
    loginAsset,
    findAssets
} from "./auth.js";
import {
    typeLine,
    ask,
    choose,
    clearTerminal
} from "./terminal.js";


const screen = document.querySelector(".screen");
async function startRegistration(displayName) {

    clearTerminal();

    await typeLine("> Connecting to The Archive...");
    await typeLine("");
    await typeLine("Connection Established.");
    await typeLine("");
    await typeLine("ARGUS ONLINE");
    await typeLine("");
    await typeLine("Greetings, candidate.");
    await typeLine("");
    await typeLine("No Archive Record was located.");
    await typeLine("");
    await typeLine("A new Archive Record will now be established.");
    await typeLine("");

    const password = await ask("Archive Access Key");

    const confirm = await ask("Confirm Archive Access Key");

    if (password !== confirm) {

        await typeLine("");
        await typeLine("Access Keys do not match.");
        await typeLine("Restarting registration...");

        setTimeout(() => startRegistration(displayName), 1000);

        return;

    }

    try {

        await registerAsset(displayName, password);

        clearTerminal();

        await typeLine("Archive Record Created.");
        await typeLine("");
        await typeLine("Proceeding to Personnel Processing...");

        setTimeout(() => {

            window.location.href = "asset-create.html";

        }, 1500);

    } catch (error) {

        await typeLine("");
        await typeLine("Registration failed.");
        await typeLine(error.message);

    }

}

// ======================================
// NEW USER INTRO
// ======================================

async function showIntro(){
    const skip = document.createElement("button");

skip.textContent = "SKIP";

skip.style.position = "absolute";
skip.style.top = "15px";
skip.style.right = "15px";

document.body.appendChild(skip);

    clearTerminal();

    await typeLine("Booting Archive Terminal...");
    await typeLine("");

    await typeLine("Authentication Service Online.");
    await typeLine("");
await typeLine("Please identify yourself.");
await typeLine("");

const displayName = await ask("Display Name");

await typeLine("");
await typeLine("Searching Archive Records...");
await typeLine("");

const assets = await findAssets(displayName);

console.log("Found assets:", assets);
if (assets.length === 0) {

    await typeLine("No Archive Records located.");
    await typeLine("");

    const create = document.createElement("button");
    create.textContent = "CREATE ARCHIVE RECORD";

    screen.appendChild(create);

    create.onclick = () => {

        startRegistration(displayName);

    };

    return;

}
const options = assets.map(asset => asset.assetID);

options.push("NONE OF THESE");

const selectedAssetID = await choose(
    "Select Archive Designation",
    options
);

if (selectedAssetID === "NONE OF THESE") {

    startRegistration(displayName);
    return;

}

const selectedAsset =
    assets.find(asset => asset.assetID === selectedAssetID);

const password =
    await ask("Archive Access Key");

try {

    await loginAsset(
        selectedAsset.loginEmail,
        password
    );

 await typeLine("");
await typeLine("Identity confirmed.");
} catch {

    await typeLine("");
    await typeLine("Authentication failed.");
    await typeLine("Archive Access Key rejected.");

}
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
        clearTerminal();


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
