// Use moment.js to format the variable today to output current day of the week, month, day to html
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Set click listener for save button, get values of details element and save input text in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).sibling(".details").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    