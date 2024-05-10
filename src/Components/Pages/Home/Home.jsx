import Banner from "../../Shared/Banner/Banner";
import Newsletter from "../../Shared/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <div className=" mx-auto md:py-12 py-6">
        <Banner></Banner>
        <Newsletter></Newsletter>
      </div>
    </>
  );
};

export default Home;
