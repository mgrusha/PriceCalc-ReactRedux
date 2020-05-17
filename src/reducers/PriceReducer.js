import { ADD_PRICE, REMOVE_PRICE, GET_PRICE } from "../constants/actionTypes";

const INITIAL_STATE = [];

const addNewPrice = (state, action) => {
  for (let pricePosition = 0; pricePosition < state.length; pricePosition++) {
    if (state[pricePosition].title === action.price.title) {
      state[pricePosition] = action.price;
      return [...state];
    }
  }
  return [...state, action.price];
};
// const addNewPrice = (state, action) => [...state, action.price];
const removePrice = (state, action) =>
  state.filter((element) => element.title !== action.title);

function priceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRICE: {
      return addNewPrice(state, action);
    }
    case REMOVE_PRICE: {
      return removePrice(state, action);
    }
    case GET_PRICE: {
      return state;
    }
    default:
      return state;
  }
}

export default priceReducer;
