import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js"
import cartReducer from "./cartSlice.js"

// store for storing all slices

 const loadState = () => {
    // loading the loadstore on start state
    const storedState = localStorage.getItem('reduxState');
    if (storedState === null) return undefined; 
    return JSON.parse(storedState);
};

// save store to save after every update(action dispatch)
 const saveState = (state) => {
    const storedState = JSON.stringify(state);
    localStorage.setItem('reduxState', storedState);
};

const persistedState=loadState();

const shopStore=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    },
    preloadedState:persistedState,
})

shopStore.subscribe(() => {
  saveState(shopStore.getState()); 
})

export default shopStore;