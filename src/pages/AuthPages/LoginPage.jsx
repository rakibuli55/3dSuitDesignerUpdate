import useLogin from "../../hooks/useLogin";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [isPass, setIspass] = useState(true);
  const [isChecked, setisChecked] = useState();
  const handleCheck = (e) => {
    setisChecked(e.target.checked);
  };
  const {login, isLoading} = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[35px] flex flex-col gap-y-4 h-[calc(100vh-107px)] items-center pt-20"
    >
      <div className="bg-white p-10 rounded-[20px]">
        <h2 className=" font-bold text-[28px] xl:text-[28px] uppercase leading-[125%] text-center text-[#1B1812] mb-2 custom-xl:mb-1">
          Log In
        </h2>
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <div className="flex flex-col gap-y-2  ">
            <div className="flex flex-col gap-y-3 lg:gap-y-6  ">
              {/* Email Input */}
              <div className="flex  items-start flex-col gap-y-2">
                <label
                  htmlFor="email"
                  className={`common-form-heading ${
                    errors.email ? "text-red-500" : ""
                  }`}
                >
                  Email
                </label>
                <input
                  placeholder={
                    errors.email ? errors.email.message : "Enter your email"
                  }
                  id="email"
                  type="email"
                  className={`form-input ${
                    errors.email ? "border-red-500 placeholder-red-500" : ""
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                      message: "Invalid email address",
                    },
                    onChange: () => clearErrors("email"),
                  })}
                />
              </div>
              {/* Password Input */}
              <div className="flex flex-col w-full relative items-start gap-y-2">
                <label
                  htmlFor="password"
                  className={`common-form-heading ${
                    errors.password ? "text-red-500" : ""
                  }`}
                >
                  Set a Password
                </label>
                <div className="relative w-full ">
                  <input
                    placeholder={
                      errors.password
                        ? errors.password.message
                        : "Enter your password"
                    }
                    type={isPass ? "password" : "text"}
                    className={`form-input  ${
                      errors.password
                        ? "border-red-500 placeholder-red-500"
                        : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                  />
                  {isPass ? (
                    <FaEyeSlash
                      onClick={() => setIspass(!isPass)}
                      className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setIspass(!isPass)}
                      className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end cursor-pointer ">
              <NavLink
                to={"/forgot-password"}
                className=" max-w-[250px] md:max-w-[300px] lg:max-w-[340px] underline text-base  text-[#99D3FF] cursor-pointer  "
              >
                Forgot password
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <button
              type="submit"
              className={`w-full rounded-[25px] text-[#1B1812] border-[1px] border-solid bg-[#99D3FF] hover:border-[#99D3FF] duration-300 ease-in-out py-2 lg:py-3 px-2 lg:px-4 font-bold hover:bg-transparent border-transparent  text-base lg:text-lg ${isLoading ? 'opacity-40 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
            <div className="flex justify-center w-full">
              <p className=" text-base lg:text-lg  font-normal text-center  ">
                Already have a account ?{" "}
                <NavLink
                  to={"/signup"}
                  className={"text-[#99D3FF] font-semibold "}
                >
                  Signup
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
