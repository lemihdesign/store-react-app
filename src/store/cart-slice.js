import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialCartState = {
  cartIsShown: false,
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  numberOfItems: 0,
  totalAmount: localStorage.getItem("totalAmount")
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0,
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
        toast.info(
          `The number of ${action.payload.brand} ${action.payload.name} has been increased.`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.items.push(tempProduct);
        toast.success(
          `${action.payload.brand} ${action.payload.name} has been added to the cart.`,
          {
            position: "bottom-left",
          }
        );
      }

      localStorage.setItem("items", JSON.stringify(state.items));
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

      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    increaseNumberOfItems(state, action) {
      const exsitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exsitingItemIndex >= 0) {
        state.items[exsitingItemIndex].quantity++;
        state.totalAmount = state.totalAmount + action.payload.price;
      }

      toast.info("The quantity has been increased.", {
        position: "bottom-left",
      });

      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    decreaseNumberOfItems(state, action) {
      const exsitingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exsitingItemIndex >= 0) {
        if (state.items[exsitingItemIndex].quantity > 1) {
          state.items[exsitingItemIndex].quantity--;
          state.totalAmount = state.totalAmount - action.payload.price;

          toast.info("The quantity has been decreased.", {
            position: "bottom-left",
          });
        } else {
          const newItemsArray = state.items.filter(
            (item) => item.id !== action.payload.id
          );

          state.items = newItemsArray;

          state.totalAmount =
            state.totalAmount - action.payload.price * action.payload.quantity;

          toast.error("The item has been removed.", {
            position: "bottom-left",
          });
        }
      }

      localStorage.setItem("items", JSON.stringify(state.items));
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    increaseTotalAmount(state, action) {
      state.totalAmount = state.totalAmount + action.payload;
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
    decreaseTotalAmount(state, action) {
      state.totalAmount = state.totalAmount - action.payload;
      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
