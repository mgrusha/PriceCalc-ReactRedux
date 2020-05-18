import React from "react";
import styled from "styled-components";
import Select from "react-styled-select";

const StyledDropdown = styled(Select)`
  --styled-select-control__border-color: #08a6e4;
  --styled-select-menu-outer__box-shadow: 0px 3px 6px #00000029;
  --styled-select-menu__border-radius: 6px;
  --styled-select-select__border-radius: 6px;
  --styled-select-clear__font-size: 0.9rem;
  --styled-select-multi-value__font-size: 0.9rem;
  --styled-select-placeholder__font-size: 0.9rem;
  --styled-select-input__padding: 0 1.25rem;
`;
export default class CalcDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(selected) {
    this.setState({
      selected: selected,
    });
    this.props.onAdd({
      title: "Package",
      amount: selected,
      price: this.props.packages.filter(
        (packageItem) => packageItem.name === selected
      )[0].price,
      order: this.props.order,
    });
  }
  render() {
    const packages = this.props.packages.map((packageItem) => {
      return { label: packageItem.name, value: packageItem.name };
    });
    return (
      <StyledDropdown
        options={packages}
        value={this.state.selected}
        onChange={this.handleChange}
        placeholder={this.props.placeHolder}
      />
    );
  }
}
