// ======================================
// TIMELINES: THE ARCHIVE
// A-001
// ======================================


export const A001 = {


id:"A-001",


name:"The Vanishing Village",


conditions:[

"Temperate",
"Rural Settlement",
"Reality Instability Detected"

],



start:"arrival",



scenes:{


arrival:{


text:
`You materialize beside a dirt road.

A small village rests beyond the hill.

Your equipment detects inconsistencies in local historical records.`,


choices:[

{
text:"Enter the village",
next:"village"
},

{
text:"Inspect surroundings",
next:"road"
},

{
text:"Contact ARGUS",
next:"argus"
}

]


},



road:{


text:
`You inspect the area.

The environment appears normal.

However, your Archive equipment detects conflicting probability readings.`,


choices:[

{
text:"Enter the village",
next:"village"
}

]


},



argus:{


text:
`ARGUS:

Initial analysis:

Timeline instability confirmed.

Cause unknown.

Recommendation:

Observe before intervention.`,

choices:[

{
text:"Enter the village",
next:"village"
}

]


},



village:{


text:
`The village appears peaceful.

However, something feels incorrect.

Several residents look confused when asked simple questions.`,


npcs:[

"Rowan",
"Mira",
"Elias"

],


choices:[

{
text:"Investigate the village",
next:"investigation"
}

]


},



investigation:{


text:
`You begin gathering information.

The villagers describe events that contradict each other.

Some memories do not match reality.`,

choices:[

{
text:"Continue investigation",
next:"decision"
}

]


},



decision:{


text:
`The instability appears connected to two conflicting versions of history.

You must decide how to proceed.`,

choices:[

{
text:"Preserve the current timeline",
next:"success"
},

{
text:"Allow the alternate history",
next:"alternate"
},

{
text:"Attempt stabilization through both histories",
next:"trueSuccess"
},

{
text:"Leave without intervention",
next:"failure"
}

]


},



success:{


text:
`The timeline stabilizes.

The village continues existing.

However, some historical records disappear permanently.`

},



alternate:{


text:
`The timeline stabilizes.

The village's existence changes drastically.

Reality accepts a different outcome.`

},



trueSuccess:{


text:
`The conflicting histories merge.

The timeline reaches a stable state.

The outcome was not predicted by the Archive.`

},



failure:{


text:
`The instability continues.

The timeline cannot establish a consistent reality.`

}


}


};
