import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";

const HomeCard = ({ blog }) => {
  const {title,image_url,category,short_description,_id} = blog;
  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="decorative"
        imgSrc={image_url}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {short_description}
        </p>
        <div className="flex gap-4 items-center">
          <Button>Wishlist</Button>
          <Button>View Details</Button>
        </div>
      </Card>
    </>
  );
};

HomeCard.propTypes = {
  blog: PropTypes.object,
};

export default HomeCard;
