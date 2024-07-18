import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
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
    <div className="rounded-lg shadow-lg shadow-slate-200 relative overflow-hidden">
      <div className="absolute">
        <img
          className="w-full h-[500px] object-cover"
          src={thePost.featuredImage}
          alt=""
        />
      </div>
      <div className="w-full h-[500px] p-8 relative bg-gradient-to-b from-transparent to-black text-white flex flex-col justify-end">
        <div className="w-max bg-sky-600 mb-2 px-4 py-1 absolute top-16 -left-11 -rotate-90">
          <i className="fa-regular fa-star"></i> Featured
        </div>
        <Link to={"/posts/" + thePost.postId}>
          <h3 className="text-4xl font-bold text-white mb-4">
            {thePost.postTitle}
          </h3>
        </Link>
        <p className="mb-3">
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
