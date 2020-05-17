import { GET_PRICE, ADD_PRICE } from "../constants/actionTypes";

const getPrices = () => ({
  type: GET_PRICE,
});

const addPrices = (price) => ({
  type: ADD_PRICE,
  price,
});

export { getPrices, addPrices };
