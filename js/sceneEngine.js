// ======================================
// TIMELINES: THE ARCHIVE
// sceneEngine.js
// ======================================


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

function loadScene(sceneID){

    const scene =
    currentTimeline.scenes[sceneID];


    const textBox =
    document.getElementById("timelineText");


    const choicesBox =
    document.getElementById("timelineChoices");


    textBox.textContent =
    scene.text;


    choicesBox.innerHTML = "";


    scene.choices.forEach(choice=>{


        const button =
        document.createElement("button");


        button.className =
        "timelineOption";


        button.textContent =
        "> " + choice.text;


        button.onclick = ()=>{

            loadScene(
                choice.next
            );

        };


        choicesBox.appendChild(button);


    });

}
