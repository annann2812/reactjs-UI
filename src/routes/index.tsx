/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router";

const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));

const routes: RouteObject[] = [
    { path: "/", element: <Home /> }, 
    { path: "/cart", element: <Cart /> },
];

export default routes;
