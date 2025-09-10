import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
]

export default routes