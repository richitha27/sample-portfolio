var button = document.querySelector('.button')
var placevalue = document.querySelector('.placevalue')

var name = document.querySelector('.place');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humidity');


button.addEventListener('click', function(placename) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+placevalue.value+'&appid=afa43f24242d8b9eb3d96d4616ec9ec8')
    .then(response => response.json())
    .then(data => {
        var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var tempvaluec = (tempvalue - 32) * (5/9);
        var descvalue = data['weather'][0]['description'];
       // var humivalue = data['main'][''];
        //T(°C) = (T(°F) - 32) × 5/9  Math.round(num * 100) / 100

        //place.innerHTML = namevalue;
        desc.innerHTML = `Description: ${descvalue}`;           
        temp.innerHTML = `Temperature: ${Math.round(tempvaluec * 100)/100} celsius`;
      //  humidity.innerHTML = `Humidity: ${humivalue}`;
    })
    

    .catch(err => alert("entered wrong city name please type again"))
})



