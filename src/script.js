import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

import Contect from "./Components/Contect";

import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loding
// On Demand Loding

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
