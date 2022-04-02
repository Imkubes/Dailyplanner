var todaysDateEl = $('.todayDate');
var dateEl = $('<h1>');
var dateToday = moment().format('dddd');

dateEl.text(dateToday);

todaysDateEl.append(dateEl);