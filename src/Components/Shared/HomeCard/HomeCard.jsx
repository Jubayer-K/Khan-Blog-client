import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeCard = ({ blog }) => {
  const { title, image_url, category, short_description, _id } = blog;
  return (
    <>
      <Card className="max-w-sm drop-shadow-xl" imgAlt="decorative" imgSrc={image_url}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5 className="text-xlfont-thin font-karla">
        Category : <span className="text-lime-500 dark:text-lime-300 text-base font-bold tracking-tight ">{category}</span> 
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
          <Button outline gradientDuoTone="purpleToBlue">
            Wishlist
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
