import { useContext } from "react";
import facebookIcon from "../assets/images/Facebook.svg";
import instaIcon from "../assets/images/instagram.svg";
import pinterestIcon from "../assets/images/pinterest.svg";
import twitterIcon from "../assets/images/twitter.svg";
import SocialIcon from "../components/social/SocialIcon";
import { AuthContext } from "../context/index";

function Contact() {
  const { siteSettingData, socialMediaData } = useContext(AuthContext);

  return (
    <section className="pt-[220px] pb-[100px] min-h-screen custom-sm:min-h-[80vh] custom-xs:min-h-[80vh] custom-sm:pt-[130px] custom-sm:!pb-[50px] custom-xs:pt-[110px] custom-xs:pb-[20px]">
      <div className="container">
        <div className="inner-box">
          <h1 className="inner-heading-title">Contact Us</h1>
          <p>For all enquiries, please email using the link below:</p>
          <div className="flex items-center justify-center gap-1 text-base font-bold text-[#26241E]">
            Email:
            <a href={`mailto:${siteSettingData?.email}`} className="underline">
              {siteSettingData?.email}
            </a>
          </div>
          <p className="mt-8">Or keep up to date with us on social media:</p>
          <div className="flex items-center justify-center gap-3 mt-5">
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
                <div
                  key={item?.id}
                  className="flex items-center justify-center"
                >
                  <SocialIcon url={item?.profile_link}>
                    {iconSrc ? (
                      <img
                        className="w-7 h-7"
                        src={iconSrc}
                        alt={item?.social_media}
                      />
                    ) : null}
                  </SocialIcon>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
