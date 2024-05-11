import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import Hero from "../../Shared/Hero/Hero";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import TopBloggers from "../../Shared/TopBloggers/TopBloggers";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Khan Blog | Home</title>
      </Helmet>
      <Hero></Hero>
      <TopBloggers></TopBloggers>
      <div className=" mx-auto max-w-screen-2xl md:py-12 py-6">
        <Banner></Banner>
      </div>
      <Newsletter></Newsletter>
    </>
  );
};

export default Home;
