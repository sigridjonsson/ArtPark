import m from "mithril";

import {apiKey} from "../vars.js";

let makeAcc = {
    userMail: "",
    userPass: "",

    saveUser: function() {
        m.request({
            url: "https://auth.emilfolino.se/register",
            method: "POST",
            body: {
                email: makeAcc.userMail,
                password: makeAcc.userPass,
                api_key: apiKey
            }
        }).then(function() {
            makeAcc.userMail = "";
            makeAcc.userPass = "";

            return m.route.set("/login");
        });
    }
};

export default makeAcc;
