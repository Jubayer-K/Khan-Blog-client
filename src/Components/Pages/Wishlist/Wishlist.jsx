import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import WishlistCard from "../../Shared/WishlistCard/WishlistCard";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/my-wishlist/${user.email}`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);
  return (
    <>
      <Helmet>
        <title>Khan Blog | Wishlist</title>
      </Helmet>
      <div className="max-w-7xl mx-auto my-12">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
          className="md:pl-8 md:text-6xl text-4xl font-thin md:text-start text-center"
        >
          Wishlist
        </motion.h1>
      </div>
      <div>
        {blogs.length === 0 ? (
          <motion.p
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
            className="text-4xl my-7 text-center font-thin"
          >
            You Have No Blogs in Your Wishlist
          </motion.p>
        ) : (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto"
          >
            {blogs.map((blog) => (
              <WishlistCard
                key={blog._id}
                blog={blog}
                blogs={blogs}
                setBlogs={setBlogs}
              ></WishlistCard>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
