import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </>
);
