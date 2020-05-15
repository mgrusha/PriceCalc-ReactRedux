import React from "react";
import styled from "styled-components";

export default class PriceFields extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {(this.props.prices || []).map((element) => (
          <li>{element.title}</li>
        ))}
      </ul>
    );
  }
}
