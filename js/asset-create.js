// ======================================
// TIMELINES: THE ARCHIVE
// asset-create.js
// ======================================

import { auth } from "./firebase.js";
import { createAssetProfile } from "./profile.js";
import { typeLine, clearTerminal } from "./terminal.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const screen = document.querySelector(".screen");

let originalAssetID;
let displayedAssetID;


// --------------------------------------
// Asset ID Generator
// --------------------------------------

function generateAssetID() {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const letter =
        letters[Math.floor(Math.random() * letters.length)];

    const number =
        Math.floor(Math.random() * 10000000)
            .toString()
            .padStart(7, "0");

    return `${letter}-${number}`;

}


// --------------------------------------
// Create Buttons
// --------------------------------------

function createButtons() {

    const idHeading = document.createElement("h2");
    idHeading.id = "assetID";
    idHeading.textContent = displayedAssetID;

    const continueBtn = document.createElement("button");
    continueBtn.textContent = "CONTINUE";

    const rerollBtn = document.createElement("button");
    rerollBtn.textContent = "REQUEST REASSIGNMENT";

    screen.appendChild(idHeading);
    screen.appendChild(continueBtn);
    screen.appendChild(rerollBtn);


    // Fake reroll

    rerollBtn.addEventListener("click", () => {

        displayedAssetID = generateAssetID();

        idHeading.textContent = displayedAssetID;

    });


    // Continue

    continueBtn.addEventListener("click", async () => {

        clearTerminal();

        await typeLine("Finalizing Archive Record...");
        await typeLine("");

        if (displayedAssetID !== originalAssetID) {

            await typeLine("Preferred Designation:");
            await typeLine(displayedAssetID);
            await typeLine("");

            await typeLine("Authorized Designation:");
            await typeLine(originalAssetID);
            await typeLine("");

            await typeLine("Preference rejected.");
            await typeLine("");
            await typeLine("Since when did your preferences matter?");
            await typeLine("");

        }

        await typeLine("Creating Archive Profile...");
        await typeLine("");

        try {

            await createAssetProfile(
                auth.currentUser,
                originalAssetID
            );

            await typeLine("Archive Profile Created.");
            await typeLine("");
            await typeLine("Welcome, Asset.");
            await typeLine("");
            await typeLine("Preparing Deployment...");

            setTimeout(() => {

                window.location.href = "game.html";

            }, 2000);

        }

        catch (error) {

            console.error(error);

            await typeLine("");
            await typeLine("Archive synchronization failed.");

        }

    });

}


// --------------------------------------
// Start
// --------------------------------------

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "index.html";
        return;

    }

    if (!user.emailVerified) {

        window.location.href = "index.html";
        return;

    }

    clearTerminal();

    await typeLine("Authenticating...");
    await typeLine("");

    await typeLine("✓ Identity Confirmed");
    await typeLine("");

    await typeLine("Archive Personnel Division");
    await typeLine("");

    await typeLine("Beginning Asset Initialization...");
    await typeLine("");

    await typeLine("Assigning Rank...");
    await typeLine("Candidate");
    await typeLine("");

    await typeLine("Generating Archive Designation...");
    await typeLine("");

    originalAssetID = generateAssetID();
    displayedAssetID = originalAssetID;

    createButtons();

});
