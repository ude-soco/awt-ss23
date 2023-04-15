// Create action(s) i.e., type of actions
export const INCREASE_COUNT = "Increase count value";
export const DECREASE_COUNT = "Decrease count value";
export const RESET_COUNT = "Reset count value";
export const SET_TEXT = "Text Updated";

// Create action creators
export const setIncrease = () => ({
  type: INCREASE_COUNT
});

export const setDecrease = () => ({
  type: DECREASE_COUNT
});

export const setReset = () => ({
  type: RESET_COUNT
});

// Initialize the states
const initialState = {
  count: 7
};

// Reducer function to update the states
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 7
      };
    default:
      return state;
  }
}
