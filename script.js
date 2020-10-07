// Global variables that will represent rows in the calender
var timeDiv;
var entryDiv;
var saveBtnDiv;

// Display the current date and time
var momentDisplay = moment().format('MMM Do YYYY, h:mm:a');
document.getElementById("currentDay").innerHTML = momentDisplay;
