// ======================================
// ARGUS Conversation
// ======================================

export function getOrientation(asset){

return {

start:"activation",

lines:{


activation:{

speaker:"ARGUS",

text:
`Connection established.

Adaptive Reality Guidance and Utility System online.

Identity recognized.

Asset designation: ${asset.assetID}`,

choices:[

{
text:"Continue.",
next:"purpose"
}

]

},



purpose:{

speaker:"ARGUS",

text:
`I am ARGUS.

I provide assistance during Archive operations.

Your assignment:

Observe.
Analyze.
Stabilize.`,

choices:[

{
text:"What is a timeline?",
next:"timeline"
},

{
text:"Understood.",
next:"timeline"
}

]

},



timeline:{

speaker:"ARGUS",

text:
`A timeline is an independent reality.

Not a simulation.
Not a recording.

A living sequence of events.`,

choices:[

{
text:"Continue.",
next:"protocol"
}

]

},



protocol:{

speaker:"ARGUS",

text:
`Archive Protocol One:

Observe before interfering.

The individuals within a timeline are not obstacles.

They are lives.`,

choices:[

{
text:"Continue.",
next:"assessment"
}

]

},



assessment:{

speaker:"ARGUS",

text:
`Beginning cognitive assessment.`,

choices:[

{
text:"Ready.",
next:"complete"
},

{
text:"Explain.",
next:"complete"
}

]

},



complete:{

speaker:"ARGUS",

text:
`Orientation complete.

Preparing first deployment.`,

choices:[]

}


}

};

}
