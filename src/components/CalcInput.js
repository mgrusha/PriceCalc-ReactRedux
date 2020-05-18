import React from "react";
import styled from "styled-components";

const PriceInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #08a6e429;
  border: 1px solid #08a6e4;
  border-radius: 6px;
  opacity: 1;
  padding: 0.7rem 0 1rem 0.7rem;
  font-size: 0.9rem;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a5a5a5;
  }
  :-ms-input-placeholder {
    color: #a5a5a5;
  }
`;

export const CalcInput = ({ name, price, onAdd, order }) => {
  {
    return (
      <PriceInput
        placeholder={name}
        onChange={(e) =>
          !isNaN(e.target.value) &&
          onAdd({
            title: name,
            amount: e.target.value,
            price: price,
            order: order,
          })
        }
      />
    );
  }
};
