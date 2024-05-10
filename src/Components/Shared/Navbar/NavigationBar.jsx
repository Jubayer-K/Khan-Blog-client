import {
  Navbar,
  DarkThemeToggle,
  Button,
  Flowbite,
  Avatar,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import { toast } from "react-toastify";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const logOutToast = () => toast("User Logged out Successfully");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        logOutToast();
      })
      .catch();
  };

  const location = new useLocation();
  return (
    <>
      <div>
        <h1 className="font-thin text-center md:pt-12 md:pb-6 py-6 md:text-6xl">
          KHAN BLOG
        </h1>
      </div>
      <div className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800">
        <Navbar className="font-thin text-sm md:w-1/2 mx-auto">
          <Navbar.Brand>
            {user ? (
              <Button
                onClick={handleLogOut}
                outline
                gradientDuoTone="redToYellow"
              >
                Logout
              </Button>
            ) : (
              <div className="flex gap-4">
                <Link to={"/login"}>
                  <Button outline gradientDuoTone="purpleToBlue">
                    Login
                  </Button>
                </Link>
                <Link to={"/register"}>
                  <Button outline gradientDuoTone="tealToLime">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link to={"/"}>
              <Navbar.Link active={location.pathname === "/"}>HOME</Navbar.Link>
            </Link>
            <Link to={"/add-blog"}>
              <Navbar.Link active={location.pathname === "/add-blog"}>
                ADD BLOG
              </Navbar.Link>
            </Link>
            <Link to={"/all-blogs"}>
              <Navbar.Link active={location.pathname === "/all-blogs"}>
                ALL BLOGS
              </Navbar.Link>
            </Link>
            <Link to={"/featured-blogs"}>
              <Navbar.Link active={location.pathname === "/featured-blogs"}>
                FEATURED BLOGS
              </Navbar.Link>
            </Link>
            <Link to={"/wishlist"}>
              <Navbar.Link active={location.pathname === "/wishlist"}>
                WISHLIST
              </Navbar.Link>
            </Link>
          </Navbar.Collapse>
          <div className="flex justify-center items-center gap-4">
            <Flowbite>
              <DarkThemeToggle className="p-0" />
            </Flowbite>
            {user ? (
              <Avatar img={user.photoURL} rounded>
                <div className="space-y-1 font-medium dark:text-white">
                  <div>{user.displayName}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </div>
              </Avatar>
            ) : (
              ""
            )}
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
