import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialCartState = {
  cartIsShown: false,
  items: [],
  numberOfItems: 0,
  totalAmount: 0,
  shippingCost: 8,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart(state, action) {
      state.cartIsShown = action.payload;
    },
    addItem(state, action) {
      const exsitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exsitingItemIndex >= 0) {
        state.items[exsitingItemIndex].quantity++;
        toast.info("The number of products has been increased.", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
        toast.success("The product has been added to the cart.", {
          position: "bottom-left",
        });
      }
    },
    removeItem(state, action) {
      const newItemsArray = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = newItemsArray;
      toast.error("The product has been removed from the cart!", {
        position: "bottom-left",
      });

      state.totalAmount =
        state.totalAmount - action.payload.price * action.payload.quantity;
    },
    increaseNumberOfItems(state, action) {
      const exsitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exsitingItemIndex >= 0) {
        state.items[exsitingItemIndex].quantity++;
        state.totalAmount = state.totalAmount + action.payload.price;
      }
    },
    decreaseNumberOfItems(state, action) {
      const exsitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exsitingItemIndex >= 0) {
        if (state.items[exsitingItemIndex].quantity > 1) {
          state.items[exsitingItemIndex].quantity--;
          state.totalAmount = state.totalAmount - action.payload.price;
        } else {
          const newItemsArray = state.items.filter(
            (item) => item.id !== action.payload.id
          );

          state.items = newItemsArray;

          state.totalAmount =
            state.totalAmount - action.payload.price * action.payload.quantity;
        }
      }
    },
    increaseTotalAmount(state, action) {
      state.totalAmount = state.totalAmount + action.payload;
    },
    decreaseTotalAmount(state, action) {
      state.totalAmount = state.totalAmount - action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
