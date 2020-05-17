import React from "react";
import styled from "styled-components";

export default class CalcDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Select your package" };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
    this.props.onAdd({
      title: event.target.value,
      amount: 1,
      price: this.props.packages.filter(
        (packageItem) => packageItem.name === event.target.value
      )[0].price,
      order: this.props.order,
    });
  }
  render() {
    return (
      <select value={this.state.name} onChange={this.handleChange}>
        <option disabled={true} value="" key="default">
          placeholder
        </option>
        {this.props.packages.map((packageItem) => (
          <option value={packageItem.name} key={packageItem.name}>
            {packageItem.name}
          </option>
        ))}
      </select>
    );
  }
}
