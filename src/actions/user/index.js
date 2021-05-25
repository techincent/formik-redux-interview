export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user
  };
};

export const deleteUser = (index) => {
  return {
    type: "DELETE_USER",
    payload: index
  };
};
