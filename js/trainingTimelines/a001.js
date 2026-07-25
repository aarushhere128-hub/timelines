// ======================================
// TIMELINES: THE ARCHIVE
// A-001
// ======================================


export const A001 = {


    id:"A-001",

    name:"Silent Justice",

    start:"arrival",


    scenes:{


        arrival:{


            text:

            "You awaken beside a cold dirt road.\n\n" +
            "A small village rests beyond the hill.\n\n" +
            "Something feels wrong.",


            choices:[

                {

                    text:"Walk toward the village",

                    next:"village"

                },

                {

                    text:"Inspect the surroundings",

                    next:"road"

                }

            ]

        },



        village:{


            text:

            "The village is unusually quiet.\n\n" +
            "Smoke rises from several houses.",


            choices:[

                {

                    text:"Enter the village square",

                    next:"villageSquare"

                }

            ]

        },



        road:{


            text:

            "You examine the road.\n\n" +
            "There are footprints leading toward the village.",


            choices:[

                {

                    text:"Follow the footprints",

                    next:"village"

                }

            ]

        },



        villageSquare:{


            text:

            "The village square is silent. Several people watch you.",


            npcs:[


                {

                    name:"Elder Rowan",

                    dialogue:"rowan"

                },


                {

                    name:"Mira",

                    dialogue:"mira"

                },


                {

                    name:"Captain Vale",

                    dialogue:"vale"

                }


            ],


            choices:[

                {

                    text:"Continue investigation",

                    next:"investigation"

                }

            ]

        }



    }


};
