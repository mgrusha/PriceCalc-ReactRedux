import React from "react";
import styled from "styled-components";

const PricesList = styled.ul``;
const PricesListItem = styled.li`
  text-decoration: none;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #55dfb4 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  margin: 0 0 0.5rem 0;
  height: 2rem;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 0.9rem;
  border-radius: 6px;
`;
export default class PriceFields extends React.Component {
  render() {
    return (
      <PricesList>
        {(this.props.prices || [])
          .sort((a, b) => a.order - b.order)
          .map((element) => (
            <PricesListItem key={element.title}>
              <span>{element.title}</span>{" "}
              <span>
                {element.amount === 1 || isNaN(element.amount)
                  ? element.amount
                  : `${element.amount}*$${element.price}`}
              </span>
              <span>
                $
                {element.amount === 1 || isNaN(element.amount)
                  ? element.price
                  : `${element.amount * element.price}`}
              </span>
            </PricesListItem>
          ))}
      </PricesList>
    );
  }
}
