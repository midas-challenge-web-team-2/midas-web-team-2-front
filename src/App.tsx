import React from "react";
import { StyledProvider } from "./styles/StyledProvider";
import Router from "./router";

function App() {
  return (
    <StyledProvider>
      <Router />
    </StyledProvider>
  );
}

export default App;
