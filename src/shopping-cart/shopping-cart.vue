<template>
    <div>
        <h3>shopping cart</h3>
        <cart-list />
        <router-view />
    </div>
</template>
<script>
import CartList from './cart-list.vue';

export default {
    data(){
        return {

        }
    },
    components: {
        CartList,
    }
}
</script>