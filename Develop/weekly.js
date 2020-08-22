// GIVEN I am using a daily planner to create a schedule

//WHEN I open the planner : when loaded

//THEN the current day is displayed at the top of the calendar: as current day: 
//This puts the date into and time for the use of changing colors.
var getDate = new Date().toString();
var arrayDate = getDate.split(" ");
var events;
//WHEN I view the timeblocks for that day
    var currentTime = arrayDate[4].match(/\d+/g).map(Number);
    //it will use the current time as data from a time scource 

// this gets the current day from the currentTime var
$("#currentDay").text(arrayDate[0] + ", " + arrayDate[1] + " " + arrayDate[2]);



    // this is for events saving for local storage 

    function renderEvents(){
        events = JSON.parse(localStorage.getItem("#eventsInput"));
    
        if( events === null){
            events = [
            {//i-index is 0 for 6 am
                event: ""},
            {//i-index is 1 for 7 am
                event: ""},
            {//i-index is 2 for 8 am
                event: ""},
            {//i-index is 3 for 9 am
                event: ""},
            {//i-index is 4 for 10 am
                event: ""},
            {//i-index is 5 for 11 am
                event: ""},
            {//i-index is 6 for 12 pm
                event: ""},
            {//i-index is 7 for 1 pm
                event: ""},
            {//i-index is 8 for 2 pm
                event: ""},
            {//i-index is 9 for 3 pm
                event: ""},
            {//i-index is 10  for 4 pm
                event: ""}
            ];
            localStorage.setItem("#eventInput", JSON.stringify(events));
        } else{ 
          // this is for rending for storage 
            for(var i = 0; i < events.length; i++){
                $("#eventInput"+(i+1)).attr("value", events[i].event);
            };
        };
    };
    renderEvents();
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// this changes the colors base on time, 
    function colors(){
        for(var i = 0; i<events.length; i++){
            var sel = $("#eventInput" + (i+1));

            if(sel[0].previousElementSibling.attributes[1].value < currentTime[0]){

                sel[0].classList.add("past");
                sel[0].previousElementSibling.classList.add("past");
                sel[0].classList.add("past");
                sel[0].previousElementSibling.classList.add("past");
    
            }else if(selector[0].previousElementSibling.attributes[1].value == currentTime[0]){
    
                sel[0].classList.add("present");
                sel[0].previousElementSibling.classList.add("present");
                sel[0].classList.add("present");
                sel[0].previousElementSibling.classList.add("present");
    
    
            }else{
    
                sel[0].classList.add("future");
                sel[0].previousElementSibling.classList.add("future");
                sel[0].classList.add("future");
                sel[0].previousElementSibling.classList.add("future");
    
            }
    }
}
colors();
$(".btn").click(function(){
    var btnNum = this.id.match(/\d+/g).map(Number);
    
    events[btnNum - 1].event = this.previousElementSibling.value;
    
    localStorage.setItem("events", JSON.stringify(events));
});



    // the css has some colors madde already to do this but when and how it is use is what code here needs


//WHEN I scroll down: how many hours to use within one day: checked by HTML

//THEN I am presented with timeblocks for standard business hours
    // for each hour: 12 hour work flow to set for over time or change of time worked






//WHEN I click into a timeblock:
    // on click event for a input event to reflect user input to be shown on screen

//THEN I can enter an event:
    // event is saved for use later, as well as a past,current, and future events of that day

//WHEN I click the save button for that timeblock
    //This will be an event listener for clicking save to save data to storage
    //the storage will be locked into that time frame
//THEN the text for that event is saved in local storage





//WHEN I refresh the page
//THEN the saved events persist 
