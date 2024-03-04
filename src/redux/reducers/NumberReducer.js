export const numberReducer = (state = 10, action) => {
  // console.log("😢 ~ action trên", action);
  switch (action.type) {
    case "CHANGE_NUMBER_ACTION": {
      state = action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
  // return state;
};
