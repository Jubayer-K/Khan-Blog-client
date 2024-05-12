import axios from "axios";
import { Button, Card } from "flowbite-react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishlistCard = ({ blog, blogs, setBlogs }) => {
  const { title, image_url, category, short_description, wishlistId, _id } = blog;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#707684",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/wishlist/${_id}`)
          .then((response) => {
            const { data } = response;
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success",
              });
            }
            const remaining = blogs.filter((blog) => blog._id !== _id);
            setBlogs(remaining);
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the item.",
              icon: "error",
            });
          });
      }
    });
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
          <Link to={`/blog-details/${wishlistId}`}>
            <Button outline gradientDuoTone="tealToLime">
              View Details
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete(_id)}
            gradientDuoTone="pinkToOrange"
          >
            Remove
          </Button>
        </div>
      </Card>
    </>
  );
};

WishlistCard.propTypes = {
  blog: PropTypes.object,
  blogs: PropTypes.object,
  setBlogs: PropTypes.object,
};

export default WishlistCard;
