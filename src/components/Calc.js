import React from "react";
import InputFields from "./InputFields";
import PricesArea from "./PricesArea";

export const Calc = ({ prices, onAdd }) => {
  return (
    <>
      <InputFields />
      <PricesArea />
    </>
  );
};
