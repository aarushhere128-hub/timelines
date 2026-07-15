// ======================================
// TIMELINES: THE ARCHIVE
// Elder Rowan Dialogue
// A-001 Silent Justice
// ======================================


export const rowanDialogue = {


id:"rowan",


start:"intro",


lines:{



intro:{


speaker:"Rowan",


text:

"You are not from here.",


choices:[


{

text:"How did you know?",

next:"observant"


},


{

text:"Who are you?",

next:"identity"


},


{

text:"What do you mean?",

next:"confused"


}


]


},



observant:{


speaker:"Rowan",


text:

"Because you look at this village like someone searching through a memory.",


choices:[


{

text:"A memory?",

next:"memory"

},


{

text:"You notice outsiders often?",

next:"outsiders"

}


]


},




identity:{


speaker:"Rowan",


text:

"My name is Rowan. I have lived here longer than most people remember.",


choices:[


{

text:"Longer than they remember?",

next:"memory"

},


{

text:"So you know this place well.",

next:"village"

}


]


},




confused:{


speaker:"Rowan",


text:

"Everyone who arrives here thinks they belong. You do not.",


choices:[


{

text:"Why not?",

next:"memory"

}


]


},




memory:{


speaker:"Rowan",


text:

"There are things about this village that do not match the stories we tell ourselves.",


choices:[


{

text:"What things?",

next:"history"

},


{

text:"Are you saying people are lying?",

next:"lie"

}


]


},




outsiders:{


speaker:"Rowan",


text:

"No. You are the first in many years.",


choices:[


{

text:"First what?",

next:"history"

}


]


},




village:{


speaker:"Rowan",


text:

"I know every road, every house, every grave.",


choices:[


{

text:"Every grave?",

next:"grave"

}


]


},




history:{


speaker:"Rowan",


text:

"The official history of Veyr is incomplete.",


choices:[


{

text:"Incomplete how?",

next:"truthHint"

}


]


},




lie:{


speaker:"Rowan",


text:

"Not lies. More like... a story everyone agreed to forget.",


choices:[


{

text:"Who decided that?",

next:"truthHint"

}


]


},




grave:{


speaker:"Rowan",


text:

"Some of those buried there died before this village was founded.",


choices:[


{

text:"That makes no sense.",

next:"truthHint"

}


]


},




truthHint:{


speaker:"Rowan",


text:

"Below this village lies something that should not exist anymore.",


choices:[


{

text:"What is below the village?",

next:"secret"

},


{

text:"Why tell me this?",

next:"reason"

}


]


},




secret:{


speaker:"Rowan",


text:

"A mistake. A miracle. Depending on who you ask."


choices:[


{

text:"I need to see it.",

next:"end"

}


]


},




reason:{


speaker:"Rowan",


text:

"Because I think you were sent here to decide whether we deserve to remain."


choices:[


{

text:"Who sent me?",

next:"end"

}


]


},




end:{


speaker:"Rowan",


text:

"Speak to the others before you decide. One person's truth is only a fragment.",


choices:[]

}



}


};
