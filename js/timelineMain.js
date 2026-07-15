// ======================================
// TIMELINES: THE ARCHIVE
// timelineMain.js
// ======================================

import {

    setTerminalScreen

} from "./terminal.js";
import {

    startSceneEngine

} from "./sceneEngine.js";


import {

    A001

} from "./trainingTimelines/A001.js";



// --------------------------------------
// Start Timeline
// --------------------------------------

startTimeline();



function startTimeline(){
    const timelineScreen =
document.getElementById("timelineText");


setTerminalScreen(timelineScreen);

    startSceneEngine(A001);

}
