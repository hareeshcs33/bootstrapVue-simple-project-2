export const getCustomersData = state => {
  return state.customers;
};

export const getCartItem = state => {
  let id = state.idVal;
  return state.shoppingCartData.find(item => item.id === id);
};

export const getAddedCartItem = state => {
  return state.shoppingCartData.filter(item => item.cartItem === true);
};

export const getTodoCartItem = state => {
  return state.todos.filter(item => item.isCart === true);
};

export const getTodoCartTotalPrice = state => {
  return state.todos
    .filter(item => item.isCart)
    .reduce((total, cartItem) => {
      return (total += cartItem.price * cartItem.quantity);
    }, 0);
};

export const getTodoCartSelectedItemsTotalPrice = state => {
    return state.todos.filter(item => item.isCheck === true)
    .reduce((total, itemPrice) => {
        return (total += itemPrice.price * itemPrice.quantity);
    },0);
}
export const getCurrentCustomer = state => {
    return state.currentCustomer;
}