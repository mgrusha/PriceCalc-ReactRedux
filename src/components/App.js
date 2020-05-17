import React from "react";
import { Calc } from "./Calc";
import styled from "styled-components";

const MainApp = styled.div`
  max-width: 62.5rem;
`;

const App = () => (
  <MainApp>
    <Calc />
  </MainApp>
);

export default App;
