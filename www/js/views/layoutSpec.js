"use strict";

import m from "mithril";

var layoutSpec = {
    view: function(vnode) {
        return [
            m("div.colorInd"),
            m("main.container", vnode.children),
            m("nav.specialNav", [
                m("a.back", {
                    href: "#!/artworks"
                },
                m("i", {class: "material-icons"}, "add_circle_outline"))
            ])
        ];
    }
};

export { layoutSpec };
