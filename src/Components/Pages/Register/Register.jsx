import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import animation from "../../../assets/registeranimation2.json";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Button } from "flowbite-react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Register = () => {
  const successToast = () => toast.success("User created Successfully");
  const errorToast = () => toast.error("User creation Unsuccessful !");
  const passErrorToast = (toastText) => toast.error(toastText);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  if (user || loading) {
    return;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password);
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      passErrorToast("Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      passErrorToast("Must have an Uppercase letter in the password");
      return;
    } else if (!/\d/.test(password)) {
      passErrorToast("Must have a Numeric character in the password");
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      passErrorToast("Must have a Special character in the password");
      return;
    }

    createUser(email, password, name, photoURL)
      .then(() => {
        setSuccess("User created Successfully");
        successToast();
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User creation Unsuccessful !");
      });
  };
  return (
    <>
      <Helmet>
        <title>Khan Blog | Register</title>
      </Helmet>
      <div>
        <div className="p-8 my-12 shadow-2xl rounded-xl dark:shadow-gray-600 md:w-2/3 w-96 mx-auto">
          <div className="min-h-60 flex flex-col justify-center items-center text-center">
            <Lottie
              className="lg:w-2/3 w-64 drop-shadow-2xl"
              animationData={animation}
              loop={false}
            ></Lottie>
            <h2 className="text-3xl font-thin mb-4 font-karla">
              Create New Account
            </h2>
          </div>

          <form className="md:max-w-lg mx-auto" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-sm font-semibold leading-6">
                Photo URL
              </label>
              <input
                required
                type="text"
                id="photoURL"
                name="photoURL"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-semibold leading-6">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6"
              />
              <h1
                className="cursor-pointer text-2xl absolute right-5 bottom-2 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <LuEyeOff></LuEyeOff> : <LuEye></LuEye>}
              </h1>
            </div>
            <p className="my-4 text-base text-gray-700 dark:text-gray-200">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-lime-400 dark:text-lime-200 hover:underline"
              >
                Login
              </Link>
            </p>
            <div className="flex justify-center items-center  ">
              <Button
                outline
                gradientDuoTone="tealToLime"
                type="submit"
                className="w-1/2 font-roboto font-bold"
              >
                Register
              </Button>
            </div>
          </form>
          {registerError && (
            <p className="my-2 text-sm text-red-800">{registerError}</p>
          )}
          {success && <p className="my-2 text-sm text-green-700">{success}</p>}
        </div>
      </div>
    </>
  );
};

export default Register;
