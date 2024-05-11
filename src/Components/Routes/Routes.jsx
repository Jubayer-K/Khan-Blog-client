import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Root from "../Layouts/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import PrivateRoutes from "./PrivateRoutes";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-blog",
        element:<PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs></FeaturedBlogs>,
      },
      {
        path: "/wishlist",
        element: <PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>,
      },
      {
        path: "/blog-details",
        element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
      },
    ],
  },
]);

export default routes;
