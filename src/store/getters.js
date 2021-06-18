
export const getCustomersData = (state) => {
    return state.customers;
}

export const getCartItem = (state) => {
    let id = state.idVal;
    return state.shoppingCartData.find(item => item.id === id);
}

export const getAddedCartItem = (state) => {
    return state.shoppingCartData.filter(item => item.cartItem === true);
}