let hasMessage=false;


export function notifyArgus(){

    const circle =
    document.getElementById("argusNotification");


    circle.classList.remove("hidden");

    hasMessage=true;

}



export function clearArgusNotification(){

    const circle =
    document.getElementById("argusNotification");


    circle.classList.add("hidden");

    hasMessage=false;

}
