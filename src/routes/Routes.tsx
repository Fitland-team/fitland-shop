import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";
import Account from "../components/Account/Account";
import ShoppingCard from "../components/ShoppingCard/ShoppingCard";
import Favorites from "../components/Favorites/Favorites";
import Comments from "../components/Comments/Comments";
import NotFound from "../pages/NotFound/NotFound";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/products/:id", element: <ProductDetails /> },
  { path: "/shoppingcard", element: <ShoppingCard /> },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      { path: "account", element: <Account /> },
      { path: "favorites", element: <Favorites /> },
      { path: "comments", element: <Comments /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
