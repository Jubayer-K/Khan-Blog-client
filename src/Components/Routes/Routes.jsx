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
import Update from "../Pages/Update/Update";

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
        path: "/update/:id",
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`)
      },
      {
        path: "/blog-details/:id",
        element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
        loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`)
      },
    ],
  },
]);

export default routes;
