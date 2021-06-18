<template>
    <div>
        <b-card>
            <div>{{cartId}}</div>
            <pre>{{getCartItem}}</pre>
            <router-link :to="'/shopping-cart'">back to shopping cart</router-link>
        </b-card>
    </div>
</template>
<script>

export default {
    data(){
        return {

        }
    },
    computed: {
        cartId(){
            return this.$route.params.id;
        },
        getCartItem(){
            return this.$store.getters.getCartItem;
        }
    }
}
</script>
