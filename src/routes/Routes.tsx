import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";

const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/profile", element: <Profile /> },
    { path: "/products/:id", element: <ProductDetails /> },
]

export default routes