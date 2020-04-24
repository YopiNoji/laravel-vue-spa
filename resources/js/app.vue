<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/Layout/Header";

export default {
    components: {
        Header,
    },

    data: () => ({}),
    created() {
        this.$store.dispatch("Auth/setUserInfo");
    },

    methods: {},
};
</script>
