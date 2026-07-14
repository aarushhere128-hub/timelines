// ======================================
// TIMELINES: THE ARCHIVE
// argus.js
// ======================================

import {

    typeLine,
    printLine,
    ask,
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

    const dialogue =
    document.getElementById("argusDialogue");

    dialogue.insertAdjacentHTML(

        "beforeend",

        `

        <button class="argusOption" id="keepArgus">

            > KEEP ARGUS

        </button>

        <button class="argusOption" id="renameArgus">

            > RENAME

        </button>

        `

    );

    document
    .getElementById("keepArgus")
    .onclick = ()=>keepArgus(assetData);

    document
    .getElementById("renameArgus")
    .onclick = ()=>renameArgus(assetData);

}
// --------------------------------------
// KEEP ARGUS
// --------------------------------------

async function keepArgus(assetData){

    document
    .querySelectorAll(".argusOption")
    .forEach(button => button.remove());

    await typeLine("");

    await typeLine("> Designation accepted.");

    await typeLine("> I will continue responding as ARGUS.");

    await typeLine("");

    await typeLine("> Orientation complete.");

}


// --------------------------------------
// RENAME ARGUS
// --------------------------------------

async function renameArgus(assetData){

    document
    .querySelectorAll(".argusOption")
    .forEach(button => button.remove());

    await typeLine("");

    await typeLine("> Enter new designation.");

    const newName = await ask("");

    console.log(newName);

}
