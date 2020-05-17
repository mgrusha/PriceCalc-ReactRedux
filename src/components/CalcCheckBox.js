import React from "react";
import styled from "styled-components";

const CheckBoxInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #95989a;
  border-radius: 4px;
  opacity: 1;
  height: 1.5rem;
  width: 1.5rem;
  transform: scale(1.5) translate(10%, 10%);
  margin-right: 1rem;
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;

export default class CalcChecbkox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onAdd({
      title: this.props.name,
      amount: event.target.checked ? 1 : 0,
      price: this.props.price,
      order: this.props.order,
    });
    this.setState({
      isChecked: event.target.checked,
    });
  }

  render() {
    return (
      <CheckboxLabel>
        <CheckBoxInput
          type="checkbox"
          checked={this.state.isGoing}
          onClick={this.handleInputChange}
        />
        {this.props.placeHolder}
      </CheckboxLabel>
    );
  }
}
