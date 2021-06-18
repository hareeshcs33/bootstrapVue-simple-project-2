<template>
    <b-container>
        <b-row>
            <cart-item v-for="data in cartData" :cartData="data" :key="data.name" />
        </b-row>
    </b-container>
</template>
<script>
import CartItem from './cart-item.vue';

export default {
    data(){
        return {

        }
    },
    components: {
        CartItem,
    },
    computed: {
        cartData(){
            return this.$store.state.shoppingCartData;
        }
    }
}
</script>
