import m from "mithril";

import { apiKey } from "../vars.js";

let auth = {
    email: "",
    password: "",
    token: "",

    login: function() {
        m.request({
            url: "https://auth.emilfolino.se/login",
            method: "POST",
            body: {
                email: auth.email,
                password: auth.password,
                api_key: apiKey
            }
        }).then(function(result) {
            auth.email = "";
            auth.password = "";

            auth.token = result.data.token;
            return m.route.set("/weather");
        });
    }
};

export default auth;
