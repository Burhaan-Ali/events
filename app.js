let eventSearchInput = document.querySelector("#eventSearchInput")
let searchEvent = document.querySelector("#searchEvent")

// eventSearchInput.addEventListener("keyup",()=>{
//    if(eventSearchInput.value.length > 0){
//         searchEvent.classList.remove("hidden")
//    }else{
//         searchEvent.classList.add("hidden")
//    }
// })


window.addEventListener("offline",()=>{
    // if(window.ononline){
    let offline = document.createElement("div")
    offline.className =" text-center absolute w-100 h-100 top-0 bottom-0 right-0 left-0 items-center font-bold text-3xl flex justify-center bg-white"
    offline.innerHTML = "You are Offline"
    $("body").append(offline);
    // }
})

$("#menu-icons").on("click",()=>{
    $("#menu").slideToggle()
})
