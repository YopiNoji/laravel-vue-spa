<template>
    <nav class="navbar spa_head">
        <div class="navbar__menu">
            <div class="navbar-logo">
                <router-link to="/">
                    <p>Home</p>
                </router-link>
                <router-link to="/items">
                    <p>Items</p>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout() {
            var app = this;
            this.$auth.logout();
        },
    },
};
</script>
