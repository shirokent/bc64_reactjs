import { configureStore } from "@reduxjs/toolkit";
import fsizeReducer from "./reducers/fsizeReducer";
import { numberReducer } from "./reducers/NumberReducer";
import imgReducer from "./reducers/imgReducer";

export const store = configureStore({
  reducer: {
    // Chứa toàn bộ state global của ứng dụng
    number: numberReducer,
    img: imgReducer,
    fsize: fsizeReducer,
  },
});
