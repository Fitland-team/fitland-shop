import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";
import Account from "../components/Account/Account";
import Orders from "../components/Orders/Orders";
import Favorites from "../components/Favorites/Favorites";
import Addresses from "../components/Addresses/Addresses";
import Comments from "../components/Comments/Comments";

const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/products/:id", element: <ProductDetails /> },
    {
        path: "/profile",
        element: <Profile />,
        children: [
            { path: "account", element: <Account /> },
            { path: "orders", element: <Orders /> },
            { path: "favorites", element: <Favorites /> },
            { path: "addresses", element: <Addresses /> },
            { path: "comments", element: <Comments /> },
        ]
    },
]

export default routes