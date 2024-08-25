import { Link } from "react-router-dom";
import { Post } from "../types";

interface ComponentProps {
  post: Post;
}
const FeaturedCardAlt: React.FC<ComponentProps> = ({ post }) => {
  return (
    <div className="h-[450px] sm:h-[600px] relative rounded-md overflow-hidden">
      <div className="w-full h-full absolute">
        <img
          className="w-full h-full object-cover"
          src={post.featuredImage}
          alt=""
        />
        <div className="w-max text-white bg-sky-600 mb-2 px-8 py-1 rounded-tl-md rounded-br-md fixed top-0">
          <i className="fa-regular fa-star"></i> Featured
        </div>
      </div>
      <div className="w-full h-full p-8 relative bg-gradient-to-b from-transparent to-black text-white flex flex-col justify-end translate-y-2 hover:translate-y-0 duration-500">
        <Link to={"/posts/" + post.postId}>
          <h3 className="text-4xl font-bold text-white mb-4">
            {post.postTitle.substring(0, 30)}{" "}
            {post.postTitle.length > 30 ? "..." : ""}
          </h3>
        </Link>
        <p className="mb-3 hidden lg:block">
          {post.postContent.substring(0, 160) + " ....."}
        </p>
        <Link to={"/posts/" + post.postId} className="text-sm text-blue-400">
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCardAlt;
