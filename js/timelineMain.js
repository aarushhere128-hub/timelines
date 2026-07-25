// ======================================
// TIMELINES: THE ARCHIVE
// timelineMain.js
// ======================================


import {

    setTerminalScreen,
    typeLine

} from "./terminal.js";


import {

    startSceneEngine

} from "./sceneEngine.js";


import {

    A001

} from "./timelines/A001.js";




// --------------------------------------
// Start Timeline
// --------------------------------------

startTimeline();



async function startTimeline(){


    const timelineScreen =
    document.getElementById("timelineText");


    setTerminalScreen(
        timelineScreen
    );



    await showContext();



    startSceneEngine(
        A001
    );


}




async function showContext(){


    await typeLine(
        "TIMELINE A-001"
    );


    await typeLine(
        "DESIGNATION: The Vanishing Village"
    );


    await typeLine(
        ""
    );


    await typeLine(
        "PHYSICAL CONDITIONS:"
    );


    await typeLine(
        "- Temperate"
    );


    await typeLine(
        "- Rural Settlement"
    );


    await typeLine(
        "- Reality Instability Detected"
    );


    await typeLine(
        ""
    );


}
