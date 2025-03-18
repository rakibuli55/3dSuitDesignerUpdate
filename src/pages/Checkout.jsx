import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/button/Button";
import SizeGuidePopup from "../components/common/SizeGuidePopup";
import { CustomizationContext } from "../context/CustomizationContext";
import { ColorContext } from "../context/index";
import useAxiosSecure from "../hooks/useAxiosSecure";

function Checkout() {
  const { totalPrice } = useContext(CustomizationContext);
  const totalCost = totalPrice + 30;
  const { getFinalObj } = useContext(ColorContext);
  const axiosSecure = useAxiosSecure();
  const finalProducts = getFinalObj();
  const [isLoading, setIsLoading] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data.size) {
      return;
    }
    finalProducts.size = data.size || null;
    const authToken = localStorage.getItem("authToken");
    if (authToken && data.size) {
      setIsLoading(true);
      try {
        const response = await axiosSecure.post(
          "/stripe/checkout",
          finalProducts
        );
        if (response.status === 200) {
          const paymentUrl = response?.data?.data;
          setTimeout(() => {
            window.open(paymentUrl, "_blank");
          }, 700);
          toast.success(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    } else if (!authToken) {
      toast.error("Please login first for place an order");
    }
  };


  return (
    <section className="checkout-section pt-[200px] custom-md:pt-[150px] custom-sm:pt-[120px] custom-xs:pt-[100px] min-h-[88vh] max-md:min-h-full custom-md:pb-20 custom-sm:pb-[60px] custom-xs:pb-10">
      <div className="w-[85%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex max-md:flex-col items-end gap-10">
            {/* order Summary  */}
            <div className="w-1/2 max-md:w-full order-summary">
              <h2 className="text-[18px] font-bold text-heading-color mb-6 custom-xs:mb-4">
                Order Summary
              </h2>

              <div className="p-6 custom-xs:p-5 bg-white rounded-[12px]">
                <ul>
                  <li>
                    <p>Suit Package</p>
                    <p>${totalPrice}</p>
                  </li>
                  <li>
                    <p>Sub Total:</p>
                    <p>${totalPrice}</p>
                  </li>
                  <li>
                    <p>Shipping:</p>
                    <p>$30.00</p>
                  </li>
                  <li className="border-t border-[rgba(0,0,0,0.08)]">
                    <p className="font-semibold">Total:</p>
                    <p className="font-semibold">${totalCost}</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* size masurment  */}
            <div className="size--mesurment max-md:w-full">
              <div>
                <p
                  className="text-right mb-5 cursor-pointer hover:underline"
                  onClick={(e) => setIsSizeGuideOpen(!isSizeGuideOpen)}
                >
                  Size Guide
                </p>
              </div>
              <div className="grid grid-cols-4 items-center gap-5 max-md:w-fit">
                <div>
                  <input
                    type="radio"
                    id="xs"
                    name="size"
                    value="xs"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="xs">xs</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="s"
                    name="size"
                    value="s"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="s">s</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="m"
                    name="size"
                    value="m"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="m">m</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="l"
                    name="size"
                    value="l"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="l">l</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="xl"
                    name="size"
                    value="xl"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="xl">xl</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="xxl"
                    name="size"
                    value="xxl"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="xxl">xxl</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="xxxl"
                    name="size"
                    value="xxxl"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="xxxl">xxxl</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="4xl"
                    name="size"
                    value="4xl"
                    {...register("size", { required: "Please choose a size" })}
                  />
                  <label htmlFor="4xl">4xl</label>
                </div>
              </div>
              {errors.size && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.size.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`${
              isLoading
                ? "opacity-50 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }font-semibold cursor-pointer flex justify-end mt-10`}
          >
            <Button
              type="small"
              text={isLoading ? "Trying to connect..." : "Proceed to payment"}
            />
          </button>
        </form>
      </div>
      <SizeGuidePopup
        isSizeGuideOpen={isSizeGuideOpen}
        setIsSizeGuideOpen={setIsSizeGuideOpen}
      />
      <ToastContainer />
    </section>
  );
}

export default Checkout;
