//Setting variables and connecting it with html
var currentHour = moment().hours();
//console.log(currentHour);
var rows = $('.rows');
var todaysDateEl = $('.todayDate');
var dateEl = $('<h1>');
//using the moment api to get today's date
var dateToday = moment().format('LLL');
//Giving my H1 element a class
dateEl.attr('class', 'dateCenter');
//displaying todays date in the header
dateEl.text(dateToday);
//Appending my h1 tag to the header class
todaysDateEl.append(dateEl);
//linking my save button
var saveBtn = $('.saveBtn');
// when user clicks save button, data is saved to local storage
saveBtn.on('click', function(){
    var textEnteredEl = $(this).siblings('.dataEntry').val();
   // console.log(textEnteredEl);
    var hourKey = $(this).parent().attr('id');
    localStorage.setItem(hourKey, textEnteredEl);
})
//If it is the next day, clears the local storage inputs to start a blank schedule
if (currentHour >=23) {
    localStorage.clear();
} else {
    // Otherwise, display users input for time blocks
    $("#9 .dataEntry").val(localStorage.getItem("9"));
    $("#10 .dataEntry").val(localStorage.getItem("10"));
    $("#11 .dataEntry").val(localStorage.getItem("11"));
    $("#12 .dataEntry").val(localStorage.getItem("12"));
    $("#13 .dataEntry").val(localStorage.getItem("13"));
    $("#14 .dataEntry").val(localStorage.getItem("14"));
    $("#15 .dataEntry").val(localStorage.getItem("15"));
    $("#16 .dataEntry").val(localStorage.getItem("16"));
    $("#17 .dataEntry").val(localStorage.getItem("17"));
}

setColor();
// Color based on time function
function setColor() {
    //setting the hour to compare to the hour ID in html
    var hour = $('.dataEntry').parent().attr('id');
   // console.log(hour);
// if current hour is greater than hour on schedule, add class future
    if (currentHour > hour) {
        $('.dataEntry').removeClass('past');
        $('.dataEntry').removeClass('present');
        $('.dataEntry').addClass('future');
// if current hour == hour on schedule, add class present
    } else if (currentHour == hour) {
        $('.dataEntry').removeClass('future');
        $('.dataEntry').removeClass('past');
        $('.dataEntry').addClass('present');
// if current hour is less than what is on schedule, add class past
    } else {
        $('.dataEntry').removeClass('present');
        $('.dataEntry').removeClass('future');
        $('.dataEntry').addClass('past');
    }
}

//console.log(currentHour);