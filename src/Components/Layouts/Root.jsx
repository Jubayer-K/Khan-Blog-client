import { Outlet } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import Headline from "../Shared/Headline/Headline";
import { motion } from "framer-motion";
const Root = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 20 }}
      >
        <Headline></Headline>
      </motion.div>
      <div className="font-raleway dark:bg-gray-800 dark:text-white">
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer
          transition={Flip}
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        ></ToastContainer>
      </div>
    </>
  );
};

export default Root;
