<template>
  <div class="navbar">
    <ul class="w-100">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/shopping-cart">Shopping Cart</router-link></li>
      <li><router-link to="/customers-list">customers list</router-link></li>
      <li><router-link to="/todo">Todo</router-link></li>
      <li><router-link to="/user-signup">UserSignup</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">SignUp</router-link></li>
    </ul>
  </div>
</template>
<style scoped>
.navbar {
    margin: 10px 0;
}
.navbar ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style: none;
    border-bottom: 1px solid green;
    margin: 0;
    padding: 0;
}
.navbar ul li {
  margin-right: 1px;
  display: block;
}
.navbar ul li:hover a {
  border-bottom: 5px solid green;
}
.navbar ul li a {
    color: #454545;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding: 8px 12px;
    border-bottom: 5px solid transparent;
}
.navbar li a.router-link-active.router-link-exact-active {
  border-bottom: 5px solid green;
}
</style>