import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../../Shared/HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";

const AllBlogs = () => {
  const allBlogs = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredBlogs =
    selectedCategory === "all" ? allBlogs : allBlogs.filter((blog) => blog.category === selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = [...new Set(allBlogs.map((blog) => blog.category))];

  return (
    <div>
      <Helmet>
        <title>Khan Blog | All Blogs</title>
      </Helmet>
      <div className="max-w-7xl mx-auto my-12 flex justify-between">
        <h1 className="md:text-6xl text-4xl font-thin">All Blogs</h1>
        <div className="">
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
    
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {filteredBlogs.map((blog) => (
          <HomeCard key={blog._id} blog={blog}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
