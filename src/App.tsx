import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterProvider } from "@/context/CharacterContext";
import { FavoriteListProvider } from "@/context/FavoritesContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { CHARACTER_DETAIL_URL } from "@/utils/constants";
import Layout from "@/pages/Layout";
import HomePage from "@/pages/Home";
import CharacterDetailPage from "@/pages/CharacterDetail";
import ErrorPage from "@/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: `${CHARACTER_DETAIL_URL}/:id`,
        element: <CharacterDetailPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const App = () => (
  <LoadingProvider>
    <CharacterProvider>
      <FavoriteListProvider>
        <RouterProvider router={router} />
      </FavoriteListProvider>
    </CharacterProvider>
  </LoadingProvider>
);

export default App;
