// ======================================
// TIMELINES: THE ARCHIVE
// argus.js
// ======================================

import {
    typeLine,
    clearTerminal,
    setTerminalScreen
} from "./terminal.js";


// --------------------------------------
// ARGUS State
// --------------------------------------

let argusActive = false;


// --------------------------------------
// Safe ARGUS Line
// --------------------------------------

async function argusLine(text){

    if(!argusActive){

        return false;

    }


    await typeLine(text);


    return true;

}


// --------------------------------------
// Stop ARGUS
// --------------------------------------

export function stopArgus(){

    argusActive = false;

}


// --------------------------------------
// ARGUS Orientation
// --------------------------------------

export async function startArgusOrientation(assetData){


    // Prevent duplicate conversations

    if(argusActive){

        return;

    }


    argusActive = true;



    const argusDialogue =
    document.getElementById("argusDialogue");



    if(!argusDialogue){

        console.error(
            "ARGUS dialogue screen not found."
        );

        return;

    }



    setTerminalScreen(argusDialogue);

    clearTerminal();




    // ----------------------------------
    // Introduction
    // ----------------------------------


    await argusLine(
        "> ARGUS ONLINE."
    );

    await argusLine("");

    await argusLine(
        `> Good morning, ${assetData.displayName}.`
    );

    await argusLine("");

    await argusLine(
        "> Welcome to The Archive."
    );

    await argusLine("");

    await argusLine(
        `> Asset designation: ${assetData.assetID}`
    );

    await argusLine(
        "> Rank: Candidate"
    );

    await argusLine("");



    // ----------------------------------
    // Identity
    // ----------------------------------


    await argusLine(
        "> I am ARGUS."
    );

    await argusLine(
        "> Adaptive Reality Guidance and Utility System."
    );

    await argusLine("");

    await argusLine(
        "> I will provide assistance during Archive operations."
    );

    await argusLine("");



    // ----------------------------------
    // Orientation Start
    // ----------------------------------


    await argusLine(
        "> New Asset detected."
    );

    await argusLine(
        "> Knowledge database: insufficient."
    );

    await argusLine("");

    await argusLine(
        "> Beginning mandatory orientation."
    );

    await argusLine("");



    // ----------------------------------
    // The Archive
    // ----------------------------------


    await argusLine(
        "> The Archive is an organization dedicated to preserving reality."
    );

    await argusLine("");

    await argusLine(
        "> Countless timelines exist throughout history."
    );

    await argusLine("");

    await argusLine(
        "> Some develop naturally."
    );

    await argusLine(
        "> Others become unstable."
    );

    await argusLine("");



    // ----------------------------------
    // Timeline Instability
    // ----------------------------------


    await argusLine(
        "> When a timeline becomes damaged..."
    );

    await argusLine(
        "> Reality begins rejecting itself."
    );

    await argusLine("");

    await argusLine(
        "> Events occur that should not exist."
    );

    await argusLine(
        "> Memories contradict each other."
    );

    await argusLine(
        "> History changes."
    );

    await argusLine("");

    await argusLine(
        "> These incidents are classified as Timeline Instability."
    );

    await argusLine("");



    // ----------------------------------
    // Reality Explanation
    // ----------------------------------


    await argusLine(
        "> A timeline is not a simulation."
    );

    await argusLine(
        "> It is not a recording."
    );

    await argusLine("");

    await argusLine(
        "> It is a living reality."
    );

    await argusLine("");



    // ----------------------------------
    // Asset Role
    // ----------------------------------


    await argusLine(
        "> You are an Asset of The Archive."
    );

    await argusLine("");

    await argusLine(
        "> Your responsibility is investigation."
    );

    await argusLine(
        "> Your responsibility is recovery."
    );

    await argusLine(
        "> Your responsibility is stabilization."
    );

    await argusLine("");



    // ----------------------------------
    // Protocol
    // ----------------------------------


    await argusLine(
        "> Archive Protocol One:"
    );

    await argusLine("");

    await argusLine(
        "> Observe before interfering."
    );

    await argusLine("");

    await argusLine(
        "> The people inside a timeline are not obstacles."
    );

    await argusLine(
        "> They are lives."
    );

    await argusLine("");



    // ----------------------------------
    // Personalization
    // ----------------------------------


    await argusLine(
        "> One configuration remains."
    );

    await argusLine("");

    await argusLine(
        "> My default designation is ARGUS."
    );

    await argusLine("");

    await argusLine(
        "> Would you like to assign a personal designation?"
    );

    await argusLine("");

    await argusLine(
        "[ KEEP ARGUS ]"
    );

    await argusLine(
        "[ RENAME ]"
    );


}
