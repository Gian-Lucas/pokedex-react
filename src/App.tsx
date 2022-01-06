import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { FavoritesProvider } from "./hooks/useFavorites";
import { RoutesApp } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => (
  <>
    <BrowserRouter>
      <FavoritesProvider>
        <GlobalStyle />
        <Header />
        <RoutesApp />
      </FavoritesProvider>
    </BrowserRouter>
  </>
);
