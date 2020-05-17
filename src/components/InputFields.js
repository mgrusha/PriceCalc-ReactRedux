import React from "react";
import styled from "styled-components";
import { CalcInput } from "./CalcInput";
import CalcDropdown from "./CalcDropdown";
import CalcCheckBox from "./CalcCheckBox";
import { addPrices } from "../actions/prices";
import { connect } from "react-redux";

const CalcArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  & > * {
    margin-bottom: 1.5rem;
  }
`;

const InputFields = ({ onAdd }) => {
  return (
    <CalcArea>
      <CalcInput
        placeHolder="Product quantity"
        name="Products"
        onAdd={onAdd}
        price={0.5}
        order={1}
      />
      <CalcInput
        placeHolder="Estimated orders in month"
        name="Orders"
        onAdd={onAdd}
        price={0.25}
        order={2}
      />
      <CalcDropdown
        placeHolder="Choose package"
        packages={[
          { name: "Basic", price: 0 },
          { name: "Standart", price: 25 },
          { name: "Premium", price: 60 },
        ]}
        onAdd={onAdd}
        order={3}
      />
      <CalcCheckBox
        placeHolder="Accounting"
        name="Accounting"
        price={35}
        onAdd={onAdd}
        order={4}
      />
      <CalcCheckBox
        placeHolder="Rental of a payment terminal"
        name="Terminal"
        price={5}
        onAdd={onAdd}
        order={5}
      />
    </CalcArea>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (price) => dispatch(addPrices(price)),
});

export default connect(null, mapDispatchToProps)(InputFields);
