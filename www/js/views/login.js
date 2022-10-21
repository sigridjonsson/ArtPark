import m from "mithril";

import auth from "../models/auth";

let login = {
    view: function() {
        return m("main.container", [
            m("div.message", [
                m("p.bold", "Welcome back"),
                m("p", "Fill in your email and password to continue")
            ]),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    auth.login();
                }
            },
            [
                m("input[type=email][placeholder=E-MAIL].input.mail", {
                    oninput: function(event) {
                        auth.email = event.target.value;
                    },
                    value: auth.email
                }),
            ],
            [
                m("input[type=password][placeholder=PASSWORD].input.password", {
                    oninput: function(event) {
                        auth.password = event.target.value;
                    },
                    value: auth.password
                }),
            ],
            m("a", {href: "#!/register", class: "regLink"}, "I don't have an account"),
            [
                m("input[type=submit][value=Continue].login", "Continue")
            ])
        ]);
    }
};

export default login;
