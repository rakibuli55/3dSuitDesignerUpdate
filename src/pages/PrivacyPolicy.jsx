import { AuthContext } from "../context/index";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

function PrivacyPolicy() {
  const {dynamicPageData} = useContext(AuthContext);
  return (
    <section className="pt-[220px] pb-[100px] min-h-screen custom-sm:h-auto custom-xs:h-auto custom-sm:pt-[130px] custom-sm:!pb-[50px] custom-xs:pt-[110px] custom-xs:pb-[20px]">
      <div className="container">
        <div className="inner-box privacy-box w-[1140px]">
          <h1 className="inner-heading-title">{dynamicPageData?.[1]?.page_title}</h1>
          <div className="dynamic-content-box" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(dynamicPageData?.[1]?.page_content)}}></div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
