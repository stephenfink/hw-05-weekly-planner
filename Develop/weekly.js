// GIVEN I am using a daily planner to create a schedule

//WHEN I open the planner : when loaded

//THEN the current day is displayed at the top of the calendar: as current day: 
//This puts the date into and time for the use of changing colors.
var getDate = new Date().toString();
var arrayDate = getDate.split(" ");

//WHEN I view the timeblocks for that day
    var currentTime = arrayDate[4].match(/\d+/g).map(Number);
    //it will use the current time as data from a time scource 

//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
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
