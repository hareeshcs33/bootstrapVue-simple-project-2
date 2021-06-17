<template>
  <b-container class="home">
    <h1>Home</h1>
    <!-- <b-button varient="primary">button</b-button> -->
    <!-- <h2>Username:{{username}}</h2> -->
    <!-- <pre>products: {{products}}</pre> -->
    <b-row>
        <b-card
          :products="products"
          v-for="product in products"
          :key="product.id"
          title="products"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 col-3"
        >
          <b-card-text>
            {{product.name}}{{product.username}}
          </b-card-text>
          <b-card-text>Email: {{product.email}}</b-card-text>
          <b-card-text>company name: {{product.company.name}}</b-card-text>
          <div>
            <b-card-text class="mb-1">address:</b-card-text>
            <b-card-text class="mb-0">street: {{product.address.street}}</b-card-text>
            <b-card-text class="mb-0">suite: {{product.address.suite}}</b-card-text>
            <b-card-text class="mb-0">city: {{product.address.city}}</b-card-text>
            <b-card-text>zipcode: {{product.address.zipcode}}</b-card-text>
          </div>
          <b-button href="#" variant="primary">More Details</b-button>
        </b-card>
    </b-row>
    <!-- <b-button variant="primary">Primary</b-button> -->
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted(){
    this.$store.dispatch('getProducts');
  },
  computed: {
    username(){
      return this.$store.state.username;
    },
    products(){
      return this.$store.state.products;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
