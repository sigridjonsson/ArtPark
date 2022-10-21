import m from "mithril";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

import locationIcon from "../../location.png";

import artPark from "../models/artPark.js";
import position from "../models/position.js";

let map;

var locationMarker = L.icon({
    iconUrl: locationIcon,
    iconSize:     [24, 24],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
});


function showMap() {
    map = L.map("map").setView([41.871715999999999, -87.661359000000004], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);
}


function renderMarker() {
    for (var i = 0; i < artPark.mapCords.length; i++) {
        L.marker([parseFloat(artPark.mapCords[i].lat),
            parseFloat(artPark.mapCords[i].long)]).addTo(map)
            .bindPopup(artPark.mapCords[i].name);
    }
}


function showPosition() {
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        L.marker(
            [position.currentPosition.latitude, position.currentPosition.longitude],
            {icon: locationMarker}
        ).addTo(map).bindPopup("You are here").openPopup();
    }
}


let bigMap = {
    oninit: function() {
        artPark.getAllLocations();
        position.getPosition();
    },
    view: function() {
        if (artPark.mapCords) {
            renderMarker();
        }
        showPosition();
        return m("main.container", [
            m("div.message city", [
                m("p", "Here you can see all of the various artworks in the parks throughout" +
                " the city."),
                m("p", "How many do you have time to explore in a day?"),
            ]),
            m("div#map.map", "")
        ]);
    },
    oncreate: function() {
        showMap();
    },
    onremove: function () {
        position.currentPosition = {};
    }
};

export default bigMap;
