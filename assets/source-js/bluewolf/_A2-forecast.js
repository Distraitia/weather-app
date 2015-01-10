$(document).on("ready",function() {
    console.log("Document is ready");

    // var placeName = "Atlanta, GA",
    //     lt = 33.886586,
    //     ln = -84.461214;

    // var iFrame = $("<iframe id='forecast_embed' type='text/html' frameborder='0' height='245' width='100%' src='http://forecast.io/embed/#lat=" + lt + "&lon=" + ln + "&name=" + placeName + "'></iframe>");

    // $(document.body).append(iFrame);

    function atlanta() {
        var placeName = "Atlanta, GA",
        lt = 33.886586,
        ln = -84.461214;

        var iFrame = $("<iframe id='forecast_embed' type='text/html' frameborder='0' height='245' width='100%' src='http://forecast.io/embed/#lat=" + lt + "&lon=" + ln + "&name=" + placeName + "'></iframe>");

        $(document.body).append(iFrame);

        var apiKey = 'edc37d1226a5c86f5dcf083fb7b83533';
        var url = 'https://api.forecast.io/forecast/';
        var lati = 33.886586;
        var longi = -84.461214;
        var data;

        var introP = $(".weather-intro"),
            forecastP = $("#weather");

        $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
            console.log(data);
            $('#weather').html('Current temperature: ' + data.currently.temperature + "&deg;F");
        });
    }

    function deerpark() {
        lt = 42.165439,
        ln = -88.098605;

        var iFrame = $("<iframe id='forecast_embed' type='text/html' frameborder='0' height='245' width='100%' src='http://forecast.io/embed/#lat=" + lt + "&lon=" + ln + "&name=" + placeName + "'></iframe>");

        $(document.body).append(iFrame);

        var apiKey = 'edc37d1226a5c86f5dcf083fb7b83533';
        var url = 'https://api.forecast.io/forecast/';
        var lati = 42.165439;
        var longi = -88.098605;
        var data;

        var introP = $(".weather-intro"),
            forecastP = $("#weather");

        $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
            console.log(data);
            $('#weather').html('Current temperature: ' + data.currently.temperature + "&deg;F");
        });
    }
});
    



// Forecast.io stuff
function forecast(e) {
    console.log("forecast();")
    e.preventDefault();

    var apiKey = 'edc37d1226a5c86f5dcf083fb7b83533';
    var url = 'https://api.forecast.io/forecast/';
    var lati = 33.886586;
    var longi = -84.461214;
    var data;

    $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function(data) {
        //console.log(data);
        paragraph.html('and the temperature is: ' + data.currently.temperature);
    });
}