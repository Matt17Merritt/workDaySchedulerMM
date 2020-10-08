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
  var timeDiv = $("<p>");
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

// Acquire the local storage data
var userKey9 = localStorage.getItem("key9");
$(".textarea.row.9").val(userKey9);

var userKey10 = localStorage.getItem("key10");
$(".textarea.row.10").val(userKey10);

var userKey11 = localStorage.getItem("key11");
$(".textarea.row.11").val(userKey11);

var userKey12 = localStorage.getItem("key12");
$(".textarea.row.12").val(userKey12);

var userKey13 = localStorage.getItem("key13");
$(".textarea.row.13").val(userKey13);

var userKey14 = localStorage.getItem("key14");
$(".textarea.row.14").val(userKey14);

var userKey15 = localStorage.getItem("key15");
$(".textarea.row.15").val(userKey15);

var userKey16 = localStorage.getItem("key16");
$(".textarea.row.16").val(userKey16);

var userKey17 = localStorage.getItem("key17");
$(".textarea.row.17").val(userKey17);

// Storing the local storage data via click function
$("button").click(function () {
  function storeData(row, key) {
    var userInput = $(row).val();
    localStorage.setItem(key, userInput);
  }
  storeData(".textarea.row.9", "key9");
  storeData(".textarea.row.10", "key10");
  storeData(".textarea.row.11", "key11");
  storeData(".textarea.row.12", "key12");
  storeData(".textarea.row.13", "key13");
  storeData(".textarea.row.14", "key14");
  storeData(".textarea.row.15", "key15");
  storeData(".textarea.row.16", "key16");
  storeData(".textarea.row.17", "key17");
});
