import React from "react";
import PriceFields from "./PriceFields";
import TotalPrice from "./TotalPrice";
import { connect } from "react-redux";
import { getSelectedPrice, getTotalPrice } from "../selectors/price";

const Prices = ({ className, prices, totalPrice }) => {
  return (
    <div className={className}>
      <PriceFields prices={prices} />
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  prices: getSelectedPrice(state),
  totalPrice: getTotalPrice(state),
});

export default connect(mapStateToProps)(Prices);
