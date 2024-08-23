import { Link } from "react-router-dom";
import HeadingThree from "./ui/HeadingThree";
import { getAuthorById, getCategoryName, getPostById } from "../utils/GetData";
import { Post } from "../types";

interface ComponentProps {
  post: Post;
  categoryName: string | undefined;
}
const CardAlt: React.FC<ComponentProps> = ({ post, categoryName }) => {
  const thePost = post;
  // let theAuthor = {} || undefined;
  // if (thePost) {
  //   theAuthor = getAuthorById(thePost.author);
  // }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="rounded-md overflow-hidden relative border-b-2 border-b-sky-400 shadow-lg shadow-slate-200">
      <img
        className="w-full h-60 object-cover"
        src={thePost.featuredImage}
        alt=""
      />
      <p className="capitalize bg-sky-500 text-white absolute rounded-br-md top-0 px-4 py-1">
        {/* {getCategoryName(thePost.category)} */}
        {categoryName}
      </p>
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
        <Link to={"/posts/" + thePost.id}>
          <HeadingThree heading={thePost.title} />
        </Link>
        {/* <p>Author {thePost.author}</p> */}
        {/* <p className="mb-3 hidden lg:block">{thePost.excerpt.rendered}</p> */}
        <div dangerouslySetInnerHTML={{ __html: thePost.excerpt }} />
        <Link to={"/posts/" + thePost.id} className="text-sm text-blue-400">
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default CardAlt;
