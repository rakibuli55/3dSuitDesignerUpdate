
import { Link } from "react-router-dom";
import facebookIcon from "../assets/images/Facebook.svg";
import twitterIcon from "../assets/images/twitter.svg";
import instaIcon from "../assets/images/instagram.svg";
import pinterestIcon from "../assets/images/pinterest.svg";

function Contact() {
  return (
    <section className="pt-[220px] pb-[100px] min-h-screen custom-sm:min-h-[80vh] custom-xs:min-h-[80vh] custom-sm:pt-[130px] custom-sm:!pb-[50px] custom-xs:pt-[110px] custom-xs:pb-[20px]">
      <div className="container">
        <div className="inner-box">
          <h1 className="inner-heading-title">Contact Us</h1>
          <p>For all enquiries, please email using the link below:</p>
          <div className="flex items-center justify-center gap-1 text-base font-bold text-[#26241E]">
            Email:
            <a href="mailto:3DSuitDesigner@gmail.com" className="underline">
              3DSuitDesigner@gmail.com
            </a>
          </div>
          <div className="mt-8">
              <p>Or keep up to date with us on social media:</p>
              <ul className="flex justify-center items-center gap-2 mt-5">
                <li>
                  <Link to="/">
                    <img className="w-8 h-8" src={facebookIcon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img className="w-8 h-8" src={twitterIcon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img className="w-8 h-8" src={instaIcon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img className="w-8 h-8" src={pinterestIcon} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
