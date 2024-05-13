import { useEffect, useState } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/featured`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "_id",
      label: "Serial Number",
      options: {
        customBodyRender: (value, tableMeta) => {
          return <p className="text-center">#{tableMeta.rowIndex + 1}</p>;
        },
        filter: false,
      },
    },
    {
      name: "title",
    },
    {
      name: "author_name",
      label: "Blog owner",
      options: {
        customBodyRender: (value) => <p className="text-center">{value}</p>,
      },
    },
    {
      name: "author_image",
      label: "Blog Owner Profile Picture",
      options: {
        customBodyRender: (value) => (
          <img className="w-10 h-10 rounded-full mx-auto" src={value} alt="" />
        ),
        filter: false,
      },
    },
    {
      name: "_id",
      label: "Details",
      options: {
        customBodyRender: (value) => (
          <Link to={`/blog-details/${value}`}>
            <Button outline gradientDuoTone="tealToLime">
              View Details
            </Button>
          </Link>
        ),
        filter: false,
      },
    },
  ];
  const options = {
    selectableRows: false,
    rowsPerPage: 10,
    rowsPerPageOptions: false,
    pagination: false,
    download: false,
    print:false
  };

  return (
    <>
      <div className="my-12 max-w-7xl mx-auto ">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.4, stiffness: 120 }}
          className="md:pl-8 md:text-6xl text-4xl font-thin md:text-start text-center my-4"
        >
          All Blogs
        </motion.h1>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
          className="overflow-x-auto drop-shadow-xl rounded-lg"
        >
          <MUIDataTable data={blogs} columns={columns} options={options} />
        </motion.div>
      </div>
    </>
  );
};

export default FeaturedBlogs;
