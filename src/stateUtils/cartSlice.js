import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cart: [],
        quantity: 0,
        cost: 0
    },
    reducers: {
        addFirst: (state, actions) => {
            state.quantity += 1;
            state.cost += actions.payload.price;
            state.cart.push({ ...actions.payload, cartQuantity: 1 });
        },
        emptyCart: (state, _) => {
            // for all products
            state.cart = [];
            state.quantity = 0;
            state.cost = 0;
        },
        removeCompletly: (state, actions) => {
            // for a particular product
            // findi it first
            // can happen 2 type one is when there is 1 item 
            // 2nd is when removed from cart page
            const product = state.cart.find((item) => {
                return item.id === actions.payload.id;
            })

            state.quantity -= product.cartQuantity;
            state.cost -= product.price * product.cartQuantity;

            state.cart = state.cart.filter((item) => {
                return item.id !== product.id;
            })

            if (state.cart.length === 0) {
                state.cost = 0;
            }
        },
        removeByOne: (state, actions) => {
            const product = state.cart.find((item) => {
                return item.id === actions.payload.id;
            })

            product.cartQuantity -= 1;
            state.quantity -= 1;
            state.cost -= product.price;
        },
        addByOne: (state, actions) => {
            const product = state.cart.find((item) => {
                return item.id === actions.payload.id;
            })

            product.cartQuantity += 1;
            state.quantity += 1;
            state.cost += product.price;
        }
    }
})

// Remeber: action.payolad is mostly an object of product(induvidual)
//          coming from productSlice so it's cart value is always 0.

export const {
    addFirst,
    emptyCart,
    removeByOne,
    removeCompletly,
    addByOne
} = cartSlice.actions;

export default cartSlice.reducer;