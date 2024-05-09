import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = new useLocation();
  return (
    <>
      <div>
        <h1 className="text-center md:pt-12 md:pb-6 font-roboto md:text-6xl">
          KHAN BLOG
        </h1>
      </div>
      <Navbar fluid rounded className="font-roboto">
        <Navbar.Brand>
          <div className="flex gap-4">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            <Flowbite>
              <DarkThemeToggle className="p-0" />
            </Flowbite>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link active={location.pathname === "/"}>Home</Navbar.Link>
          </Link>
          <Link to={"/add-blog"}>
            <Navbar.Link active={location.pathname === "/add-blog"}>
              Add Blog
            </Navbar.Link>
          </Link>
          <Link to={"/all-blogs"}>
            <Navbar.Link active={location.pathname === "/all-blogs"}>
              All Blogs
            </Navbar.Link>
          </Link>
          <Link to={"/featured-blogs"}>
            <Navbar.Link active={location.pathname === "/featured-blogs"}>
              Featured Blogs
            </Navbar.Link>
          </Link>
          <Link to={"/wishlist"}>
            <Navbar.Link active={location.pathname === "/wishlist"}>
              Wishlist
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
