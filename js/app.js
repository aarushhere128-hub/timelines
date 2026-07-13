// ======================================
// TIMELINES: THE ARCHIVE
// app.js
// ======================================

const screen = document.querySelector(".screen");
const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");


// Generate Asset ID
function generateAssetID() {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const letter = letters[Math.floor(Math.random() * letters.length)];

    const number = Math.floor(Math.random() * 10000000)
        .toString()
        .padStart(7, "0");

    return `${letter}-${number}`;
}

const assetID = generateAssetID();


// Typewriter Effect
function typeLine(text, speed = 30) {

    return new Promise(resolve => {

        const p = document.createElement("p");

        screen.appendChild(p);

        let i = 0;

        const interval = setInterval(() => {

            p.textContent += text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(interval);

                resolve();

            }

        }, speed);

    });

}


// ACCEPT BUTTON
acceptBtn.addEventListener("click", async () => {

    screen.innerHTML = "";

    await typeLine("> Connecting to The Archive...");
    await typeLine("> Identity Verification Complete.");
    await typeLine("");
    await typeLine("Generating Asset Designation...");
    await typeLine(assetID);
    await typeLine("");
    await typeLine("Initializing ARGUS...");
    await typeLine("Loading...");
    await typeLine("");
    await typeLine("Press ENTER to continue.");

});


// DECLINE BUTTON
declineBtn.addEventListener("click", async () => {

    screen.innerHTML = "";

    await typeLine("Request acknowledged.");
    await typeLine("");
    await typeLine("...");
    await typeLine("...");
    await typeLine("");
    await typeLine("Request denied.");
    await typeLine("");
    await typeLine("The Archive does not accept refusals.");

});
