import m from "mithril";

let welcome = {
    view: function() {
        return m("main.container", [
            m("div.message", [
                m("h3", "Welcome to ArtPark!"),
                m("p", "This is your chance to explore Chicagos parks and learn more" +
                " about the history of the town.")
            ]),
            m("img.welcomePic", {src: "./img/icon.jpeg"})
        ]);
    }
};

export default welcome;
