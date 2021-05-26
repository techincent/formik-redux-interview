const initialState = [{name: 'abir', email: 'abir@gmail.com'}];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    case "DELETE_USER":
      const currentState = state;
      currentState.splice(action?.payload, 1)
      return [...currentState]
    default:
      return state;
  }
};

export default userReducer;
