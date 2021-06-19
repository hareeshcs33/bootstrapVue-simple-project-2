<template>
  <div class="container">
    <h3>todo cart</h3>
    <table class="table">
      <thead>
        <tr>
          <th>name</th>
          <th>city</th>
          <th>Price</th>
          <th>QTY</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in getTodoCartItems" :key="todo.id">
          <td>{{ todo.name }}</td>
          <td>{{ todo.city }}</td>
          <td>${{ todo.price }}</td>
          <td>{{ todo.quantity }}</td>
          <td>
            <b-button @click="removeFromCart(todo.id)">
              Remove From Cart
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>Total Price: ${{ getTodoCartTotalPrice }}</div>
    <router-link to="/todo">Back To Todo</router-link>
  </div>
</template>
<script>
import TodoCard from './todo-card.vue'

export default {
  data() {
    return {}
  },
  mounted() {
    return this.$store.dispatch('todoList')
  },
  computed: {
    getTodos() {
      return this.$store.state.todos
    },
    getTodoCartItems() {
      return this.$store.getters.getTodoCartItem
    },
    getTodoCartTotalPrice() {
      return this.$store.getters.getTodoCartTotalPrice
    },
  },
  methods: {
    removeFromCart(id) {
      this.$store.commit('REMOVE_FROM_CART', id)
    },
  },
  components: {
    TodoCard,
  },
}
</script>
