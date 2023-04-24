// Wrapped all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
// sets varables for various DOM elements
var timeLocation = $("#currentDay");
var buttons = $(".btn");
var taskHour;
var currentTime;

// this function displays timer located in the header using day.js
function displayTime() {
  var rightNow = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeLocation.text(rightNow);
}

//function sets the styles and text for each time block
function hourTracker() {
  //get current number of hours from local storage.
  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));

  // for each of our time block compare the task hour with current hour and set styles accordingly
  $(".time-block").each(function () {
    // day.js
    currentTime = parseInt(dayjs().format("HH"));
    // this removes all text other than the hour number
    taskHour = parseInt(this.id.replace(/[^0-9]/g, ""));
    // logic that checks if task is set before, after, or during the current hour
    if (taskHour < currentTime) {
      $(this).addClass("past");
    } else if (taskHour === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

//this button handles the saving of the task to local storage when selecting save button
$(function () {

  buttons.on("click", function () {
    var input = $(this).siblings(".description").val();
    taskHour = parseInt(
      $(this)
        .parent()
        .attr("id")
        .replace(/[^0-9]/g, "")
    );
    localStorage.setItem(taskHour, input);
  });

  hourTracker();
  displayTime();
  setInterval(displayTime, 1000);
});
})
