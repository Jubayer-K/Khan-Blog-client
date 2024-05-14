import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Hero from "../../Shared/Hero/Hero";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import TopBloggers from "../../Shared/TopBloggers/TopBloggers";
import HomeCard from "../../Shared/HomeCard/HomeCard";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query"; // Import useQuery
import axios from "axios"; // Import axios
import LoadingSkeleton from "../../Shared/LoadingSkeleton/LoadingSkeleton";
import Header from "../../Shared/Header/Header";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchRecentBlogs,
    queryKey: "recentBlogs",
  });

  async function fetchRecentBlogs() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }

  if (isLoading) return <LoadingSkeleton></LoadingSkeleton>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Helmet>
        <title>Khan Blog | Home</title>
      </Helmet>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
      >
        <Hero></Hero>
      </motion.div>
      <h1 className="text-center text-xl md:text-4xl lg:text-6xl font-thin my-6">
        Recent blogs
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {blogs.slice(0, 6).map((blog) => (
          <HomeCard key={blog._id} blog={blog}></HomeCard>
        ))}
      </div>
      <div className="mx-auto">
        <Header></Header>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-xl md:text-4xl lg:text-6xl font-thin mt-6">
          Sharing Knowledge
        </h1>
        <h1 className="text-center text-base md:text-2xl my-6">
          Blogging allows you to share your experiences, and insights
          with the world.
        </h1>
        <Banner></Banner>
      </div>
      <TopBloggers blogs={blogs}></TopBloggers>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
