export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const customerData = (state, customerData) => {
    state.customers.push(customerData);
}