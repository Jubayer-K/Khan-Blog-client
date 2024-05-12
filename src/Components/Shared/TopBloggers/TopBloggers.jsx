import { PropTypes } from "prop-types";

const TopBloggers = ({ blogs }) => {


  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Meet our Top Bloggers
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Our top bloggers are the architects of knowledge, crafting
              compelling narratives and delivering invaluable insights.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {blogs.slice(-6).map((blog) => (
              <li key={blog._id}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={blog.author_image}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-400">
                      {blog.author_name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-lime-400 dark:text-lime-200">
                      {blog.author_email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

TopBloggers.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      author_image: PropTypes.string,
      author_name: PropTypes.string,
      author_email: PropTypes.string,
    })
  ).isRequired,
};
export default TopBloggers;
