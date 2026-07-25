// ======================================
// TIMELINES: THE ARCHIVE
// dialogueEngine.js
// ======================================


import {

    typeLine,
    clearTerminal

} from "./terminal.js";
import {

    gameState

} from "./gameState.js";

let currentDialogue;
let actionHandler = null;


export function setDialogueActions(actions){

    actionHandler = actions;

}


// --------------------------------------
// Start Dialogue
// --------------------------------------

let currentAsset;


export async function startDialogue(dialogue, assetData){

    currentDialogue = dialogue;

    currentAsset = assetData;

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
    console.log("Choice container:", container);


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



if(line.choices && line.choices.length > 0){

    showChoices(line.choices);

}
else{

    if(window.dialogueComplete){

        window.dialogueComplete();

    }

}

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

if(choice.action){

    if(actionHandler){

        actionHandler(choice.action);

    }

    return;

}


    showDialogueLine(
        choice.next
    );


};


        container.appendChild(button);


    });


}
function applyEffect(effect){


    if(!effect){

        return;

    }



    switch(effect){


        case "gainRowanTrust":

            gameState.rowanTrust++;

            break;



        case "loseRowanTrust":

            gameState.rowanTrust--;

            break;



        case "metRowan":

            gameState.flags.metRowan = true;

            break;



        case "learnedTruth":

            gameState.flags.learnedTruth = true;

            break;


    }


}
