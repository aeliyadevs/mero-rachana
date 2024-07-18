import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
import { getAuthorById, getPostById } from "../utils/GetData";

interface ComponentProps {
  id: number;
}
const CardSM: React.FC<ComponentProps> = ({ id }) => {
  const thePost = getPostById(id);
  let theAuthor = undefined;
  if (thePost) {
    theAuthor = getAuthorById(thePost.author);
  }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="rounded-md shadow-lg shadow-slate-200 border-b-2 border-b-sky-400">
      <img
        className="w-full h-40 object-cover rounded-md"
        src={thePost.featuredImage}
        alt=""
      />
      <div className="p-4 pb-8">
        <Link to={"/posts/" + thePost.postId}>
          <HeadingThree heading={thePost.postTitle} />
        </Link>
        <div className="flex gap-6">
          <p className="text-sm">Aeliyadevs | July 16, 2024</p>
        </div>
      </div>
    </div>
  );
};
export default CardSM;
