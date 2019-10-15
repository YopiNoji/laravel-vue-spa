<template>
    <div>
        <h1>Add A Item</h1>
        <form @submit.prevent="addItem">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Item Title:</label>
                        <input type="text" class="form-control" v-model="item.title">
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="number" class="form-control" v-model="item.price">
                    </div>
                    <div class="form-group">
                        <label>Item Count:</label>
                        <input type="number" class="form-control" v-model="item.count">
                    </div>
                </div>
                {{$store.state.auth.user}}
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Item Comment:</label>
                        <textarea class="form-control" v-model="item.comment" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                item:{},
                user:{},
            }
        },
        created() {
            this.user =  this.$store.state.auth.user
        },
        methods: {
            addItem(){
                this.item.user_id =this.user.id
                console.log(this.item);
                const uri = '/api/item/create';
                this.axios.post(uri, this.item).then((response) => {
                    this.$router.push({name: 'items'});
                });
            }
        }
    }
</script>