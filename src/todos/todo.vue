<template>
  <div class="container">
    <b-row>
      <todo-card
        v-for="(item, index) in getTodos"
        :item="item"
        :key="item.id"
        :index="index"
        class="col-12 col-sm-6 col-md-4 mb-3"
      ></todo-card>
    </b-row>
  </div>
</template>
<script>
import TodoCard from "./todo-card.vue";

export default {
  data() {
    return {};
  },
  mounted() {
    return this.$store.dispatch("todoList");
  },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    }
  },
  components: {
    TodoCard
  }
};
</script>
