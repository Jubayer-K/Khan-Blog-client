import { Button } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import axios from "axios";
import { toast } from "react-toastify";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const blog = useLoaderData();
  const {
    title,
    image_url,
    category,
    short_description,
    long_description,
    _id,
    author_email,
  } = blog;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/comments`
        );
        // Filter comments for the current blog based on their blogId
        const filteredComments = response.data.filter(
          (comment) => comment.blogId === _id
        );
        setComments(filteredComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [_id]);

  const handleComment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const commenterEmail = user.email;
    const commenterImage = user.photoURL;
    const commenterName = user.displayName;
    const blogId = _id;

    const commentData = {
      blogId,
      commenterName,
      commenterEmail,
      commenterImage,
      comment,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/comments`,
        commentData
      );
      setComments([...comments, data]);
      setComment("");
      toast.success("Comment Posted");
    } catch (err) {
      console.log(err);
    }
  };

  const isAuthor = author_email === user.email;
  return (
    <>
      <div className="overflow-hidden py-24 sm:py-32 mx-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 dark:text-lime-200 text-lime-600">
                  {category}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  {title}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                  {short_description}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-200 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900"></dt>
                    <dd className="inline">{long_description}</dd>
                  </div>
                </dl>
              </div>

              {isAuthor ? (
                <div className="flex justify-center items-center my-12">
                  <Link to={`/update/${_id}`}>
                    <Button gradientDuoTone="tealToLime">Update Blog</Button>
                  </Link>
                </div>
              ) : null}
            </div>
            <img
              src={image_url}
              alt="blog image"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      {/* comment box */}
      {!isAuthor ? (
        <div className=" comment-box">
          <div className="max-w-2xl mx-auto px-4">
            <form className="mb-6" onSubmit={handleComment}>
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={comment}
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
              </div>
              <Button outline gradientDuoTone="tealToLime" type="submit">
                Post comment
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center"> Can not comment on own blog </div>
      )}
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments ({comments.length})
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <article
              key={comment._id}
              className="p-6 text-base bg-gray-200 rounded-lg dark:bg-gray-900"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src={comment.commenterImage}
                      alt={comment.commenterName}
                    />
                    {comment.commenterName}
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {comment.comment}
              </p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
