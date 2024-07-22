import { Link } from "react-router-dom";
import HeadingThree from "./ui/HeadingThree";
import { getAuthorById, getPostById } from "../utils/GetData";

interface ComponentProps {
  id: number;
}
const Card: React.FC<ComponentProps> = ({ id }) => {
  const thePost = getPostById(id);
  let theAuthor = undefined;
  if (thePost) {
    theAuthor = getAuthorById(thePost.author);
  }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg shadow-slate-200 flex">
      <img
        className="w-44 h-full object-cover"
        src={thePost.featuredImage}
        alt=""
      />
      <div className="relative p-4 pb-4 border-b-2 border-b-primary">
        <Link to={"/posts/" + thePost.postId}>
          <HeadingThree heading={thePost.postTitle} />
        </Link>
        <p className="mb-3">
          {thePost.postContent.substring(0, 100) + " ....."}
        </p>
        <div className="flex items-center gap-2">
          <img
            src={theAuthor?.profileImage}
            alt=""
            className="w-8 h-8 object-cover rounded-full border-white shadow-lg"
          />
          <p>
            <strong>{theAuthor?.name}</strong>
            {" / "}
            <span className="text-sm">{thePost.createdAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
