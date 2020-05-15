import React from "react";
import styled from "styled-components";

export default class CalcChecbkox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      isChecked: event.target.checked,
    });
  }

  render() {
    return (
      <label>
        <input type="checkbox" checked={this.state.isGoing} />
        {this.props.name}
      </label>
    );
  }
}
