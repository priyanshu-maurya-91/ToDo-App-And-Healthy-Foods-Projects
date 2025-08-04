import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name :"Slice2",
    initialState:{
        count:0,
        items:[],
    },
    reducers:{
        Inceament:(state)=>{state.count = state.count+1},
        Decreament:(state)=>{state.count = state.count-1},
        addToCart:(state , action)=>{state.items.push(action.payload);},
        removeFromCart:(state ,action)=>{state.items = state.items.filter(item =>item.idMeal !== action.payload.idMeal);},
    }
});


export const {addToCart,removeFromCart,Inceament,Decreament ,DeleteFromCart} = CartSlice.actions;
export default CartSlice.reducer;