<template>
  <div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
      <div>Name: {{ item.name }}</div>
      <div>City: {{ item.city }}</div>
      <div>
        Price: $100<span v-if="item.isCart">, QTY: {{ item.quantity }}</span>
      </div>
      <div>{{ item.isCart }}</div>
    </div>
    <div class="card-footer">
      <b-button @click="todoAddToCart(item.id)">Todo Add To Cart</b-button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "index"],
  data() {
    return {};
  },
  methods: {
    todoAddToCart(id) {
      this.$store.commit("ADD_TO_CART", id);
      this.$router.push("/todo-cart");
    }
  }
};
</script>
