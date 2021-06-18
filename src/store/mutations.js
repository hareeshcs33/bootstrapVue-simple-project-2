export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const customerData = (state, customerData) => {
    state.customers.push(customerData);
}

export const idVal = (state, id) => {
    state.idVal = id;
}

export const CART_ITEM = (state, id) => {
    return state.shoppingCartData.filter(item => {
        if(item.id === id){
            item.cartItem = true;
        }
    });
}

export const REMOVE_CART_ITEM = (state, id) => {
    return state.shoppingCartData.filter(item => {
        if(item.id === id){
            item.cartItem = false;
        }
    })
}