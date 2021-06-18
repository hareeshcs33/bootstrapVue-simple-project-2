<template>
    <b-card class="col-3">
        <b-card-body>
            <b-card-text>Name: {{cartData.name}}</b-card-text>
            <b-card-text>Place: {{cartData.place}}</b-card-text>
            <router-link :to="{ name: 'CartView', params: { id: cartData.id }}" @click.native="idVal(cartData.id)">View Item</router-link>
            <b-button v-if="!cartData.cartItem" variant="outline-primary" size="sm" @click="addToCart(cartData.id)">Add To Cart</b-button>
            <b-button v-if="cartData.cartItem" variant="outline-primary" size="sm" @click="removeFromCart(cartData.id)">Remove From Cart</b-button>
        </b-card-body>
    </b-card>
</template>
<script>
export default {
    props: ['cartData'],
    data(){
        return {
            
        }
    },
    methods: {
        idVal(id){
            this.$store.commit("idVal", id);
        },
        addToCart(id){
            this.$store.commit("CART_ITEM", id);
            this.$router.push('/cart-added-list');
        },
        removeFromCart(id){
            this.$store.commit("REMOVE_CART_ITEM", id);
            this.$router.push('/shopping-cart');
        }
    }
}
</script>