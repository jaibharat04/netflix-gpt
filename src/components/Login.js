import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleSignInToggle = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute brightness-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="Netflix-background-image"
        />
      </div>
      <form className="my-24 rounded bg-opacity-75 w-5/12 absolute bg-black p-16 text-white mx-auto right-0 left-0  ">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className=" rounded p-4 my-3 mx-2 w-full bg-black  border"
        />}
        <input
          type="email"
          placeholder="Email or mobile number"
          className=" rounded p-4 my-3 mx-2 w-full bg-black  border"
        />
        <input
          type="password"
          placeholder="Password"
          className=" rounded p-4 my-3 mx-2 w-full bg-black border"
        />
        <button className="bg-red-600  w-full p-2 rounded my-4 mx-2">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p>
          <span className="text-gray-300">{isSignInForm ? "New to Netflix?" : "Already registered?"}</span>{" "}
          <span
            className="font-semibold cursor-pointer hover:border-b"
            onClick={handleSignInToggle}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
