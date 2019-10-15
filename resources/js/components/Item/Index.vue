<template>
    <div>
        <h1>Items</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Item</router-link>
            </div>
        </div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Count</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.count }}</td>
                    <td><router-link :to="{name: 'edit', params: { id: item.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click.prevent="deleteItem(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                user: [],
            }
        },
        created() {
            this.user =  this.$store.state.auth.user
            const uri = `/api/item/get/${this.user.id}`;
            this.axios.get(uri).then(response => {
                this.items = response.data.data;
            });
        },
        methods: {
            deleteItem(id)
            {
                const uri = `/api/item/delete/${id}`;
                this.axios.delete(uri).then(response => {
                    this.items.splice(this.items.indexOf(id), 1);
                });
            }
        }
    }
</script>