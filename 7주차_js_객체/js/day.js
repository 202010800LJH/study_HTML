var now = new Date();
var firstDay = new Date("2020-10-01");

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;

passedTime = Math.round(passedTime / (24 * 60 * 60 * 1000));
document.querySelector('#result').innerText = passedTime;