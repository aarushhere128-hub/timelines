// ======================================
// TIMELINES: THE ARCHIVE
// terminal.js
// ======================================


let currentScreen =
document.querySelector(".screen");


// --------------------------------------
// ARGUS Typewriter
// --------------------------------------

// ======================================
// TIMELINES: THE ARCHIVE
// terminal.js
// ======================================


let screen =
document.querySelector(".screen");


// --------------------------------------
// Change Target Screen
// --------------------------------------

export function setTerminalScreen(element){

    screen = element;

}



// --------------------------------------
// Type Line
// --------------------------------------

export function typeLine(text, speed = 30){

    return new Promise(resolve => {

        const p = document.createElement("p");

        screen.appendChild(p);

        let i = 0;


        const interval = setInterval(()=>{

            p.textContent += text.charAt(i);

            i++;


            if(i >= text.length){

                clearInterval(interval);
                resolve();

            }


        }, speed);

    });

}



// --------------------------------------
// Terminal Input
// --------------------------------------

export function ask(question){

    return new Promise(resolve=>{


        const line = document.createElement("p");

        line.textContent = question;

        screen.appendChild(line);



        const inputLine = document.createElement("p");


        const prompt = document.createElement("span");

        prompt.textContent = "> ";



        const typing = document.createElement("span");

        typing.contentEditable = true;

        typing.className = "terminalInput";

        typing.spellcheck = false;



        inputLine.appendChild(prompt);

        inputLine.appendChild(typing);


        screen.appendChild(inputLine);


        typing.focus();



        typing.addEventListener("keydown",(e)=>{


            if(e.key === "Enter"){


                e.preventDefault();


                const answer = typing.textContent.trim();


                if(answer === "") return;



                typing.contentEditable = false;



                resolve(answer);


            }


        });


    });


}



// --------------------------------------
// Clear Screen
// --------------------------------------

export function clearTerminal(){

    screen.innerHTML = "";

}
