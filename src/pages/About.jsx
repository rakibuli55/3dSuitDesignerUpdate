
import { AuthContext } from "../context/index";
import DOMPurify from "dompurify";
import { useContext } from "react";

function About() {
  const {dynamicPageData} = useContext(AuthContext);
  return (
    <section className="pt-[220px] pb-[100px] min-h-screen custom-xs:h-auto custom-sm:pt-[130px] custom-sm:!pb-[50px] custom-xs:pt-[110px] custom-xs:pb-[20px]">
      <div className="container">
        <div className="inner-box">
          <h1 className="inner-heading-title">
            {dynamicPageData?.[0]?.page_title}
          </h1>
          <div className="about-content dynamic-content-box" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(dynamicPageData?.[0]?.page_content)}}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
