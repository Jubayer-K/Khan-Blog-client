import { useState } from "react";
import HomeCard from "../../Shared/HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSkeleton from "../../Shared/LoadingSkeleton/LoadingSkeleton";

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: allBlogsData,
    isLoading,
    isError,
  } = useQuery({
    queryFn: fetchAllBlogs,
    queryKey: "allBlogs",
  });

  async function fetchAllBlogs() {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
    return response.data;
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const categories = allBlogsData
    ? [...new Set(allBlogsData.map((blog) => blog.category))]
    : [];

  const filteredBlogsByCategory =
    selectedCategory === "all"
      ? allBlogsData
      : allBlogsData.filter((blog) => blog.category === selectedCategory);

  const filteredBlogs =
    searchQuery === ""
      ? filteredBlogsByCategory
      : filteredBlogsByCategory.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  if (isLoading) return <LoadingSkeleton></LoadingSkeleton>;
  return (
    <>
      <div>
        <Helmet>
          <title>Khan Blog | All Blogs</title>
        </Helmet>

        <div className="max-w-7xl mx-auto my-12 flex flex-col gap-4 md:flex-row justify-between">
          <motion.h1
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.4, stiffness: 120 }}
            className="md:pl-8 md:text-6xl text-4xl font-thin md:text-start text-center"
          >
            All Blogs
          </motion.h1>
          <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search by title..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="block border dark:bg-gray-800 border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block border dark:bg-gray-800 border-gray-300 rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching blogs.</p>}
            {!isLoading &&
              !isError &&
              filteredBlogs.map((blog) => (
                <HomeCard key={blog._id} blog={blog}></HomeCard>
              ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AllBlogs;
