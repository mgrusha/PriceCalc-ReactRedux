import React from "react";
import styled from "styled-components";
import { CalcInput } from "./CalcInput";
import CalcDropdown from "./CalcDropdown";
import CalcCheckBox from "./CalcCheckBox";

const CalcArea = styled.div``;

const InputFields = () => {
  return (
    <CalcArea>
      <CalcInput name="Product quantity" />
      <CalcInput name="Estimated orders in month" />
      <CalcDropdown name="Choose package" packages="package" />
      <CalcCheckBox name="Accounting" />
      <CalcCheckBox name="Choose package" />
    </CalcArea>
  );
};

export default InputFields;
