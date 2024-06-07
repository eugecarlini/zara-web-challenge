import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/pages/Layout";
import HomePage from "@/pages/Home";
import CharacterDetailPage from "@/pages/CharacterDetail";
import ErrorPage from "@/pages/Error";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/character-detail/:id",
        element: <CharacterDetailPage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
