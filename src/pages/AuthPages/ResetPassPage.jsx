import useResetPassword from "../../hooks/useResetPassword";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ResetPassPage = () => {
  const [isPass, setIspass] = useState(true);
  const [isConfirmPass, setIsConfirmpass] = useState(true);
  const [isChecked, setisChecked] = useState();
  const user_email = localStorage.getItem('userEmail');
  const {resetPassword, isLoading} = useResetPassword()
  const handleCheck = (e) => {
    setisChecked(e.target.checked);
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm({
    defaultValues:{
      email:user_email,
    }
  });

  const onSubmit = (data) => {
    resetPassword(data)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[35px] flex flex-col gap-y-4 h-[calc(100vh-107px)] items-center pt-20"
    >
      <div className="bg-white p-10 rounded-[20px]">
        <h2 className=" font-bold text-[28px] xl:text-[28px] text-center mb-5 uppercase leading-[125%]  text-[#1B1812] custom-xl:mb-1">
          Reset password
        </h2>
        <div className="flex flex-col gap-y-4 lg:gap-y-6">
          <div className="flex flex-col gap-y-2  ">
            <div className="flex flex-col gap-y-3 lg:gap-y-6  ">
              <input type="email" defaultValue={user_email} name="email" {...register('email')} />
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
              {/* confirm password */}
              <div className="flex flex-col w-full relative items-start gap-y-2">
                <label
                  htmlFor="password_confirmation"
                  className={`common-form-heading ${
                    errors.password_confirmation ? "text-red-500" : ""
                  }`}
                >
                  Confirm Password
                </label>
                <div className="relative w-full ">
                  <input
                    placeholder={
                      errors.password_confirmation
                        ? errors.password_confirmation.message
                        : "Confirm your password"
                    }
                    id="password_confirmation"
                    type={isConfirmPass ? "password" : "text"}
                    className={`form-input ${
                      errors.password_confirmation
                        ? "border-red-500 placeholder-red-500"
                        : ""
                    }`}
                    {...register("password_confirmation", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === watch('password') || "Passwords do not match",
                    })}
                  />
                  {isConfirmPass ? (
                    <FaEyeSlash
                      onClick={() => setIsConfirmpass(!isConfirmPass)}
                      className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setIsConfirmpass(!isConfirmPass)}
                      className="absolute top-1/2 h-5 w-5 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <button
              type="submit"
              className={`w-full rounded-[25px] text-[#1B1812] border-[1px] border-solid bg-[#99D3FF] hover:border-[#99D3FF] duration-300 ease-in-out py-2 lg:py-3 px-2 lg:px-4 font-bold hover:bg-transparent border-transparent  text-base lg:text-lg ${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
            >
              {isLoading ? 'Reseting...' : 'Reset'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResetPassPage;
