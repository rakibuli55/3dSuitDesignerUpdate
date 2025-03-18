import { Link } from "react-router-dom";
import Button from "../components/button/Button";
import ModelImg from "../assets/images/model.png";
import { useEffect } from "react";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { y: 30, filter: "blur(10px)", skewX: 20, opacity:0 },
      { y: 0, filter: "blur(0px)", duration: 1,  skewX: 0, opacity:1 }
    );
    gsap.fromTo(
      ".sub-heading",
      { y: 20, filter: "blur(10px)", skewX: 20, opacity:0 },
      { y: 0, filter: "blur(0px)", duration: 1,  skewX: 0, opacity:1 }
    );
    gsap.fromTo(
      ".start-button",
      { y: 20, filter: "blur(10px)", skewX: 20, opacity:0 },
      { y: 0, filter: "blur(0px)", duration: 1,  skewX: 0, delay:0.2, opacity:1 }
    );
    gsap.fromTo(
      ".model-img",
      { y: 50, filter: "blur(5px)", opacity:0 },
      { y: 0, filter: "blur(0px)", duration: 1, delay:0.2,  opacity:1 }
    );
  }, []);
  
  return (
    <section className="pt-[60px] custom-xl:pt-[40px] relative z-[1] h-screen custom-2xl:min-h-screen max-md:h-auto overflow-hidden custom-2xl:overflow-y-auto custom-xl:overflow-y-auto custom-md:pt-[130px] custom-sm:pt-[100px] custom-xs:pt-[90px]">
      <div className="container">
        <div className="text-center">
            <h1 className="heading text-[60px] custom-2xl:text-[50px] custom-xl:text-[45px] custom-lg:text-[36px]  max-md:text-[36px] max-md:leading-normal font-bold uppercase leading-[87px] custom-lg:leading-normal text-[#1B1812] mb-2 custom-xl:mb-1 custom-sm:!text-[30px] custom-xs:!text-[26px]">
              Draw It <span className="stroke-text">Yourself</span>
            </h1>
          <p className="sub-heading text-[18px] font-bold text-[#060605] custom-xs:text-base">
            Get creative by customizing our new suit.
          </p>
          <p className="sub-heading text-base text-[#26241E] w-[607px] max-md:w-[80%] custom-xs:!w-[90%] mx-auto mt-3">
            We are here to bring your idea into the table and create the best
            suite that is picked by your own hands.
          </p>
          <div className="mt-6 max-md:mt-4">
            <Link to={"/customize"} className="start-button inline-block">
              <Button type="large" text="Start Design" />
            </Link>
          </div>
          {/* model img */}
          <div className="text-center relative">
            <img className="h-[530px] custom-lg:[490px] max-md:h-[500px] model-img mx-auto mt-9 custom-xs:mt-6 custom-lg:mb-10" src={ModelImg} alt="ModelImg" />
            <div className="w-[328px] h-[49px] rounded-[328px] custom-lg:hidden max-md:hidden bg-[rgba(0,0,0,0.60)] blur-[45px] mx-auto relative z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
