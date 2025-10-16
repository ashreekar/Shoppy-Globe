import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js"
import cartReducer from "./cartSlice.js"

// store for storing all slices

 const loadState = () => {
    // loading the loadstore on start state
    const storedState = localStorage.getItem('reduxStatestore');
    if (storedState === null) return undefined; 
    return JSON.parse(storedState);
};

// save store to save after every update(action dispatch)
 const saveState = (state) => {
    const storedState = JSON.stringify(state);
    localStorage.setItem('reduxStatestore', storedState);
};

const persistedState=loadState();
// have 2 reducers cart,product
const shopStore=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    },
    preloadedState:persistedState,
})

// runs to fill initial state on refresh
shopStore.subscribe(() => {
  saveState(shopStore.getState()); 
})

export default shopStore;