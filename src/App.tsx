import { createBrowserRouter, RouterProvider, Navigate  } from "react-router-dom";
import Root from "./pages/Root";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";

import { useAppSelector } from "./store/store";

import "./App.css";

const unAuthRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      {!user ? (
        <RouterProvider router={unAuthRouter} />
      ) : (
        <RouterProvider router={authRouter} />
      )}
    </>
  );
}

export default App;
