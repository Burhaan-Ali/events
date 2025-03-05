const urlParameteres = new URLSearchParams(window.location.search)

const eventId = urlParameteres.get('eventId')
// console.log(eventId);
if(urlParameteres.get('eventId')){
    $.ajax({
        url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=jrkiKyHKrWrHiEvhzzfCZn5LfWKgLd5r",
        type:"GET",
        success:function(response){
            console.log(response._embedded.events);
            response._embedded.events.forEach((event)=>{
                if(eventId === event.id){
                    let eventHolder = `
                
                    <div  class="grid md:grid-cols-2 gap-4">
                        <div class="space-y-3 p-4">
                            <div class="img">
                                <img src="${event.images[6].url}" class="w-[100%] h-[220px]" alt="">
                            </div>
                        
                        </div>
                        <div class="space-y-3 p-4 flex flex-col justify-end">
                            <div class="text-xl font-bold">${(event.name.length > 10) ? event.name.slice(0,20) + "..." : event.name}</div> 
                            <p class="text-gray-600">${(event.promoter.description) ? event.promoter.description : 'No description'}</p>
                            <div class="text-md font-thin flex gap-1">
                                <div class="time">${event.dates.start.localDate}</div>
                                <div class="time"> ${event.dates.start.localTime}</div>
                            </div>
                            <div class="space-x-2">
                                <i class="fa-solid fa-location-dot"></i>
                               ${event.dates.timezone}
                            </div>
                        </div>
                    </div>
                     <div class="grid grid-cols-1 p-4 ">

                        <form action="confirmation.html" class=" flex flex-col gap-3 justify-end">
                        <div class=" w-100 font-bold uppercase"> $<input type="number" value="${event.priceRanges[0].min}" readonly class="focus:outline-none w-[50px]"> / Tickect </div>
                        <div class="space-x-4 flex justify-between">
                            <input required id="numberOftickets" step="1" value="" type="number" placeholder="Number of tickets" class="focus:outline-none bg-transparent border  py-1 px-2 rounded w-[78%]">
                            <div class="bg-[#7093ff] text-white px-4 flex items-center rounded text-md md:text-lg">FREE</div>
                        </div>
                            <input required type="text" placeholder="Name" class="focus:outline-none bg-transparent border  py-1 px-2 rounded w-[100%]">
                            <input required type="email" placeholder="Email" class="focus:outline-none bg-transparent border  py-1 px-2 rounded w-[100%]">
                            <input required type="number" placeholder="Number" class="focus:outline-none bg-transparent border  py-1 px-2 rounded w-[100%]">
                            <input class="text-xl text-center text-white bg-[#7093ff] py-2" type="submit" value="Book Now">
                        </form>
                    </div>
                    `
                    $("#eventDetail").append(eventHolder)
                }else{
                    let eventHolder = `
                    <div class="space-y-3 p-4 border">
                        <div class="img">
                            <img src="${event.images[6].url}" class="w-[100%] h-[200px]" alt="">
                        </div>
                        <div class="text-xl font-bold">${(event.name.length > 10) ? event.name.slice(0,20) + "..." : event.name}</div> 
                        
                        <div class="text-lg font-thin flex gap-1">
                           <div class="time">${event.dates.start.localTime}</div>
                                <div class="time"> ${event.dates.start.localDate}</div>
                        </div>
                        <div class="space-x-2">
                            <i class="fa-solid fa-location-dot"></i>
                            ${event.dates.timezone}
                        </div>
                        <a href="eventDetail.html?eventId=${event.id}" class="flex justify-center cursor-pointer text-xl text-center text-white bg-[#7093ff] py-2">View Detail</a>
                    </div>
                    `
                    // console.log(eventHolder);
                    
                    $("#relatedEvents").append(eventHolder)
                }
                // console.log(eventHolder);
                
            })
        }

    })
}

$("#numberOftickets").on("click",(e)=>{
    // if($("#numberOftickets").length > 0){
    //     console.log($("#numberOftickets").value);
        
    // }
    console.log(e);
    
})


setTimeout(() => {
    $("#numberOftickets").focus();
    $("#numberOftickets").on("keyup", function() {
        var ticketsValue = $(this).val();
        var ticketPrice = $(this).closest('div').prev().find('input').val();  
        
        if(ticketsValue > 0) {
            $(this).next().html("$" + (ticketsValue * ticketPrice));
        } else {
            $(this).next().html("FREE");
        }
    });
}, 1000);

