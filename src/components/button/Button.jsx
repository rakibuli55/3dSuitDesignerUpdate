function Button({ type, text }) {


  return (
    <div className="flex items-center justify-center custom-btn">
      <p className={`bg-white rounded-[100px] text-base border border-[#99D3FF] duration-300 ease-in-out ${type === "large" ? "py-4 px-8 custom-xl:py-[10px] custom-xl:px-5 max-md:py-2 max-md:px-4 font-bold" : "py-3 px-6 max-md:py-2 max-md:px-4 whitespace-nowrap"} hover:bg-theme-color`}>{text}</p>
      <p className={`icon bg-white flex items-center justify-center rounded-full border border-[#99D3FF] ${type === "small" ? "p-[11px] max-md:p-[6px]" : "p-[14px] custom-xl:p-[8px] max-md:p-[6px]"} duration-300 ease-in-out hover:bg-theme-color`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M12.8551 9.99121L20.0087 9.99121L20.0087 17.1448"
            stroke="#26241E"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99133 20.0088L19.9085 10.0916"
            stroke="#26241E"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>
    </div>
  );
}

export default Button;
