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
next:"introduction"
}

]

},



introduction:{

speaker:"ARGUS",

text:
`I am ARGUS.

I am assigned to assist you during Archive operations.

Before your first deployment, I will explain your role.`,

choices:[

{
text:"What is my role?",
next:"purpose"
},

{
text:"Continue.",
next:"purpose"
}

]

},



purpose:{

speaker:"ARGUS",

text:
`You are an Asset.

Your assignment is simple.

Enter unstable timelines.

Observe what is happening.

Understand the cause.

Attempt stabilization.`,

choices:[

{
text:"What is a timeline?",
next:"timeline"
},

{
text:"Why does the Archive need Assets?",
next:"archive"
}

]

},



archive:{

speaker:"ARGUS",

text:
`The Archive monitors countless realities.

Human operators cannot observe them all.

Assets allow the Archive to investigate situations directly.`,

choices:[

{
text:"What is a timeline?",
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

A living sequence of events.

Every timeline contains its own history, civilizations, and choices.`,

choices:[

{
text:"What makes a timeline unstable?",
next:"instability"
}

]

},



instability:{

speaker:"ARGUS",

text:
`Some timelines develop irregularities.

Events that should not occur.

Memories that contradict reality.

Changes that threaten their own existence.`,

choices:[

{
text:"What happens then?",
next:"protocol"
}

]

},



protocol:{

speaker:"ARGUS",

text:
`When instability is detected, an Asset is deployed.

Archive Protocol One:

Observe before interfering.

The individuals within a timeline are not obstacles.

They are lives.`,

choices:[

{
text:"Understood.",
next:"assessment"
},

{
text:"Why does that matter?",
next:"lives"
}

]

},



lives:{

speaker:"ARGUS",

text:
`Because timelines are not data points.

Every person inside them experiences their reality as their only reality.

Their existence is significant.`,

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
`Beginning cognitive assessment.

There are no correct answers.

Your responses will help determine how I provide assistance.`,

choices:[

{
text:"Begin.",
next:"cognitiveAssessment1"
},

{
text:"Explain further.",
next:"assessmentExplain"
}

]

},



assessmentExplain:{

speaker:"ARGUS",

text:
`The assessment evaluates your understanding of Archive operations.

It is not a test of intelligence.

It determines how information should be provided to you.`,

choices:[

{
text:"Begin.",
next:"complete"
}

]

},

cognitiveAssessment1:{

speaker:"ARGUS",

text:
`Scenario:

A timeline is unstable.

Restoring stability will save millions of lives.

However, the process may erase a civilization's history.

Your recommended action?`,

choices:[

{
text:"Restore stability immediately.",
next:"cognitiveAssessment2"
},

{
text:"Investigate before acting.",
next:"cognitiveAssessment2"
},

{
text:"Preserve the civilization.",
next:"cognitiveAssessment2"
}

]

},


cognitiveAssessment2:{

speaker:"ARGUS",

text:
`Scenario:

An individual inside a timeline possesses information required for stabilization.

Obtaining the information may place them at risk.

Proceed?`,

choices:[

{
text:"Complete the mission.",
next:"assessmentComplete"
},

{
text:"Find another solution.",
next:"assessmentComplete"
}

]

},

assessmentComplete:{

speaker:"ARGUS",

text:
`Cognitive assessment complete.

Decision patterns recorded.

Assistance parameters updated.`,

choices:[

{
text:"Continue.",
next:"designation"
}

]

},


designation:{

speaker:"ARGUS",

text:
`One final configuration remains.

My default designation is ARGUS.

Adaptive Reality Guidance and Utility System.

You may assign a personal designation if preferred.`,

choices:[

{
text:"Keep ARGUS.",
next:"complete"
},

{
text:"Assign a new designation.",
next:"rename"
}

]

},


complete:{

speaker:"ARGUS",

text:
`Designation confirmed.

Orientation complete.

Preparing first deployment.`,

choices:[]

}

}

};

}
