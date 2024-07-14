import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
import { getAuthorById, getPostById } from "../utils/GetData";

interface ComponentProps {
  id: number;
}
const FeaturedCard: React.FC<ComponentProps> = ({ id }) => {
  const thePost = getPostById(id);
  let theAuthor = undefined;
  if (thePost) {
    theAuthor = getAuthorById(thePost.author);
  }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="rounded-md shadow-lg shadow-slate-200">
      <img
        className="w-full h-40 object-cover rounded-md"
        src={thePost.featuredImage}
        alt=""
      />
      <div className="p-4">
        <Link to={"/posts/" + thePost.postId}>
          <HeadingThree heading={thePost.postTitle} />
        </Link>
        <p className="mb-3">
          {thePost.postContent.substring(0, 100) + " ....."}
        </p>
        <Link
          to={"/posts/" + thePost.postId}
          className="text-sm text-blue-400 underline underline-offset-8"
        >
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default FeaturedCard;
