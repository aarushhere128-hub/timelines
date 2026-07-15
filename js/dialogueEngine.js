// ======================================
// TIMELINES: THE ARCHIVE
// dialogueEngine.js
// ======================================


import {

    typeLine,
    clearTerminal

} from "./terminal.js";


let currentDialogue;



// --------------------------------------
// Start Dialogue
// --------------------------------------

export async function startDialogue(dialogue){


    currentDialogue = dialogue;


    await showDialogueLine(
        dialogue.start
    );


}



// --------------------------------------
// Show Dialogue Node
// --------------------------------------

async function showDialogueLine(id){


    const line =
    currentDialogue.lines[id];


    const container =
    document.getElementById("timelineChoices");


    container.innerHTML = "";


    if(!line){

        return;

    }



    clearTerminal();



    await typeLine(
        line.speaker + ":"
    );


    await typeLine(
        line.text
    );



    showChoices(
        line.choices
    );


}



// --------------------------------------
// Choices
// --------------------------------------

function showChoices(choices){


    const container =
    document.getElementById("timelineChoices");


    choices.forEach(choice=>{


        const button =
        document.createElement("button");


        button.className =
        "timelineOption";


        button.textContent =
        "> " + choice.text;



        button.onclick = ()=>{


            showDialogueLine(
                choice.next
            );


        };


        container.appendChild(button);


    });


}
