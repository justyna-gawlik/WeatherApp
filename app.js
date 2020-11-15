const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
const _ = require('lodash');

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const query = req.body.city;
    const api = "5748a753b3260d6807e9e2dbdcb52855";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&APPID=" + api + "&units=metric";

    https.get(url, function (response) {
        if (response.statusCode === 200) {

            response.on("data", function (data) {
                const weatherData = JSON.parse(data);
                const temp = Math.floor(weatherData.main.temp);
                const description = weatherData.weather[0].description;
                const icon = weatherData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

                if(icon==="01d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn' style=background-color:#f09c67;'><div class='container-fluid'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    // res.write("<img  src='animated/day.svg'></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-day-sunny.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="02d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#b8b0b0;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-day-cloudy.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }
                  else if(icon==="03d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#75b79e;'><div class='container-fluid 0'>");
                    
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-cloud.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="04d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#bad7df;'><div class='container-fluid 0'>");
                   
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-cloudy.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="09d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#c3bef0;'><div class='container-fluid 0'>");
                   
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-rain-mix.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="10d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#a3d8f4;'><div class='container-fluid 0'>");
                    
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-day-rain-mix.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }
                  else if(icon==="11d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#ffcfdf;'><div class='container-fluid 0'>");
                    
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-day-thunderstorm.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }
                  else if(icon==="13d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#7f78d2;'><div class='container-fluid 0'>");
               
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-day-snow.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }
                  else if(icon==="50d"){
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#8566aa;'><div class='container-fluid 0'>");
                    
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-day-fog.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="50n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                 
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-night-fog.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="13n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-night-snow.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="11n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-night-thunderstorm.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="10n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-night-showers.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="09n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-rain-mix.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="04n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-cloudy.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="03n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-cloud.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="02n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-night-cloudy.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else if(icon==="01n") {
                    res.write("<html> <meta charset=utf-8 /><meta name='viewport 'content='width=device-width, initial-scale=1'/><link rel='stylesheet' type='text/css' href='css/styleCity.css'/><link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap' rel='stylesheet'><body class='fadeIn'  style=background-color:#16213e;'><div class='container-fluid 0'>");
                    res.write("<h2>"+_.upperFirst(query)+"</h2>");
                    res.write("<p>"+description+"</p>");
                    res.write("<div class='image'>");
                    // res.write("<img style=width:20vh; style=height:20vh; src=" + imageURL + "></img>");
                    res.write("<img style=width:20vh; style=height:20vh; src='svg/wi-night-clear.svg'></img>");
                    res.write("</div>");
                    res.write("<h1>"+temp+ "</h1>");
                    res.write("<button onclick='javascript:window.history.back()' class='btn btn-lg'> Change City</button>");
                    res.write("</div>");
                    res.write("<footer class='page-footer font-small indigo'>Copyright &copy; 2020</footer>");
                    res.write("</body></html>");
                    res.end();
                  }else{
                    console.log("err");
                  }
            });
            

        } else {
            res.sendFile(__dirname + "/error.html");
        }
    });
            
});

app.post("/error", function (req, res) {
    res.redirect("/");
});


app.listen(process.env.PORT, function () {
    console.log("Server is running");
})

// app.listen(3000, function () {
//   console.log("Server is running");
// })




