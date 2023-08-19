import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        cartQuantity:0,
        cartTotal:0
    },
    reducers:{
        addProduct:(state,action)=>{ 
            let flag=0;
            for(let i=0;i<state.products.length;i++){
                if(state.products[i]._id===action.payload._id && 
                    state.products[i].selectedColor===action.payload.selectedColor &&
                    state.products[i].selectedSize===action.payload.selectedSize
                    ){
                    state.products[i].quantity+=action.payload.quantity;
                    flag=1;
                    break;
                }
            }
            if(flag===0){
                state.products.push(action.payload);
                state.cartQuantity=state.products.length;
            }

            state.cartTotal = state.products.reduce((accumulator,item)=>(accumulator + item.sellingPrice*item.quantity),0)
            // state.cartTotal+=(action.payload.price*action.payload.quantity);
        },
        removeProduct:(state,action)=>{
            
            const newProducts= state.products.filter(item => ((item._id !== action.payload.productID) || (item.selectedSize!==action.payload.size || item.selectedColor!==action.payload.color)));
            state.products=newProducts;
            state.cartQuantity=state.products.length;
            state.cartTotal = state.products.reduce((accumulator,item)=>(accumulator + item.sellingPrice*item.quantity),0)
        },
        handleQuantity:(state,action)=>{

            if(action.payload.type==="increase"){

                for(let i=0;i<state.products.length;i++){
                   
                    if(state.products[i]._id===action.payload._id && 
                        state.products[i].selectedColor===action.payload.selectedColor &&
                        state.products[i].selectedSize===action.payload.selectedSize
                        ){
                        state.products[i].quantity+=action.payload.quantity;
                        break;
                    }
                }

            }
            else if(action.payload.type==="decrease"){

                for(let i=0;i<state.products.length;i++){
                    if(state.products[i]._id===action.payload._id && 
                        state.products[i].selectedColor===action.payload.selectedColor &&
                        state.products[i].selectedSize===action.payload.selectedSize
                        ){

                        state.products[i].quantity-=action.payload.quantity;
                        break;
                    }
                }

            }

            state.cartTotal = state.products.reduce((accumulator,item)=>(accumulator + item.sellingPrice*item.quantity),0)
           
        }
    }
})


export const { addProduct, removeProduct, handleQuantity } = cartSlice.actions
export default cartSlice.reducer;