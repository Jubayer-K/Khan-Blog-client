import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
const Root = () => {
    return (
        <div className="font-raleway dark:bg-gray-800 dark:text-white">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;