import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import { useContext } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import { ProductContext } from "../context/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Checkout() {
  const { totalPrice } = useContext(CustomizationContext);
  const totalCost = totalPrice + 30;
  const { selectedProducts } = useContext(ProductContext);

  const handleOpenPopup = async () => {
    try {
      const response = await axios.post(
        "https://server.3dsuitdesigner.com/create-payment-intent",
        {
          products: selectedProducts,
        }
      );

      if (response.status === 200) {
        const { payment_url } = response.data;
        window.open(payment_url, '_blank');
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="checkout-section pt-[200px] custom-md:pt-[150px] custom-sm:pt-[120px] custom-xs:pt-[100px] min-h-[88vh] max-md:min-h-full custom-md:pb-20 custom-sm:pb-[60px] custom-xs:pb-10">
      <div className="w-[85%] mx-auto">
        <div className="flex max-md:flex-col items-start justify-center gap-6">
          
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
        </div>
        <Link
          to={"/checkout"}
          className="font-semibold cursor-pointer flex justify-end mt-10"
          onClick={handleOpenPopup}
        >
          <Button type="small" text="Proceed to Payment" />
        </Link>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Checkout;
