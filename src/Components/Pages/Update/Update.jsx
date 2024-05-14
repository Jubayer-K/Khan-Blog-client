import axios from "axios";
import { Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
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

  
  const handleUpdate = async (e) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const image = form.image.value;
      const category = form.category.value;
      const shortDescription = form.short_description.value;
      const longDescription = form.long_description.value;
      const updatedBlog = {title,image,category,shortDescription,longDescription};

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/blogs/${_id}`,
        updatedBlog,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 && response.data.modifiedCount > 0) {
        toast.success("Blog Updated Successfully");
      } else {
        toast.error("Update Unsuccessful");
      }
    } catch (error) {
      toast.error("An error occurred while updating the item");
    }
  };
  return (
    <>
    <Helmet>
        <title>Khan Blog | Update Blog</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row items-center mx-auto my-12 gap-5 shadow-2xl rounded-xl max-w-7xl">
      <div className="w-full">
            <img className="h-full object-cover" src={image_url} alt="blog Image" />
          </div>
        <div className="space-y-12 w-full mx-auto p-8">
          <form onSubmit={handleUpdate}>
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
                      type="text"
                      name="title"
                      id="title"
                      defaultValue={title}
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
                      type="text"
                      name="image"
                      id="image"
                      autoComplete="image"
                      defaultValue={image_url}
                      className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6  "
                  >
                    Email address{" "}
                    <span className="text-gray-500">(not allowed)</span>
                  </label>
                  <div className="mt-2">
                    <input
                      disabled
                      id="email"
                      name="email"
                      type="email"
                      defaultValue={author_email}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 dark:bg-gray-700   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      defaultValue={category}
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
                    id="short_description"
                    name="short_description"
                    defaultValue={short_description}
                    className="block w-full rounded-md border-0 py-1.5   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    id="long_description"
                    name="long_description"
                    defaultValue={long_description}
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
              <Button outline gradientDuoTone="tealToLime" type="submit">Update</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
