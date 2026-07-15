// ======================================
// TIMELINES: THE ARCHIVE
// sceneEngine.js
// ======================================
import {

    typeLine,
    clearTerminal

} from "./terminal.js";
import {

    gameState

} from "./gameState.js";
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


    choicesBox.innerHTML="";


    clearTerminal();


    await typeLine(scene.text);



    // NPC buttons

    if(scene.npcs){


        scene.npcs.forEach(npc=>{


            const button =
            document.createElement("button");


            button.className =
            "timelineOption";


            button.textContent =
            "> Talk to " + npc.name;


            button.onclick = ()=>{


                loadScene(npc.scene);


            };


            choicesBox.appendChild(button);


        });


    }



    // Normal choices

    scene.choices.forEach(choice=>{


        if(choice.condition){


            if(!gameState.flags[choice.condition]){

                return;

            }

        }



        const button =
        document.createElement("button");


        button.className =
        "timelineOption";


        button.textContent =
        "> " + choice.text;



        button.onclick = ()=>{


            if(choice.effect){

                gameState.flags[choice.effect]=true;

            }


            loadScene(choice.next);


        };


        choicesBox.appendChild(button);


    });


}
