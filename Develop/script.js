// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeLocation = $("#currentDay");
var buttons = $(".btn");
var hourX;
var hourX2;

  function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeLocation.text(rightNow);
}

$(function () {

  // handle displaying the time

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  buttons.on("click", function(){
    //console.log("hello");
    hourX = parseInt($(this).parent().attr("id").replace(/[^0-9]/g, ''));
    var input = $(this).siblings(".description").val();
    var currentTime = dayjs().format('HHA');
    taskHour = $(this).parent().children(".hour").text();

    var timeVar = dayjs(taskHour);
    // dayjs(timeVar, 'HHA');

  


    //9AM

    console.log(currentTime)
    console.log(taskHour);
    console.log(timeVar);

    localStorage.setItem(hourX, input);

    if(taskHour < currentTime ){
      // $(this).addClass("past");
      // console.log("hi")
    }
  })



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $(".time-block").each(function () {})


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  
  
  // TODO: Add code to display the current date in the header of the page.
  displayTime();
  setInterval(displayTime, 1000);
});