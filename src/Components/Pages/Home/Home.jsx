import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Hero from "../../Shared/Hero/Hero";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import TopBloggers from "../../Shared/TopBloggers/TopBloggers";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../../Shared/HomeCard/HomeCard";

const Home = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <>
      <Helmet>
        <title>Khan Blog | Home</title>
      </Helmet>
      <Hero></Hero>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 p-6">
            {blogs.slice(0, 6).map((blog) => (
              <HomeCard key={blog._id} blog={blog}></HomeCard>
            ))}
          </div>
      <TopBloggers></TopBloggers>
      <div className=" mx-auto max-w-screen-2xl md:py-12 py-6">
        <Banner></Banner>
      </div>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
