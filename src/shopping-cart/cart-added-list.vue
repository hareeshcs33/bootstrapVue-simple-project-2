<template>
    <b-container>
        <h3>Cart added list</h3>
        <b-row v-if="getAddedCartItem.length > 0">
            <cart-item v-for="data in getAddedCartItem" :cartData="data" :key="data.name" />
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
        getAddedCartItem(){
            return this.$store.getters.getAddedCartItem;
        }
    }
}
</script>
