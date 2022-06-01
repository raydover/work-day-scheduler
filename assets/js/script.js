// Use moment.js to format the variable today to output current day of the week, month, day to html
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

