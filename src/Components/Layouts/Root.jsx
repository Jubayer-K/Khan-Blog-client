import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavigationBar from "../Shared/Navbar/NavigationBar";
const Root = () => {
    return (
        <div className="font-raleway dark:bg-gray-800 dark:text-white">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;