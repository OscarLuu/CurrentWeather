$( document ).ready( function () {
  navigator.geolocation.getCurrentPosition(function (pos) {
    var lat = (pos.coords.latitude);
    var long = (pos.coords.longitude);
    getWeather(lat,long);
  });
});

function getWeather (lat, long) {
  var url = "https://api.darksky.net/forecast/f019f79fac44d14fec4f52201ab5abb6/"+lat+","+long;
  console.log(url);
  $.ajax({
    type: 'GET',
    url: url,
    dataType: "jsonp",
    success: function (data) {
      $('#currentTemp').text(Math.round(data.currently.temperature));
      $("#currentSummary").text(data.currently.summary + " ");

      switch (data.currently.icon) {
        case "clear-day":
          $("#weatherIcon").attr("class","wi wi-day-sunny wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#FFFFAA");
          $("body").css("color", "#FFFFAA");
          break;
          
        case "rain":
         $("#weatherIcon").attr("class","wi wi-day-rain wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#3923D6");
          $("body").css("color", "#3923D6");
          break;
        
        case "clear-night":
         $("#weatherIcon").attr("class","wi wi-night-clear wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#800080");
          $("body").css("color", "#872187");
          break;
          
        case "snow":
         $("#weatherIcon").attr("class","wi wi-day-snow wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#E1FFFE"	);
          $("body").css("color", "#E1FFFE");
          break;
          
        case "sleet":
         $("#weatherIcon").attr("class","wi wi-day-sleet wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#A6CAA9"	);
          $("body").css("color", "#A6CAA9"	);
          break;  
          
        case "wind":
         $("#weatherIcon").attr("class","wi wi-day-windy wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color","#E9F1EA" );
          $("body").css("color", "#E9F1EA");
          break; 
          
        case "fog":
         $("#weatherIcon").attr("class","wi wi-day-fog wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#D9F3FF"	);
          $("body").css("color", "#D9F3FF");
          break;
          
        case "cloudy":
         $("#weatherIcon").attr("class","wi wi-day-cloudy wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#EFCDF8"	);
          $("body").css("color", "#EFCDF8");
          break;  
          
        case "partly-cloudy-day":
         $("#weatherIcon").attr("class","wi wi-day-cloudy wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#67C7E2");
          $("body").css("color", "#67C7E2");
          break;  
          
        case "partly-cloudy-night":
         $("#weatherIcon").attr("class","wi wi-night-partly-cloudy wi-fw");
          console.log(data.currently.icon);
          $("body").css("background-color", "#74138C");
          $("body").css("color", "#74138C");
          break;  
          
        default:
          console.log("Default")
      }
      
      $("#tempChange").click(function (){
      var temp = data.currently.temperature;
      var tempC = Math.round(((temp - 32) * .5556));
      var tempF = Math.round(tempC * 1.8 + 32);
      if ($(this).text() == "° F") {
        $(this).text("° C");
        $("#currentTemp").text(tempC);
      } else {
        $(this).text("° F");
        $("#currentTemp").text(tempF);
      }
    });
      if ((data.currently.temperature) > 68) {
        $("#clothing").text(data.daily.summary);
      } else {
        $("#clothing").text(data.daily.summary);
      }       
    }
  })
};