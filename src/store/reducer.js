const initialState = {
  message: "hello shan",
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "Message Change") {
    newState.message = "Thanks shan";
  }
  if (action.type === "Increment") {
    newState.counter++;
  }

  return newState;
};

export default reducer;
