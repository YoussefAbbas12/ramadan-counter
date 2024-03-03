let date = new Date("March 11, 2024 00:00:00");
let x = setInterval(function () {
    var now = new Date();
    var distance = date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".secounds .numder").innerHTML = seconds;
    document.querySelector(".mintues .numder").innerHTML = minutes;
    document.querySelector(".hours .numder").innerHTML = hours;
    document.querySelector(".days .numder").innerHTML = days;

}, 1000)