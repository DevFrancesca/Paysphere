import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items: 0
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state) =>{
         state.items += 1
        }
    }
})

export const{addToCart} = CartSlice.actions
export default CartSlice.reducer