import m from "mithril";

let artPark = {
    url: `https://data.cityofchicago.org/resource/sj6t-9cju.json?`,
    deliveryInfo: [],
    artworks: [],
    currArt: "",
    currPark: "",
    currArtist: "",
    currOwner: "",
    currLa: "",
    currLo: "",
    mapCords: [],
    getArtworks: function() {
        return m.request({
            method: "GET",
            url: `${artPark.url}$limit=15`
        }).then(function(result) {
            artPark.artworks = result;
        });
    },
    getOneArtwork: function(xCord) {
        return m.request({
            method: "GET",
            url: `${artPark.url}x_coordinate=${xCord}`
        }).then(function(result) {
            result.map(function (res) {
                artPark.currArt = res.art;
                artPark.currPark = res.park_number + res.park_name;
                artPark.currArtist = res.artist;
                artPark.currOwner = res.owner;
                artPark.currLa = res.latitude;
                artPark.currLo = res.longitude;
            });
        });
    },
    getAllLocations: function() {
        return m.request({
            method: "GET",
            url: `${artPark.url}$limit=15`
        }).then(function(result) {
            artPark.locations(result);
        });
    },
    locations: function(info) {
        for (var i = 0; i < info.length; i++) {
            artPark.mapCords.push({ name: info[i].art, lat: info[i].latitude,
                long: info[i].longitude});
        }
    }
};

export default artPark;
