import { combineReducers } from "redux";
import priceReducer from "./PriceReducer";

const rootReducer = combineReducers({
  priceState: priceReducer,
});

export default rootReducer;
