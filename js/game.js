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


// DEBUG

console.log("USER UID:", user.uid);

console.log(
    "PROFILE EXISTS:",
    assetSnap.exists()
);

console.log(
    "PROFILE DATA:",
    assetSnap.data()
);


// Continue

if (!assetSnap.exists()) {

    window.location.href = "asset-create.html";

    return;

}

    // Load deployment


  const deployment = getNextDeployment();

if (!deployment) {

    console.error("No deployment found.");

    return;

}

loadDeployment(deployment);


});


// --------------------------------------
// Deploy Button
// --------------------------------------

document
.getElementById("deployButton")
.addEventListener("click", () => {

    // Timeline page later

   window.location.href =
"timeline.html?id=" + deployment.id;

});


// --------------------------------------
// Asset Console
// --------------------------------------

const consoleButton =
document.getElementById("assetConsole");


const consoleMenu =
document.getElementById("consoleMenu");


consoleButton.addEventListener("click", () => {

    consoleMenu.classList.toggle("hidden");

});
