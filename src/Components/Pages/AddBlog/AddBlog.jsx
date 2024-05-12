import axios from "axios";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";

const AddBlog = () => {
  const { user } = useContext(AuthContext);

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const category = form.category.value;
    const short_description = form.short_description.value;
    const long_description = form.long_description.value;
    const author_email = user.email;
    const author_image = user.photoURL;
    const author_name = user.displayName;

    const newBlog = {
      title,
      image,
      category,
      short_description,
      author_email,
      long_description,
      author_image,
      author_name,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/blogs`,
        newBlog,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.insertedId) {
        toast.success("Blog Added Successfully");
        form.reset();
      } else {
        toast.error("Blog Add Unsuccessful");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      toast.error("An error occurred while adding the blog");
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse items-center mx-auto my-12 gap-5 shadow-2xl rounded-xl max-w-7xl">
        <div className="w-full">
          <img
            className="h-full object-cover"
            src="/addblog.png"
            alt="blog Image"
          />
        </div>
        <div className="space-y-12 w-full mx-auto p-8">
          <form onSubmit={handleAddBlog}>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex flex-col gap-4">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6  "
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6  "
                  >
                    Image
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      type="text"
                      name="image"
                      id="image"
                      autoComplete="image"
                      className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium leading-6  "
                  >
                    Category
                  </label>
                  <div className="mt-2">
                    <select
                      required
                      id="category"
                      name="category"
                      autoComplete="category-name"
                      className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="Productivity">Productivity</option>
                      <option value="Food">Food</option>
                      <option value="Technology">Technology</option>
                      <option value="Photography">Photography</option>
                      <option value="Health">Health</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="short_description"
                    className="block text-sm font-medium leading-6  "
                  >
                    Short Description
                  </label>
                  <textarea
                    required
                    id="short_description"
                    name="short_description"
                    className="block w-full rounded-md border-0 py-1.5 resize-none  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <div className="sm:col-span-3 sm:col-start-1">
                  <label
                    htmlFor="long_description"
                    className="block text-sm font-medium leading-6  "
                  >
                    Long Description
                  </label>
                  <textarea
                    required
                    id="long_description"
                    name="long_description"
                    className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Link to={"/"}>
                <button
                  type="button"
                  className="text-sm font-semibold leading-6  "
                >
                  Cancel
                </button>
              </Link>
              <Button type="submit">Add Blog</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
