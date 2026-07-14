// ======================================
// TIMELINES: THE ARCHIVE
// app.js
// ======================================
import { checkSession } from "./session.js";
import { registerAsset } from "./auth.js";
import { typeLine, ask, clearTerminal } from "./terminal.js";
const screen = document.querySelector(".screen");

let player = {};




// -----------------------------
// Registration Flow
// -----------------------------
async function startRegistration(){
    clearTerminal();



    await typeLine("> Connecting to The Archive...");
    await typeLine("");
    await typeLine("Connection Established.");
    await typeLine("");
    await typeLine("ARGUS ONLINE");
    await typeLine("");
    await typeLine("Greetings, candidate.");
    await typeLine("");
    await typeLine("Before I can establish your Archive record,");
    await typeLine("I require several identifiers.");
    await typeLine("");

    player.displayName = await ask("Display Name");

    player.email = await ask("Archive Email");

    player.password = await ask("Archive Access Key");

    const confirm = await ask("Confirm Archive Access Key");

    if(confirm !== player.password){

        await typeLine("");
        await typeLine("Access Keys do not match.");
        await typeLine("Restarting registration...");

        setTimeout(startRegistration,1000);

        return;

    }

    await typeLine("");
await typeLine("Creating Archive Record...");
await typeLine("");

try {

    await registerAsset(
        player.displayName,
        player.email,
        player.password
    );

    await typeLine("✓ Archive Record Created.");
    await typeLine("");
    await typeLine("Verification signal dispatched.");
    await typeLine("");
    await typeLine("Please verify your Archive Email.");
    await typeLine("");
    await typeLine("Once verified, restart the application to continue.");

} catch (error) {

    await typeLine("Registration Failed.");
    await typeLine(error.message);

}

}


// -----------------------------
// Start Screen
// -----------------------------
async function showIntro() {

    clearTerminal();

    await typeLine("Booting Archive Terminal...");
    await typeLine("");
    await typeLine("Connecting to Archive Network...");
    await typeLine("");
    await typeLine("Authentication Service Online.");
    await typeLine("");
    await typeLine("ARGUS unavailable.");
    await typeLine("Manual recruitment mode enabled.");
    await typeLine("");
    await typeLine("Would you like to join The Archive?");
    await typeLine("");

    const accept = document.createElement("button");
    accept.textContent = "ACCEPT";

    const decline = document.createElement("button");
    decline.textContent = "DECLINE";

    screen.appendChild(accept);
    screen.appendChild(decline);

    accept.addEventListener("click", startRegistration);

    decline.addEventListener("click", async () => {
        clearTerminal();

        await typeLine("Request acknowledged.");
        await typeLine("");
        await typeLine("...");
        await typeLine("");
        await typeLine("Request denied.");
        await typeLine("");
        await typeLine("The Archive does not accept refusals.");
        await typeLine("");

        const acceptAgain = document.createElement("button");
        acceptAgain.textContent = "ACCEPT";

        screen.appendChild(acceptAgain);

        acceptAgain.addEventListener("click", startRegistration);
    });
}


checkSession(async(user)=>{

    if(!user){

        showIntro();
        return;

    }

    await user.reload();

    if(!user.emailVerified){

        clearTerminal();

        await typeLine("Archive Email not verified.");
        await typeLine("");
        await typeLine("Please verify your Archive Email.");
        await typeLine("");
        await typeLine("Refresh this page after verification.");

        return;

    }

    clearTerminal();

    await typeLine("Archive Email Verified.");
    await typeLine("");
    await typeLine("Welcome back.");
    await typeLine("");
    await typeLine("Connecting to The Archive...");

    setTimeout(()=>{

        window.location.href="game.html";

    },1500);

});
