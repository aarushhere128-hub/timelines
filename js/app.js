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
// ACCEPT BUTTON
acceptBtn.addEventListener("click", async () => {

    screen.innerHTML = "";

    const assetID = generateAssetID();

    await typeLine("> Connecting to The Archive...");
    await typeLine("> Identity Verification Complete.");
    await typeLine("");
    await typeLine("Generating Asset Designation...");
    await typeLine(assetID);
    await typeLine("");
    await typeLine("Initializing ARGUS...");
    await typeLine("Loading...");
    await typeLine("");

    // Continue Button
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "CONTINUE";
    continueBtn.id = "continueBtn";

    screen.appendChild(continueBtn);

    continueBtn.addEventListener("click", () => {
        // Later we'll go to registration/game
        alert("Next sequence coming soon...");
    });

});


// DECLINE BUTTON
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
    await typeLine("");
    await typeLine("Would you like to join The Archive?");
    await typeLine("");

    // Create only the ACCEPT button
    const acceptAgain = document.createElement("button");
    acceptAgain.textContent = "ACCEPT";
    acceptAgain.id = "acceptBtn";

    screen.appendChild(acceptAgain);

    // Reuse the original ACCEPT logic
    acceptAgain.addEventListener("click", async () => {

        screen.innerHTML = "";

        const assetID = generateAssetID();

        await typeLine("> Connecting to The Archive...");
        await typeLine("> Identity Verification Complete.");
        await typeLine("");
        await typeLine("Generating Asset Designation...");
        await typeLine(assetID);
        await typeLine("");
        await typeLine("Initializing ARGUS...");
        await typeLine("Loading...");
        await typeLine("");

        const continueBtn = document.createElement("button");
        continueBtn.textContent = "CONTINUE";
        continueBtn.id = "continueBtn";

        screen.appendChild(continueBtn);

        continueBtn.addEventListener("click", () => {
            alert("Next sequence coming soon...");
        });

    });

});
