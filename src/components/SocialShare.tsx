import { Link } from "react-router-dom";
import ShareIcon from "./ul/ShareIcon";

const SocialShare = () => {
  const link =
    "https://www.setopati.com/literature/333543?fbclid=IwZXh0bgNhZW0CMTEAAR1aWNEOStOBdaq6cgoMqyfqGyoytweHvjjOhUr66MRqdvgFzxjJB6JI6P0_aem_3HyPBOT_ZYa-uB2NWSd6vw";
  const message = "Sharing the article";
  const fbShareLink = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
  const twitterShareLink = `https://www.twitter.com/share?&url=${link}&text=${message}&hashtags=javascipt,typescript,tailwind,web-development`;
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
