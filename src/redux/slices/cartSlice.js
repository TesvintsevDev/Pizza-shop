import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const calculateTotalPrice = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.count, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const removedItemIndex = state.items.findIndex(item => item.id === itemIdToRemove);
      
      if (removedItemIndex !== -1) {
        const removedItem = state.items[removedItemIndex];
        state.items.splice(removedItemIndex, 1); // Удаляем товар из массива items

        // Уменьшаем общую сумму на стоимость удаленного товара
        state.totalPrice -= removedItem.price * removedItem.count; 
      }
      
      // Если корзина пуста, устанавливаем totalPrice в 0
      if (state.items.length === 0) {
        state.totalPrice = 0;
      }
    },
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      // Обновляем общую сумму
      state.totalPrice = calculateTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
    
      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
        // Обновляем общую сумму
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },
    removeItem(state, action) {
      const itemToRemove = state.items.find((obj) => obj.id === action.payload);
      if (itemToRemove) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice = calculateTotalPrice(state.items);
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, clearItems, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
