import React from "react";
import styled from "styled-components";

const TotalPriceHolder = styled.div`
  background: #08a6e4 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  margin: 0 0 0.5rem 0;
  height: 2rem;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 0.9rem;
  width: 50%;
  float: right;
`;
export default class TotalPrice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TotalPriceHolder>
        <span>Total:</span> <span>{this.props.totalPrice}$</span>
      </TotalPriceHolder>
    );
  }
}
