import api from '../api/index';

const state = {
    items: [],
};

const getters = {};

const mutations = {
    setItems(state, items) {
        state.items = items;
    },
    deleteItem(state, id) {
        state.items = state.items.splice(state.items.indexOf(id), 1);;
    },
};

const actions = {

    async create(context, data) {
        try {
            await api.Item.create(data);
            context.dispatch("getItems", data.user_id);
        } catch (e) {
            console.log(e);
        }
    },

    async getItems(context, user_id) {
        try {
            const res = await api.Item.gets(user_id);
            if (res.data.data) {
                context.commit("setItems", res.data.data);
            }
        } catch (e) {
            console.log(e);
        }
    },

    // async update(context, {id, data}) {
    //     try {
    //         await api.Item.update(id, data);
    //         context.dispatch("getItems", data.user_id);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // },

    async delete(context, id) {
        try {
            await api.Item.delete(id);
            context.commit("deleteItem", id);
            context.dispatch("getItems", this.state.Auth.id);
        } catch (e) {
            console.log(e);
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
