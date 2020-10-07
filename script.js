// Global variables that will represent rows in the calender
var timeDiv;
var entryDiv;
var saveBtnDiv;

// Display the current date and time
var momentDisplay = moment().format('MMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = momentDisplay;

// console.log(Intl.DateTimeFormat)

// Array of time of day indicators and numbers
var timeSlots = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm",];
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// For loop adding timeSlots to timeDiv
for (var i = 0; i < timeSlots.length;i++) {
    let timeDiv = $("<p>");
    timeDiv.addClass("hour row");
    timeDiv.text(timeSlots[i]);
    $(".float-left").append(timeDiv);
}

// 

