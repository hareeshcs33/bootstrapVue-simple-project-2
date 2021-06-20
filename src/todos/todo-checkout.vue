<template>
    <b-container>
        <h4>Todo checkout Items</h4>
        <ol>
            <li v-for="item in getTodoCartItems" :key="item.id">
                <div class="card">
                    <div class="card-body">
                        <b-form-checkbox
                            v-model="item.isCheck"
                            >
                            {{item.isCheck}}
                            </b-form-checkbox>
                        <span>{{item.name}}</span> |
                        <span>Qty: 
                            <b-form-select v-model="item.quantity" :options="options"></b-form-select>
                        </span> |
                        <span>Each Todo price: ${{item.price}}</span> |
                        <span>Total: ${{item.price * item.quantity}}</span>
                    </div>
                </div>
            </li>
        </ol>
        <div class="">
            <div>Todo Cart Total Price: ${{getTodoCartTotalPrice}}</div>
            <div>Todo Cart Selected Items Total Price: ${{getTodoCartSelectedItemsTotalPrice}} 
                <b-button @click="goToPayment" variant="success">Go To Payment</b-button>
            </div>
        </div>
        <router-link to="/todo-cart">add more to cart</router-link>
    </b-container>
</template>
<script>
export default {
    data(){
        return {
            options: [1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods: {
        goToPayment(){
            console.log('goToPayment method alled');
        }
    },
    computed: {
        getTodoCartTotalPrice(){
            return this.$store.getters.getTodoCartTotalPrice;
        },
        getTodoCartItems() {
            return this.$store.getters.getTodoCartItem
        },
        getTodoCartSelectedItemsTotalPrice() {
            return this.$store.getters.getTodoCartSelectedItemsTotalPrice
        },
    }
}
</script>
