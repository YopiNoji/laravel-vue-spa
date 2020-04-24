<template>
    <div>
        <h1>Edit Item</h1>
        <form @submit.prevent="updatePost">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Item Title:</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="item.title"
                        />
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input
                            type="number"
                            class="form-control"
                            v-model="item.price"
                        />
                    </div>
                    <div class="form-group">
                        <label>Item Count:</label>
                        <input
                            type="number"
                            class="form-control"
                            v-model="item.count"
                        />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Item Comment:</label>
                        <textarea
                            class="form-control"
                            v-model="item.comment"
                            rows="5"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: {},
        };
    },
    created() {
        const uri = `/api/item/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.item = response.data;
        });
    },
    methods: {
        updatePost() {
            const uri = `/api/item/update/${this.$route.params.id}`;
            this.axios.post(uri, this.item).then((response) => {
                this.$router.push({ name: "items" });
            });
        },
    },
};
</script>
