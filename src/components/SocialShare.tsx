import { Link } from "react-router-dom";
import ShareIcon from "./ul/ShareIcon";

const SocialShare = () => {
  return (
    <div className="flex gap-4 items-center my-6">
      Share:
      <Link to="">
        <ShareIcon icon={<i className="fa-brands fa-facebook-f"></i>} />
      </Link>
      <Link to="">
        <ShareIcon icon={<i className="fa-brands fa-twitter"></i>} />
      </Link>
      <Link to="">
        <ShareIcon icon={<i className="fa-brands fa-linkedin-in"></i>} />
      </Link>
    </div>
  );
};
export default SocialShare;
