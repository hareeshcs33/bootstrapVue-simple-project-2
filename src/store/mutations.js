export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const customerData = (state, customerData) => {
  state.customers.push(customerData);
};

export const idVal = (state, id) => {
  state.idVal = id;
};

export const CART_ITEM = (state, id) => {
  return state.shoppingCartData.filter(item => {
    if (item.id === id) {
      item.cartItem = true;
    }
  });
};

export const REMOVE_CART_ITEM = (state, id) => {
  return state.shoppingCartData.filter(item => {
    if (item.id === id) {
      item.cartItem = false;
    }
  });
};

export const SET_TODOS = (state, todos) => {
  state.todos = todos;
};

export const ADD_TO_CART = (state, id) => {
  state.todos.find(item => {
    if (item.isCart === true && item.id === id) {
      item.quantity += 1;
      return;
    }
    if (item.id === id) {
      item.isCart = true;
    }
  });
};

export const REMOVE_FROM_CART = (state, id) => {
  state.todos.find(item => {
    if (item.id === id) {
      item.isCart = false;
      item.quantity = 1;
    }
  });
};
