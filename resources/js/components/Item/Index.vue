<template>
    <div>
        <h1>Items</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary"
                    >Create Item</router-link
                >
            </div>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Comment</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ item.comment }}</td>
                    <td>
                        <router-link
                            :to="{ name: 'edit', params: { id: item.id } }"
                            class="btn btn-primary"
                            >Edit</router-link
                        >
                    </td>
                    <td>
                        <button
                            class="btn btn-danger"
                            @click.prevent="deleteItem(item.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: [],
        };
    },
    created() {
        this.user = this.$store.state.Auth.user;
        this.$store.dispatch("Item/getItems", this.user.id);
    },
    computed: {
        items() {
            return this.$store.state.Item.items;
        },
    },
    methods: {
        deleteItem(id) {
            this.$store.dispatch("Item/delete", id);
        },
    },
};
</script>
