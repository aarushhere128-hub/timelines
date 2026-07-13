// ======================================
// TIMELINES: THE ARCHIVE
// app.js
// ======================================

const screen = document.querySelector(".screen");

let player = {};


// -----------------------------
// Typewriter Effect
// -----------------------------
function typeLine(text, speed = 30) {

    return new Promise(resolve => {

        const p = document.createElement("p");

        p.textContent = "";

        screen.appendChild(p);

        let i = 0;

        const interval = setInterval(() => {

            p.textContent += text.charAt(i);

            i++;

            if(i >= text.length){

                clearInterval(interval);

                resolve();

            }

        }, speed);

    });

}


// -----------------------------
// Terminal Input
// -----------------------------
function ask(question){

    return new Promise(resolve=>{

        typeLine(question);

        const line = document.createElement("p");

        const cursor = document.createElement("span");
        cursor.textContent = "> ";

        const input = document.createElement("span");

        input.contentEditable = true;
        input.className = "terminalTyping";
        input.spellcheck = false;

        line.appendChild(cursor);
        line.appendChild(input);

        screen.appendChild(line);

        input.focus();


        input.addEventListener("keydown",(e)=>{

            if(e.key === "Enter"){

                e.preventDefault();

                const answer = input.textContent.trim();

                if(answer==="") return;


                input.contentEditable = false;


                resolve(answer);

            }

        });

    });

}


// -----------------------------
// Registration Flow
// -----------------------------
async function startRegistration(){

    screen.innerHTML = "";

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
    await typeLine("Connecting to Firebase...");

    // Firebase registration goes here next.

}


// -----------------------------
// Start Screen
// -----------------------------
function showIntro(){

    screen.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = "THE ARCHIVE";

    const question = document.createElement("p");
    question.textContent = "Would you like to join The Archive?";

    const accept = document.createElement("button");
    accept.textContent = "ACCEPT";

    const decline = document.createElement("button");
    decline.textContent = "DECLINE";

    screen.appendChild(title);
    screen.appendChild(question);
    screen.appendChild(accept);
    screen.appendChild(decline);

    accept.addEventListener("click",startRegistration);

    decline.addEventListener("click",async()=>{

        screen.innerHTML="";

        await typeLine("Request acknowledged.");
        await typeLine("");
        await typeLine("...");
        await typeLine("");
        await typeLine("Request denied.");
        await typeLine("");
        await typeLine("The Archive does not accept refusals.");
        await typeLine("");

        const acceptAgain=document.createElement("button");

        acceptAgain.textContent="ACCEPT";

        screen.appendChild(acceptAgain);

        acceptAgain.addEventListener("click",startRegistration);

    });

}


showIntro();
