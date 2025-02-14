import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        addItem: addItemReducer,
        removeItem: removeItemReducer,
        updateQuantity: updateQuantityReducer,
    },
});
export default store
