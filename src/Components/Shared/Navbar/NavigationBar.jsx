import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          <Link to={"/login"}>
            <Navbar.Link>About</Navbar.Link>
          </Link>
          <Link to={"/login"}>
            <Navbar.Link>Login</Navbar.Link>
          </Link>
          <Link to={"/register"}>
            <Navbar.Link>Register</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
