// ======================================
// TIMELINES: THE ARCHIVE
// argus.js
// ======================================

import {

    typeLine,
    printLine,
    clearTerminal,
    setTerminalScreen

} from "./terminal.js";

import {

    loadArgusStage,
    saveArgusStage

} from "./argusDatabase.js";

import {

    getOrientation

} from "./argusConversation.js";


// --------------------------------------
// ARGUS State
// --------------------------------------

let argusRunning = false;


// --------------------------------------
// Stop ARGUS
// --------------------------------------

export function stopArgus(){

    argusRunning = false;

}


// --------------------------------------
// Start ARGUS
// --------------------------------------

export async function startArgusOrientation(assetData){

    if(argusRunning){

        return;

    }

    argusRunning = true;


    const dialogue =

        document.getElementById("argusDialogue");


    setTerminalScreen(dialogue);

    clearTerminal();
    const choices =
document.getElementById("argusChoices");

choices.classList.add("hidden");

choices.innerHTML = "";


    //------------------------------------
    // Conversation
    //------------------------------------

    const conversation =

        getOrientation(assetData);


    //------------------------------------
    // Progress
    //------------------------------------

    const stage =

        await loadArgusStage(assetData.uid);


    //------------------------------------
    // Instantly print previous lines
    //------------------------------------

    for(let i = 0; i < stage; i++){

        printLine(conversation[i]);

    }


    //------------------------------------
    // Continue typing
    //------------------------------------

    for(let i = stage; i < conversation.length; i++){

        if(!argusRunning){

            return;

        }

        await typeLine(conversation[i]);

        await saveArgusStage(

            assetData.uid,

            i + 1

        );

    }


    //------------------------------------
    // End of Part 1
    //------------------------------------

    showRenameChoices(assetData);
  
}
  function showRenameChoices(assetData){

    const choices =
    document.getElementById("argusChoices");

    choices.classList.remove("hidden");

    choices.innerHTML = `

        <button id="keepArgus">

            KEEP ARGUS

        </button>

        <button id="renameArgus">

            RENAME

        </button>

    `;


    document

    .getElementById("keepArgus")

    .onclick = ()=>{

        keepArgus(assetData);

    };


    document

    .getElementById("renameArgus")

    .onclick = ()=>{

        renameArgus(assetData);

    };

}
// --------------------------------------
// KEEP ARGUS
// --------------------------------------

function keepArgus(assetData){
    document.getElementById("keepArgus").disabled = true;
document.getElementById("renameArgus").disabled = true;

    console.log("KEEP ARGUS");
    document
.getElementById("keepArgus")
.classList.add("selected");

}


// --------------------------------------
// RENAME ARGUS
// --------------------------------------

function renameArgus(assetData){
    document.getElementById("keepArgus").disabled = true;
document.getElementById("renameArgus").disabled = true;

    console.log("RENAME ARGUS");
    document
.getElementById("renameArgus")
.classList.add("selected");

}
