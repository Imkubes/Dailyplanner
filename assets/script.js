var todaysDateEl = $('.todayDate');
var dateEl = $('<h1>');
var dateToday = moment().format('MMMM Do YYYY, h:mm:ss a');

dateEl.attr('class', 'dateCenter');

dateEl.text(dateToday);

todaysDateEl.append(dateEl);