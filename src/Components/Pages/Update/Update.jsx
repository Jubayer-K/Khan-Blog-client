import { useLoaderData } from "react-router-dom";

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
    return (
        <div>
            This is {title} update page

        </div>
    );
};

export default Update;