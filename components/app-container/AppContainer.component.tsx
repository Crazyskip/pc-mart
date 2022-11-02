import React from "react";
import { Container } from "./AppContainer.styles";

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <Container>{children}</Container>
);

export default AppContainer;
