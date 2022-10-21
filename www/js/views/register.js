import m from "mithril";

import makeAcc from "../models/register";

let register = {
    view: function() {
        return m("main.container", [
            m("a", {href: "#!/login", class: "toLogin"},
                m("i", {class: "material-icons"}, "chevron_left")),
            m("div.message", [
                m("p.bold", "Welcome"),
                m("p", "Fill in your email and password to register")
            ]),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    makeAcc.saveUser();
                }
            },
            [
                m("input[type=email][placeholder=E-MAIL].input.mail", {
                    oninput: function(event) {
                        makeAcc.userMail = event.target.value;
                    }
                }),
            ],
            [
                m("input[type=password][placeholder=PASSWORD].input.password", {
                    oninput: function(event) {
                        makeAcc.userPass = event.target.value;
                    }
                }),
            ],
            [
                m("input[type=submit][value=Register].login", "Register")
            ])
        ]);
    }
};

export default register;
