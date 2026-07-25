// ======================================
// TIMELINES: THE ARCHIVE
// argus.js
// ======================================
import {
    startDialogue
} from "./dialogueEngine.js";
import {
    setDialogueActions
} from "./dialogueEngine.js";
import {

    typeLine,
    printLine,
    ask,
    clearTerminal,
    setTerminalScreen

} from "./terminal.js";

import {

    saveArgusName

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

export async function startArgusOrientation(
    assetData,
    replay = false
){

    if(argusRunning && !replay){
    return;
}

    argusRunning = true;


  const dialogue =
document.getElementById("argusText");


    setTerminalScreen(dialogue);

    clearTerminal();
    if(assetData.argusConfigured && !replay){

    await startArgusHome(assetData);

    return;

}
   


    //------------------------------------
    // Conversation
    //------------------------------------

    const conversation =

        getOrientation(assetData);


    //------------------------------------
    // Progress
    //------------------------------------
await new Promise(resolve=>{

    window.dialogueComplete = resolve;

  setDialogueActions(async(action)=>{

if(action === "renameArgus"){

    await renameArgus(assetData);

    window.dialogueComplete();

}

});


startDialogue(
    conversation,
    assetData
);
});
    //------------------------------------
    // End of Part 1
    //------------------------------------
if(replay){

    await typeLine("");

    await typeLine("> End of archived orientation.");

    await typeLine("");

    showReturnHome(assetData);

}
  
}

async function renameArgus(assetData){


    await typeLine("");

    await typeLine("> Enter new designation.");

    let newName;


    while(true){

        newName = (await ask(">")).trim();


        if(newName.length < 2){

            await typeLine("> Designation must contain at least 2 characters.");

            continue;

        }


        if(newName.length > 20){

            await typeLine("> Designation cannot exceed 20 characters.");

            continue;

        }


        break;

    }


    await saveArgusName(
        assetData.uid,
        newName
    );


    assetData.argusConfigured = true;
    assetData.argusName = newName;


    await typeLine("");

    await typeLine("> Designation updated.");

    await typeLine(
        `> I will now respond as ${newName}.`
    );

    await typeLine("");

    await typeLine("> Orientation complete.");

}
// --------------------------------------
// ARGUS HOME
// --------------------------------------

async function startArgusHome(assetData){

    await typeLine(`${assetData.argusName} ONLINE.`);

    await typeLine("");

    await typeLine(`> Welcome back, ${assetData.displayName}.`);

    await typeLine("");

    await typeLine("> Awaiting instructions.");

    await typeLine("");

    const dialogue =
    document.getElementById("argusDialogue");

    dialogue.insertAdjacentHTML(

        "beforeend",

        `

        <button class="argusOption" id="replayOrientation">

            > REPLAY ORIENTATION

        </button>

        `

    );

    document
    .getElementById("replayOrientation")
    .onclick = ()=>{

       clearTerminal();

startArgusOrientation(
    assetData,
    true
);

    };

}
function showReturnHome(assetData){

    const dialogue =
    document.getElementById("argusDialogue");

    dialogue.insertAdjacentHTML(

        "beforeend",

        `

        <button class="argusOption" id="returnHome">

            > RETURN

        </button>

        `

    );

    document
    .getElementById("returnHome")
    .onclick = ()=>{

        clearTerminal();

        startArgusHome(assetData);

    };

}
