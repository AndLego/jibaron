/**
 * The reducer function takes in the current state and an action, and returns the new state.
 * @returns {
 *   user: {
 *     name: "John",
 *     age: 30,
 *   },
 * };
 */
export const actionType = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export { reducer };
