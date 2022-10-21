import m from "mithril";

var d = new Date();

d.setDate(d.getDate() + 2);
var dd = d.getDate();
var mm = d.getMonth() + 1;
var y = d.getFullYear();

let weatherModel = {
    currentWeather: [],
    dates: ["", "Today", "Tomorrow", `${dd}/${mm}-${y}`],
    getWeather: function() {
        return m.request({
            method: "GET",
            url: `https://goweather.herokuapp.com/weather/%7Billinois%7D`
        }).then(function(result) {
            weatherModel.currentWeather = result.forecast;
        });
    }
};

export default weatherModel;
