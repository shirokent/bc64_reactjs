// Cú pháp tạo nhanh slice (reducer)
// rxslice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: 19,
};

const fsizeReducer = createSlice({
  // Tên của reducer
  name: "fsizeReducer",
  initialState: initialState,
  reducers: {
    changeFontSizeAction: (state, action) => {
      console.log("😢 ~ action", action);
      state.size += action.payload;
    },
  },
});

export const { changeFontSizeAction } = fsizeReducer.actions;

export default fsizeReducer.reducer;

// (state = 16, action) => {
//     // switch (action.type) {
//     //   case "CHANGE_FSIZE_ACTION": {
//     //     state = action.payload;
//     //     return state;
//     //   }
//     //   default: {
//     //     return state;
//     //   }
//     // }

//     if (action.type == "CHANGE_FSIZE_ACTION") {
//       state += action.payload;
//       return state;
//     }
//     return state;
//   }
