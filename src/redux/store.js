import { configureStore } from "@reduxjs/toolkit";
import fsizeReducer from "./reducers/fsizeReducer";
import { numberReducer } from "./reducers/NumberReducer";

export const store = configureStore({
  reducer: {
    // Chứa toàn bộ state global của ứng dụng
    number: numberReducer,
    img: (state = "./img/products/black-car.jpg", action) => {
      // console.log("😢 ~ action dưới", action);
      if (action.type == "HANDLE_CHANGE_CAR") {
        state = action.payload;
        return state;
      }
      return state;
    },
    fsize: fsizeReducer,
  },
});
