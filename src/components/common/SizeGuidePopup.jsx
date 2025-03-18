import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { api } from "../../Api/index";

const SizeGuidePopup = ({ isSizeGuideOpen, setIsSizeGuideOpen }) => {
  const [activeTab, setActiveTab] = useState("in");
  const { data: sizedata, isLoading: sizeDataLoading } = useQuery({
    queryKey: ["size-data"],
    queryFn: async () => {
      const res = await api.get("/size");
      return res?.data?.data;
    },
  });
  return (
    <div className={`h-full w-full bg-[rgba(0,0,0,0.3)] mx-auto fixed top-0 left-0 z-20 flex items-center justify-center duration-200 ease-in-out ${isSizeGuideOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="w-[800px] bg-white rounded-[8px] p-10 relative max-md:w-[95%] custom-sm:p-5 custom-xs:p-4">
        <ul className="flex items-center gap-3">
          <li
            onClick={() => setActiveTab("in")}
            className={` border-b-[3px] ${
              activeTab === "in"
                ? "border-heading-color"
                : "border-transparent duration-200 ease-in-out cursor-pointer"
            }`}
          >
            IN
          </li>
          <li
            onClick={() => setActiveTab("cm")}
            className={` border-b-[3px] ${
              activeTab === "cm"
                ? "border-heading-color"
                : "border-transparent duration-200 ease-in-out cursor-pointer"
            }`}
          >
            CM
          </li>
        </ul>
        <div className="max-h-[424px] overflow-hidden mt-5">
          {activeTab === "in" ? (
            <img
              className="w-full h-full"
              src={`${import.meta.env.VITE_SERVER_URL}/${sizedata?.in_image}`}
              alt=""
            />
          ) : (
            <img
              className="w-full h-full"
              src={`${import.meta.env.VITE_SERVER_URL}/${sizedata?.cm_image}`}
              alt=""
            />
          )}
        </div>
        <p className="w-8 h-8 flex items-center justify-center border rounded-full absolute top-5 right-5 text-[22px] cursor-pointer custom-xs:w-7 custom-xs:h-7 custom-xs:top-3 custom-xs:right-3 custom-xs:text-base" onClick={() => setIsSizeGuideOpen(false)}>
          <IoCloseOutline />
        </p>
      </div>
    </div>
  );
};

export default SizeGuidePopup;
