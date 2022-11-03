import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

export const StyledProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
