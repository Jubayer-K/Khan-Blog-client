
import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Hero from "../../Shared/Hero/Hero";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import TopBloggers from "../../Shared/TopBloggers/TopBloggers";
import HomeCard from "../../Shared/HomeCard/HomeCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const blogs = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Khan Blog | Home</title>
      </Helmet>
      <Hero></Hero>
      <h1 className="text-center text-xl md:text-4xl lg:text-6xl font-thin my-6">Recent blogs</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
            {blogs.slice(0, 6).map((blog) => (
              <HomeCard key={blog._id} blog={blog}></HomeCard>
            ))}
          </div>
      <TopBloggers blogs={blogs}></TopBloggers>
      <div className=" mx-auto max-w-screen-2xl md:py-12 py-6">
        <Banner></Banner>
      </div>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
