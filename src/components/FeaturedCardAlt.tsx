import { Link } from "react-router-dom";
import { getAuthorById, getPostById } from "../utils/GetData";

interface ComponentProps {
  id: number;
}
const FeaturedCardAlt: React.FC<ComponentProps> = ({ id }) => {
  const thePost = getPostById(id);
  let theAuthor = undefined;
  if (thePost) {
    theAuthor = getAuthorById(thePost.author);
  }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="h-[450px] sm:h-[600px] relative rounded-md overflow-hidden">
      <div className="w-full h-full absolute">
        <img
          className="w-full h-full object-cover"
          src={thePost.featuredImage}
          alt=""
        />
        <div className="w-max text-white bg-sky-600 mb-2 px-8 py-1 fixed top-3">
          <i className="fa-regular fa-star"></i> Featured
        </div>
      </div>
      <div className="w-full h-full p-8 relative bg-gradient-to-b from-transparent to-black text-white flex flex-col justify-end translate-y-2 hover:translate-y-0 duration-500">
        <Link to={"/posts/" + thePost.postId}>
          <h3 className="text-4xl font-bold text-white mb-4">
            {thePost.postTitle}
          </h3>
        </Link>
        <p className="mb-3 hidden lg:block">
          {thePost.postContent.substring(0, 160) + " ....."}
        </p>
        <Link to={"/posts/" + thePost.postId} className="text-sm text-blue-400">
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCardAlt;
