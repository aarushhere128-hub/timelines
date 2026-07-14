// ======================================
// TIMELINES: THE ARCHIVE
// timeline.js
// ======================================


// --------------------------------------
// Timeline Database
// --------------------------------------

const timelines = {

    "SOL-1284": {

        id: "SOL-1284",

        name: "The Last Ember",

        year: "1284 CE",

        stability: 18,

        status: "Critical Instability",

        conditions: [

            "Cold",

            "Low Visibility",

            "Unstable Reality Events"

        ],

        description:
            "The Kingdom of Solara faces an unknown historical collapse."

    }

};


// --------------------------------------
// Get Timeline
// --------------------------------------

export function getTimeline(id) {

    return timelines[id];

}


// --------------------------------------
// Get Next Deployment
// --------------------------------------

export function getNextDeployment() {

    return timelines["SOL-1284"];

}


// --------------------------------------
// Complete Timeline
// --------------------------------------

export function completeTimeline(id) {

    console.log(
        "Timeline stabilized:",
        id
    );

}


// --------------------------------------
// Get Timeline Conditions
// --------------------------------------

export function getConditions(id) {

    const timeline = timelines[id];

    return timeline.conditions;

}
