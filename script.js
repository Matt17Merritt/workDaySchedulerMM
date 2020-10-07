// Global variables that will represent rows in the calender
var timeDiv;
var entryDiv;
var saveBtnDiv;

// Display the current date and time
var momentDisplay = moment().format("MMM Do YYYY, h:mm:a");
document.getElementById("currentDay").innerHTML = momentDisplay;

// console.log(Intl.DateTimeFormat)

// Variable to hold the current hour of day
var currentHour = moment().format("H");

// Array of time of day indicators and numbers
var timeSlots = [
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// For loop adding timeSlots to timeDiv
for (var i = 0; i < timeSlots.length; i++) {
  let timeDiv = $("<p>");
  timeDiv.addClass("hour row");
  timeDiv.text(timeSlots[i]);
  $(".float-left").append(timeDiv);
}

// For loop adding an entryDiv and coloring based on currentHour var
for (i = 0; i < timeSlots.length; i++) {
  var entryDiv = $(
    `<input type='text' data-hour='${workHours[i]}' class='textarea row ${workHours[i]}' size='90' placeholder=''/>`
  );
  $(".float-none").append(entryDiv);

  if (workHours[i] == currentHour) {
    $(entryDiv).css("background", "#ccffee");
  } else if (workHours[i] > currentHour) {
    $(entryDiv).css("background", "#42f55a");
  }
}

// For loop adding a saveBtnDiv to calender
for (i = 0; i < timeSlots.length; i++) {
    var saveBtnDiv = $("<button class='saveBtn saveBtn:hover'>");
    saveBtnDiv.text("Save");
    $(".float-right").append(saveBtnDiv);
}
