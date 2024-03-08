import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgCar: "./img/products/black-car.jpg",
};

const imgReducer = createSlice({
  name: "imgReducer",
  initialState,
  reducers: {
    changeCarAction: (state, action) => {
      //   console.log("😢 ~ action", action);
      console.log("payload", action.payload);
      state.imgCar = action.payload;
    },
  },
});

export const { changeCarAction } = imgReducer.actions;

export default imgReducer.reducer;

// (state = "./img/products/black-car.jpg", action) => {
//     // console.log("😢 ~ action dưới", action);
//     if (action.type == "HANDLE_CHANGE_CAR") {
//       state = action.payload;
//       return state;
//     }
//     return state;
//   }
