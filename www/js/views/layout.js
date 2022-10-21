"use strict";

import m from "mithril";

var layout = {
    links: [
        { name: "HOME", route: "#!/", icon: "home" },
        { name: "ARTWORK", route: "#!/artworks", icon: "nature" },
        { name: "MAP", route: "#!/map", icon: "map"},
        { name: "WEATHER", route: "#!/weather", icon: "cloud" },
    ],
    view: function(vnode) {
        var bottomNav = vnode.attrs.bottomNav;

        return [
            m("div.header", [
                m("h3.headTitle", "ArtPark")
            ]),
            m("main.container", vnode.children),
            m("nav.bottom-nav", layout.links.map(function(link) {
                return m("a", {
                    href: link.route,
                    class: bottomNav === link.route ? "active" : null
                }, m("i", {class: "material-icons"}, link.icon), link.name);
            }))
        ];
    }
};

export { layout };
