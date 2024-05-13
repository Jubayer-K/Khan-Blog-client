import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TwitterAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import { AuthContext } from "../../../Providers/AuthProviders";
import app from "../../../firebase/firebase.config";
import animation from "../../../assets/login.json";
import { Button } from "flowbite-react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import LoadingSkeleton from "../../Shared/LoadingSkeleton/LoadingSkeleton";
import { motion } from "framer-motion";
import axios from "axios";

const Login = () => {
  const successToast = () => toast.success("User Logged In Successfully");
  const errorToast = () => toast.error("User log in Unsuccessful !");
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passErrorToast = (toastText) => toast.error(toastText);
  const { logIn, user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  if (user) {
    return;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      passErrorToast("Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      passErrorToast("Must have a Capital letter in the password");
      return;
    } else if (!/\d/.test(password)) {
      passErrorToast("Must have a Numeric character in the password");
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      passErrorToast("Must have a Special character in the password");
      return;
    }

    logIn(email, password)
      .then(async () => {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: provider?.user?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
        navigate(location?.state ? location.state : "/login");
        setSuccess("User Logged in Successfully");
        successToast();
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const xProvider = new TwitterAuthProvider();

  const handleGoogleSignIn = () => {
    setRegisterError("");
    setSuccess("");
    signInWithPopup(auth, provider)
      .then(async () => {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: provider?.user?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
        successToast();
        setSuccess("User Logged In Successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };

  const handleTwitterSignIn = () => {
    setRegisterError("");
    setSuccess("");
    signInWithPopup(auth, xProvider)
      .then(async () => {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: provider?.user?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
        successToast();
        setSuccess("User Logged In Successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };

  return (
    <>
      <Helmet>
        <title>Khan Blog | Log in</title>
      </Helmet>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
        className="flex justify-center items-center text-center"
      >
        {loading ? (
          <LoadingSkeleton></LoadingSkeleton>
        ) : (
          <div className=" flex flex-col lg:flex-row items-center mx-auto my-12">
            <div className="shadow-2xl mx-auto flex flex-col md:flex-row rounded-xl dark:shadow-gray-600 md:w-2/3">
              <div className="w-full">
                <img className="h-full object-cover" src="/login.png" alt="" />
              </div>
              <div className="w-full">
                <div className="min-h-60  bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center text-center">
                  <Lottie
                    className="lg:w-2/3 hover:animate-spin cursor-pointer w-64 drop-shadow-2xl"
                    animationData={animation}
                    loop={true}
                  ></Lottie>
                  <h2 className="text-3xl font-thin mb-4 font-karla my-4">
                    Login
                  </h2>
                </div>
                <form className="md:max-w-lg mx-auto" onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-start text-sm font-semibold leading-6"
                    >
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
                  <div className="mb-4 relative">
                    <label
                      htmlFor="password"
                      className="block text-start text-sm font-semibold leading-6"
                    >
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
                    Don&apos;t have an account?{" "}
                    <Link
                      to={"/register"}
                      className="text-cyan-600 dark:text-lime-200 hover:underline"
                    >
                      Register
                    </Link>
                  </p>
                  <div className="flex justify-center items-center  ">
                    <Button
                      outline
                      gradientDuoTone="greenToBlue"
                      type="submit"
                      className="w-1/2 font-roboto font-bold"
                    >
                      Log in
                    </Button>
                  </div>
                </form>
                <div className="relative flex pt-5 items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="flex-shrink mx-4 text-gray-400">Or</span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="flex flex-col gap-4 pt-5 pb-8 ">
                  <Button
                    gradientDuoTone="redToYellow"
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="md:w-1/2 mx-auto"
                  >
                    <span className="flex items-center gap-2">
                      Log in with Google<FaGoogle></FaGoogle>
                    </span>
                  </Button>
                  <Button
                    gradientDuoTone="purpleToBlue"
                    onClick={handleTwitterSignIn}
                    type="button"
                    className="md:w-1/2 mx-auto"
                  >
                    <span className="flex items-center gap-2">
                      Log in with Twitter<FaTwitter></FaTwitter>
                    </span>
                  </Button>
                </div>
                {registerError && (
                  <p className="my-2 text-sm text-red-800">{registerError}</p>
                )}
                {success && (
                  <p className="my-2 text-sm text-green-700">{success}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Login;
