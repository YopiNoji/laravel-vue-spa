import Vue from "vue";
import Vuex from "vuex";

import Auth from "./Auth";
import Item from "./Item";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Auth,
        Item,
    },
});

export default store;
