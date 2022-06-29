import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { FavoritesProvider } from "./hooks/useFavorites";
import { RoutesApp } from "./routes";
import { queryClient } from "./services/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from "./styles/global";

export const App = () => (
  <>
    <BrowserRouter>
      <FavoritesProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Header />
          <RoutesApp />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </FavoritesProvider>
    </BrowserRouter>
  </>
);
