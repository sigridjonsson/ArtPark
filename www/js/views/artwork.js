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
    map = L.map("map").setView([41.906255000000002, -87.699420000000003], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);
}


function renderMarker() {
    L.marker([artPark.currLa, artPark.currLo]).addTo(map)
        .bindPopup(artPark.currArt)
        .openPopup();
}


function showPosition() {
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        L.marker(
            [position.currentPosition.latitude, position.currentPosition.longitude],
            {icon: locationMarker}
        ).addTo(map).bindPopup("You are here").openPopup();
    }
}


let artwork = {
    oninit: function(vnode) {
        artPark.getOneArtwork(vnode.attrs.art);
        position.getPosition();
    },
    view: function() {
        if (artPark.currLa && artPark.currLo) {
            renderMarker();
        }
        showPosition();
        return m("div.slide-up", [
            m("img.logoTwo", {src: "./img/icon.jpeg"}),
            m("p", "Artwork: " + artPark.currArt),
            m("p.park", "Park: " + artPark.currPark),
            m("p", "Artist: " + artPark.currArtist),
            m("p", "Owner: " + artPark.currOwner),
            m("div#map.map", ""),
        ]);
    },
    oncreate: showMap,
    onremove: function () {
        position.currentPosition = {};
    }
};

export default artwork;
