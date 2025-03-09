import { useQuery } from "@tanstack/react-query";
import gsap from "gsap";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { api } from "../Api/index";
import facebookIcon from "../assets/images/Facebook.svg";
import instaIcon from "../assets/images/instagram.svg";
import pinterestIcon from "../assets/images/pinterest.svg";
import twitterIcon from "../assets/images/twitter.svg";
import SocialIcon from "../components/social/SocialIcon";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      ".f-menu li",
      { y: 10, filter: "blur(5px)", opacity: 0 },
      {
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.2,
        opacity: 1,
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".f-social div",
      { y: 10, filter: "blur(5px)", opacity: 0 },
      {
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.2,
        opacity: 1,
        stagger: 0.2,
      }
    );
  }, []);

  const { data: socialMediaData, isLoading: socialMediaLoading } = useQuery({
    queryKey: ["socialData"],
    queryFn: async () => {
      const response = await api.get("/social-media");
      return response?.data?.data;
    },
  });


  return (
    <footer
      className={`${
        location.pathname == "/"
          ? "fixed bottom-0 custom-lg:relative max-md:relative custom-lg:py-5 max-md:py-5"
          : ""
      } py-10 z-10 custom-xs:mt-6 w-full`}
    >
      <div className="container">
        <div className="flex items-center justify-between custom-sm:flex-col custom-xs:flex-col">
          {/* menu  */}
          <ul className="f-menu flex items-center gap-3 custom-xs:gap-1 text-base text-[#1B1812] custom-sm:order-2 custom-xs:order-2 custom-xs:flex-col custom-xs:mt-4">
            <li>
              <NavLink
                to={"/about"}
                className="duration-300 ease-in-out hover:text-theme-color hover:underline custom-xs:text-sm f-nav-link"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="duration-300 ease-in-out hover:text-theme-color hover:underline custom-xs:text-sm f-nav-link"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/policy"}
                className="duration-300 ease-in-out hover:text-theme-color hover:underline custom-xs:text-sm f-nav-link"
              >
                Terms & conditions
              </NavLink>
            </li>
          </ul>
          {/* social icons  */}
          <div className="f-social flex items-center gap-2">
          {socialMediaData?.map((item) => {
              let iconSrc;

              if (item?.social_media === "facebook") {
                iconSrc = facebookIcon;
              } else if (item?.social_media === "twitter") {
                iconSrc = twitterIcon;
              } else if (item?.social_media === "instagram") {
                iconSrc = instaIcon;
              } else if (item?.social_media === "pinterest") {
                iconSrc = pinterestIcon;
              }

              return (
                <div key={item?.id}>
                  <SocialIcon url={item?.profile_link}>
                    {iconSrc ? <img className="w-5 h-5" src={iconSrc} alt={item?.social_media} /> : null}
                  </SocialIcon>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
