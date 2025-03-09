import CheckIcon from "../assets/images/successfull.png";

function PaymentSuccess() {
  return (
    <section className="min-h-screen pt-[150px]  pb-[100px]">
      <div>
        <div className="w-[600px] max-md:w-[90%] mx-auto p-10 custom-xs:p-5 custom-xs:py-10 rounded-[16px] shadow-lg bg-white text-center">
          <img className="w-[120px] h-[120px] custom-xs:w-[100px] custom-xs:h-[100px] mx-auto rounded-full" src={CheckIcon} alt="" />
          <div className="mt-5">
            <h1 className="text-[30px] custom-sm:text-[24px] custom-xs:text-[24px] font-semibold">
              Your payment was successfull
            </h1>
            <p className="text-[18px] w-[80%] custom-xs:text-base mx-auto mt-2">
              Thank you for your payment. We will be in contact with more
              details shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentSuccess;
