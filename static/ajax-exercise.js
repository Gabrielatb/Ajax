"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {
    let fortune = results;
    // TODO: get the fortune and show it in the #fortune-text div
    $("#fortune-text").html(fortune);
    console.log("In showFortune");
}

function getFortune() {
    $.get("/fortune", showFortune);
    console.log("In getFortune");
}

$('#get-fortune-button').on('click', getFortune);




// PART 2: SHOW WEATHER

function showWeather(results) {

    $('#weather-info').html(results['forecast']);
    console.log("In showWeather");

    // TODO: request weather with that URL and show the forecast in #weather-info
}

function getWeather(evt) {
    evt.preventDefault();
    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, showWeather);
    console.log("In getWeather");
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS
function showMelons(results) {
    $("#order-status").html(results);

}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form

    let url = "/order-melons.json";
    let formData = $("#order-form").serialize();

    $.post(url, formData, showMelons);

    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


