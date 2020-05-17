import React from "react";
import InputFields from "./InputFields";
import PricesArea from "./PricesArea";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 4rem;
`;
const AreaHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: "Open Sans", sans-serif;
`;

const WhitePricesArea = styled(PricesArea)`
  color: white;
  width: 40%;
`;

export const Calc = () => {
  return (
    <>
      <Header>Calculate how much you’ll pay</Header>
      <AreaHolder>
        <InputFields />
        <WhitePricesArea />
      </AreaHolder>
    </>
  );
};
