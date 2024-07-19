import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
import { getAuthorById, getPostById } from "../utils/GetData";

interface ComponentProps {
  id: number;
}
const CardAlt: React.FC<ComponentProps> = ({ id }) => {
  const thePost = getPostById(id);
  let theAuthor = undefined;
  if (thePost) {
    theAuthor = getAuthorById(thePost.author);
  }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="rounded-md overflow-hidden border-b-2 border-b-sky-400 shadow-lg shadow-slate-200">
      <img
        className="w-full h-60 object-cover"
        src={thePost.featuredImage}
        alt=""
      />
      <div className="flex gap-6 w-full bg-sky-500 text-white px-4 py-2">
        <p>
          <i className="fa-regular fa-heart"></i> 999k{" "}
          {/* <span className="hidden lg:block">likes</span> */}
        </p>
        <p>
          <i className="fa-regular fa-comment"></i> 999k{" "}
          {/* <span className="hidden lg:block">comments</span> */}
        </p>
        <p>
          <i className="fa-regular fa-share-from-square"></i> 999{" "}
          {/* <span className="hidden lg:block">shares</span> */}
        </p>
      </div>
      <div className="p-4 pb-6">
        <Link to={"/posts/" + thePost.postId}>
          <HeadingThree heading={thePost.postTitle} />
        </Link>
        <p className="mb-3 hidden lg:block">
          {thePost.postContent.substring(0, 100) + " ....."}
        </p>
        <Link to={"/posts/" + thePost.postId} className="text-sm text-blue-400">
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default CardAlt;
