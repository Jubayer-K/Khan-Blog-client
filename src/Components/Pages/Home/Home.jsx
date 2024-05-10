import Banner from "../../Shared/Banner/Banner";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import TopBloggers from "../../Shared/TopBloggers/TopBloggers";

const Home = () => {
  return (
    <>
      <div className=" mx-auto md:py-12 py-6">
        <Banner></Banner>
        <TopBloggers></TopBloggers>
        <Newsletter></Newsletter>
      </div>
    </>
  );
};

export default Home;
