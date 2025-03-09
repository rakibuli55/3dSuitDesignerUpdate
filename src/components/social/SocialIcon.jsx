import { Link } from "react-router-dom";

function SocialIcon({ children, url }) {
  return (
    <Link to={url} className="inline-block">
      {children}
    </Link>
  );
}

export default SocialIcon;
