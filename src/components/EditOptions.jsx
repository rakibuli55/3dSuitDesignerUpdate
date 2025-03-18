
import jacketImg from "../assets/images/jacket.svg";
import shirtImg from "../assets/images/shirt.svg";
import tieImg from "../assets/images/tie.svg";
import waistcoatImg from "../assets/images/waistcoat.svg";
import pantImg from "../assets/images/pant.svg";
import shoeImg from "../assets/images/shoe.svg";
import beltPocketImg from "../assets/images/belt-pocket.svg";
import resetImg from "../assets/images/reset.svg";
import { useContext, useEffect } from "react";
import { CustomizationContext } from "../context/CustomizationContext";
import gsap from "gsap";
import { ColorContext } from "../context/index";

function EditOptions() {
    const {handleSidebar} = useContext(CustomizationContext)
    const {handleResetEdit}  = useContext(ColorContext)


    useEffect(() => {
      gsap.fromTo(
        '.edit-option',
        { y: 10, filter: "blur(5px)", opacity:0 },
        { y: 0, filter: "blur(0px)", duration: 1, delay:0.2,  opacity:1, stagger:0.1 }
      )
    }, [])

  return (
    <div>
      <div className="flex flex-col gap-[20px] custom-xl:gap-[14px] absolute right-[100px] custom-xl:right-[60px] custom-lg:right-[40px] top-1/2 translate-y-[-50%] max-md:right-[30px] custom-xs:!right-4">
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("jacket")}
          >
            <img src={jacketImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="jacketImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("shirt")}
          >
            <img src={shirtImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="shirtImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("tie")}
          >
            <img src={tieImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="tieImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("waistcoat")}
          >
            <img src={waistcoatImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="waistcoatImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("pants")}
          >
            <img src={pantImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="pantImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("shoe")}
          >
            <img src={shoeImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="shoeImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div
            className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full"
            onClick={() => handleSidebar("belt")}
          >
            <img src={beltPocketImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="beltPocketImg" />
          </div>
        </div>
        {/* options  */}
        <div className="edit-option">
          <div className="h-[70px] w-[70px] max-md:h-[60px] max-md:w-[60px] custom-sm:!w-[50px] custom-sm:!h-[50px] custom-xs:!w-12 custom-xs:!h-12 cursor-pointer flex items-center justify-center bg-white rounded-full" onClick={handleResetEdit}>
            <img src={resetImg} className="custom-xl:h-12 custom-xl:w-12 max-md:w-10 max-md-h-10" alt="resetImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOptions;
