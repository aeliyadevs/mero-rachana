import { Link } from "react-router-dom";
import HeadingThree from "./ui/HeadingThree";
import { Post } from "../types";
import { DateFormatter } from "../utils/DateFormatter";

interface ComponentProps {
  post: Post;
}
const CardAlt: React.FC<ComponentProps> = ({ post }) => {
  return (
    <div className="rounded-md overflow-hidden relative border-b-2 border-b-sky-400 shadow-lg shadow-slate-200">
      <img
        className="w-full h-60 object-cover"
        src={post.featuredImage}
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
        <div className="capitalize text-sky-500 rounded-br-md mb-2 flex gap-5">
          {/* {getCategoryName(post.category)} */}
          <p className="flex items-center gap-2 font-bold">
            {/* <i className="fa-regular fa-calendar"></i> */}
            {post.category.name}
          </p>
          <p className="flex items-center gap-2">
            <i className="fa-regular fa-calendar"></i>
            {DateFormatter(post.createdAt)}
          </p>
        </div>
        <Link to={"/posts/" + post.postId}>
          <HeadingThree heading={post.postTitle} />
        </Link>
        {/* <p>Author {post.author}</p> */}
        {/* <p className="mb-3 hidden lg:block">{post.excerpt.rendered}</p> */}
        {/* <p className="pb-3">{post.content.substring(0, 100) + "...."}</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: post.postContent.substring(0, 100) + "....",
          }}
          className="mb-3"
        />
        <Link to={"/posts/" + post.postId} className="text-sm text-blue-400">
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default CardAlt;
