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

    // Set up Fuction to track time, moment.js to format variable, which hour. JQuery time-block & loop over
    function trackTime() {
        var timeCurrent = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1])

            console.log(timeBlock)
            }

        })

    }

    // Set get items from local storage, input details
    $("#hour9 .details").val(localStorage.getItem("hour9"));
    $("#hour10 .details").val(localStorage.getItem("hour9"));
    $("#hour11 .details").val(localStorage.getItem("hour9"));
    $("#hour12 .details").val(localStorage.getItem("hour9"));
    $("#hour1 .details").val(localStorage.getItem("hour9"));
    $("#hour2 .details").val(localStorage.getItem("hour9"));
    $("#hour3 .details").val(localStorage.getItem("hour9"));
    $("#hour4 .details").val(localStorage.getItem("hour9"));
    $("#hour5 .details").val(localStorage.getItem("hour9"));
    $("#hour9 .details").val(localStorage.getItem("hour9"));

    trackTime();



})