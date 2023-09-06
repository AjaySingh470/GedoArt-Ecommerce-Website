import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cartSlice',
    initialState : {
        cart : []
    },
    reducers : {
        addItem : (state, action)=>{
            const e = action.payload.attributes;
            const newItem = e ? { 
                title : e.title,
                key : e.key,
                price : e.price,
                image : e.image.data.attributes.url    
            } : action.payload ;
            
            const idx = state.cart.findIndex((item) => item.key === newItem.key);
            if(idx === -1)
            {
                state.cart.push({...newItem,quantity : 1});
            }
            else {
                state.cart[idx].quantity += 1;
            }
        },
        removeItem : (state,action)=>{
            const currKey = action.payload?.attributes?.key || action.payload.key;
            
            const idx = state.cart.findIndex((item) => item.key === currKey);
            if(idx === -1) return;
            if(state.cart[idx].quantity === 1)
            {
                state.cart = state.cart.filter((item) => item.key !== currKey);
            }
            else{
                state.cart[idx].quantity -= 1;
            }
        },
        deleteItem : (state,action)=>{
            const currKey = action.payload?.attributes?.key || action.payload.key;
            const idx = state.cart.findIndex((item) => item.key === currKey);
            if(idx === -1) return;
            state.cart = state.cart.filter((item) => item.key !== currKey);
        },
        resetCart : (state,action)=>{
            state.cart = []
        }
    }
})

export default cartSlice.reducer ;

export const {addItem , removeItem , deleteItem , resetCart} = cartSlice.actions;