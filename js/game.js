// ======================================
// TIMELINES: THE ARCHIVE
// game.js
// ======================================

import { auth, db } from "./firebase.js";
import {
    getNextDeployment
} from "./timeline.js";
import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
let currentDeployment;
let assetData;

// --------------------------------------
// Temporary Deployment
// (Will move to timeline.js later)
// --------------------------------------



// --------------------------------------
// Load Deployment
// --------------------------------------

function loadDeployment(deployment) {

    document.getElementById("timelineID").textContent =
        deployment.id;

    document.getElementById("timelineName").textContent =
        deployment.name;

    const container =
        document.getElementById("deploymentConditions");

    container.innerHTML = "";

    deployment.conditions.forEach(condition => {

        const p = document.createElement("p");

        p.textContent = "• " + condition;

        container.appendChild(p);

    });

}


// --------------------------------------
// Start
// --------------------------------------

onAuthStateChanged(auth, async (user) => {

    // Not logged in

    if (!user) {

        window.location.href = "index.html";

        return;

    }

    // Email not verified

    if (!user.emailVerified) {

        window.location.href = "index.html";

        return;

    }

    // Asset profile exists?

    const assetRef = doc(db, "assets", user.uid);

const assetSnap = await getDoc(assetRef);





// Continue

if (!assetSnap.exists()) {

    window.location.href = "asset-create.html";

    return;

}
assetData = assetSnap.data();
document
.getElementById("argusButtonName")
.textContent = assetData.argusName;
    // Load deployment


  const currentDeployment = getNextDeployment();

if (!deployment) {

    console.error("No deployment found.");

    return;

}

loadDeployment(currentDeployment);


});


// --------------------------------------
// Deploy Button
// --------------------------------------

document
.getElementById("deployButton")
.addEventListener("click", () => {

    // Timeline page later

  window.location.href =
"timeline.html?id=" + currentDeployment.id;

});


// --------------------------------------
// Asset Console
// --------------------------------------

// --------------------------------------
// Asset Console
// --------------------------------------

const consoleButton =
document.getElementById("assetConsoleButton");


const consoleScreen =
document.getElementById("consoleScreen");


const closeConsole =
document.getElementById("closeConsole");


consoleButton.addEventListener("click", () => {

    consoleScreen.classList.remove("hidden");

});


closeConsole.addEventListener("click", () => {

    consoleScreen.classList.add("hidden");

});


// --------------------------------------
// ARGUS
// --------------------------------------

const argusButton =
document.getElementById("argusButton");


const argusScreen =
document.getElementById("argusScreen");


const closeArgus =
document.getElementById("closeArgus");


argusButton.addEventListener("click", () => {

    consoleScreen.classList.add("hidden");

    argusScreen.classList.remove("hidden");


    document.getElementById("argusDialogue").innerHTML =

    `
    <p>ARGUS ONLINE.</p>

    <p>
    Good morning, ${assetData.displayName}.
    </p>

    <p>
    How may I assist you?
    </p>
    `;

});


closeArgus.addEventListener("click", () => {

    argusScreen.classList.add("hidden");

    consoleScreen.classList.remove("hidden");

});
