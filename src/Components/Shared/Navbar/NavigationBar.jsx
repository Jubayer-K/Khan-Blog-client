import {
  Navbar,
  DarkThemeToggle,
  Button,
  Flowbite,
  Avatar,
  Dropdown,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import { toast } from "react-toastify";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutToast = () =>
    toast.success(` ${user.displayName} has been logged out`);
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
      <div className="text-center md:pt-12 md:pb-6 py-6">
        <h1 className="font-thin font-nunito md:text-6xl text-3xl py-2">
          KHAN BLOG
        </h1>
          <p className="font-karla">Where Ideas Flourish & Minds Expand</p>
      </div>
      <div className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 ">
        <Navbar fluid rounded className="md:w-2/3 mx-auto">
          <Navbar.Brand href="/">
            <h1 className="text-start font-thin mr-6 text-xl hidden md:block">
              KHAN BLOG
            </h1>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  user ? (
                    <Avatar img={user?.photoURL} rounded className="text-start">
                      <div className="space-y-1 font-medium dark:text-white">
                        <div>{user?.displayName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {user?.email}
                        </div>
                      </div>
                    </Avatar>
                  ) : undefined
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Link to={"/wishlist"}>
                  <Dropdown.Item>Wishlist</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogOut}>Log out</Dropdown.Item>
                <div className="flex justify-center items-center md:hidden">
                  <Flowbite>
                    <DarkThemeToggle />
                  </Flowbite>
                </div>
              </Dropdown>
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
            <Navbar.Toggle />
          </div>
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
            {user ? undefined : (
              <div className="justify-center items-center flex p-2 md:hidden">
                <Flowbite>
                  <DarkThemeToggle />
                </Flowbite>
              </div>
            )}
            <div className=" md:flex hidden">
              <Flowbite>
                <DarkThemeToggle className="p-0" />
              </Flowbite>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
