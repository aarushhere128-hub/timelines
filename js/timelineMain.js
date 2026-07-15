// ======================================
// TIMELINES: THE ARCHIVE
// timelineMain.js
// ======================================

import {

    getTimeline

} from "./timeline.js";


// --------------------------------------
// Current Timeline
// --------------------------------------

const timeline =

getTimeline("A-001");


// --------------------------------------
// Start Timeline
// --------------------------------------

startTimeline();


// --------------------------------------
// Timeline
// --------------------------------------

function startTimeline(){

    console.log(timeline);

}
