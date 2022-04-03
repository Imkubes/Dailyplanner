//Setting variables and connecting it with html
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