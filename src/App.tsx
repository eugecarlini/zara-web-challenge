import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterProvider } from "@/context/CharacterContext";
import Layout from "@/pages/Layout";
import HomePage from "@/pages/Home";
import CharacterDetailPage from "@/pages/CharacterDetail";
import ErrorPage from "@/pages/Error";
import { CHARACTER_DETAIL_URL } from "@/utils/constants";
import "./App.css";

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
  <CharacterProvider>
    <RouterProvider router={router} />
  </CharacterProvider>
);

export default App;
