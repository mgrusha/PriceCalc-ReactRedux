import { ADD_PRICE, REMOVE_PRICE, GET_STORIES } from "../constants/actionTypes";

const INITIAL_STATE = [
  {
    title: "Products",
    amount: "20",
    price: "0.5",
    currency: "USD",
  },
  {
    title: "Terminal",
    amount: "1",
    price: "5",
    currency: "USD",
  },
];

const addNewPrice = (state, action) => [...state, action];
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
    case GET_STORIES: {
      return state;
    }
    default:
      return state;
  }
}

export default priceReducer;
