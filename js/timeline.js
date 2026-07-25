// ======================================
// TIMELINES: THE ARCHIVE
// timelineDatabase.js
// ======================================

import {
    A001
} from "./timeline/a001.js";


const timelines = {

    "A-001": A001

};



export function getTimeline(id){

    return timelines[id];

}
