import React from "react";
import PriceFields from "./PriceFields";
import { connect } from "react-redux";
import { getSelectedPrice } from "../selectors/price";

const Prices = ({ prices, onAdd }) => {
  return (
    <>
      <PriceFields prices={prices} />
    </>
  );
};

const mapStateToProps = (state) => ({
  prices: getSelectedPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (element) => dispatch(null),
});

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
