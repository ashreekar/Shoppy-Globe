import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice.js"
import cartReducer from "./cartSlice.js"

const shopStore=configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    }
})

export default shopStore;