import { Link, useLocation } from "react-router-dom";
import ShareIcon from "./ul/ShareIcon";

const SocialShare = () => {
  const link = "http://localhost:5173" + useLocation().pathname;
  console.log(link);
  // const link = "https://aeliya.com.np/";
  const message = "Sharing the article";
  const hashtags = "javascipt,typescript,tailwind,web-development";
  const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
  const twitterShareLink = `https://www.twitter.com/share?&url=${link}&text=${message}&hashtags=${hashtags}`;
  const linkedinShareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
  return (
    <div className="flex gap-4 items-center my-6">
      Share:
      <Link to={fbShareLink} target="_blank">
        <ShareIcon icon={<i className="fa-brands fa-facebook-f"></i>} />
      </Link>
      <Link to={twitterShareLink} target="_blank">
        <ShareIcon icon={<i className="fa-brands fa-twitter"></i>} />
      </Link>
      <Link to={linkedinShareLink} target="_blank">
        <ShareIcon icon={<i className="fa-brands fa-linkedin-in"></i>} />
      </Link>
    </div>
  );
};
export default SocialShare;
