// ======================================
// TIMELINES: THE ARCHIVE
// sceneEngine.js
// ======================================
import {

    typeLine,
    clearTerminal

} from "./terminal.js";

let currentTimeline;


// --------------------------------------
// Start Timeline
// --------------------------------------

export function startSceneEngine(timeline){

    currentTimeline = timeline;

    loadScene(
        timeline.start
    );

}


// --------------------------------------
// Load Scene
// --------------------------------------

async function loadScene(sceneID){

    const scene =
    currentTimeline.scenes[sceneID];


    const choicesBox =
    document.getElementById("timelineChoices");


    choicesBox.innerHTML = "";


    clearTerminal();


    await typeLine(scene.text);



    scene.choices.forEach(choice=>{


        const button =
        document.createElement("button");


        button.className =
        "timelineOption";


        button.textContent =
        "> " + choice.text;


        button.onclick = ()=>{

            loadScene(choice.next);

        };


        choicesBox.appendChild(button);


    });

}
