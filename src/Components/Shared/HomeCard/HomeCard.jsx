import axios from "axios";
import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Providers/AuthProviders";

const HomeCard = ({ blog }) => {
  const { user } = useContext(AuthContext);

  const {
    title,
    image_url,
    category,
    short_description,
    long_description,
    _id,
    author_image,
    author_name,
    author_email,
  } = blog;

  const wishlistData = {
    wishlistId: _id,
    title,
    image_url,
    category,
    short_description,
    long_description,
    author_image,
    author_name,
    author_email,
    user_email: user?.email,
  };

  const addToWishlist = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/wishlist`,
        wishlistData
      );
      console.log("Added to wishlist:", wishlistData);
      toast.success("Blog Added to your Wishlist");
    } catch (error) {
      toast.error("Error adding to wishlist");
      console.error("Error adding to wishlist:", error);
    }
  };
  return (
    <>
      <Card
        className="max-w-sm drop-shadow-xl"
        imgAlt="decorative"
        imgSrc={image_url}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5 className="text-xlfont-thin font-karla">
          Category :{" "}
          <span className="text-lime-500 dark:text-lime-300 text-base font-bold tracking-tight ">
            {category}
          </span>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {short_description}
        </p>
        <div className="flex gap-4 items-center">
          <Link to={`/blog-details/${_id}`}>
            <Button outline gradientDuoTone="tealToLime">
              View Details
            </Button>
          </Link>
          <Button
            disabled={!user}
            outline
            gradientDuoTone="purpleToBlue"
            onClick={addToWishlist}
          >
            Add to Wishlist
          </Button>
        </div>
      </Card>
    </>
  );
};

HomeCard.propTypes = {
  blog: PropTypes.object,
};

export default HomeCard;
