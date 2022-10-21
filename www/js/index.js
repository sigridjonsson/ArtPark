import m from "mithril";

import { layout } from "./views/layout.js";
import { layoutSpec } from "./views/layoutSpec.js";

import welcome from "./views/welcome.js";
import artworks from "./views/artworks.js";
import artwork from "./views/artwork.js";
import map from "./views/map.js";
import weather from "./views/weather.js";
import register from "./views/register.js";
import login from "./views/login.js";

import auth from "./models/auth.js";

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout, {
                        bottomNav: "#!/"
                    }, m(welcome));
                }
            },
            "/artworks": {
                render: function() {
                    return m(layout, {
                        bottomNav: "#!/artworks"
                    }, m(artworks));
                }
            },
            "/artworks/:art": {
                render: function(vnode) {
                    return m(layoutSpec, m(artwork, vnode.attrs));
                }
            },
            "/map": {
                render: function() {
                    return m(layout, {
                        bottomNav: "#!/map"
                    }, m(map));
                }
            },
            "/weather": {
                onmatch: function() {
                    if (auth.token) {
                        return weather;
                    }

                    return m.route.set("/login");
                },
                render: function(vnode) {
                    return m(layout, {
                        bottomNav: "#!/weather"
                    }, vnode);
                }
            },
            "/login": {
                render: function() {
                    return m(layout, {
                        bottomNav: "#!/login"
                    }, m(login));
                }
            },
            "/register": {
                render: function() {
                    return m(layout, {
                        bottomNav: "#!/register"
                    }, m(register));
                }
            },
        });
    }
};

app.initialize();
