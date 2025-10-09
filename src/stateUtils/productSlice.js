import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"Product",
    initialState:{
        products:[],
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products=[]; // making sure state is empty
            // console.log(action.payload)
            action.payload.forEach(ele => {
                state.products.push({...ele,cartQuantity:0});
                // already intialising cart quantity helps to render 0 
                // cart values while fetching from product store
            });
        }
    }
})

export const {addProduct}=productSlice.actions;

export default productSlice.reducer;