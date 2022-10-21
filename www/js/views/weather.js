import m from "mithril";

import weatherModel from "../models/weatherModel.js";

let weather = {
    oninit: weatherModel.getWeather,
    view: function() {
        return m("main.container", [
            m("div.weather", weatherModel.currentWeather.map(function (weather) {
                return m("div.weatherInfo", [
                    m("p", "Temperature: " + weather.temperature),
                    m("p.wind", "Wind: " + weather.wind),
                    m("p.date", weatherModel.dates[weather.day])
                ]);
            }))
        ]);
    }
};

export default weather;
