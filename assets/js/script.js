// Use moment.js to format the variable today to output current day of the week, month, day to html
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Set click listener for save button, get values of description element and save input text in local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    // Set up Fuction to track time, moment.js to format variable, which hour. JQuery time-block & loop over
    function blockTime() {
        var timeCurrent = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Check time, ad background color indicators, past, present, future
            if (timeCurrent > timeBlock) {
                $(this).removeClass("furture");
                $(this).removeClass("present");
                $(this).addClass("past");

            } else if (timeCurrent === timeBlock) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }

    // Set get items from local storage, input details
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    blockTime();

});