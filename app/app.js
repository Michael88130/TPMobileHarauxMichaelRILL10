import Vue from "nativescript-vue";
import details from "./components/details";
import Home from "./components/Home";

new Vue({

    template: `
        <Frame>
            <Home />
            <Home /details>
        </Frame>`,

    components: {
        Home,
        details
    }
}).$start();
