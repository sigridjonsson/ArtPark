import m from "mithril";

import artPark from "../models/artPark.js";

let artworks = {
    oninit: artPark.getArtworks,
    view: function() {
        return m("main.container", [
            m("div.artworks", artPark.artworks.map(function (artwork) {
                return m("div.artworksInfo", [
                    m("div.color"),
                    m("img.logo", {src: "./img/icon.jpeg"}),
                    m("p", artwork.art),
                    m("p.park", artwork.park_name),
                    m("a", {href: `#!/artworks/${artwork.x_coordinate}`}, "Read more"),
                ]);
            }))
        ]);
    }
};

export default artworks;
