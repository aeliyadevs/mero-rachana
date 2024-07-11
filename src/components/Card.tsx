import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
import { posts } from "../data/defaultPosts.json";
import Author from "./Author";

interface ComponentProps {
  id: number;
}
interface Post {
  postId: number;
  postTitle: string;
  postContent: string;
  featuredImage: string;
  author: number;
  createdAt: string;
}
const Card: React.FC<ComponentProps> = ({ id }) => {
  const getPostById = (id: number): Post | undefined => {
    return posts.find((post) => post.postId === id);
  };
  const thePost = getPostById(id);

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="shadow-lg shadow-slate-400 flex">
      <img
        className="w-52 h-52 object-cover rounded-md"
        src={thePost.featuredImage}
        alt=""
      />
      <div className="relative p-4 pb-4">
        <HeadingThree heading={thePost.postTitle} />
        <p className="mb-3">
          {thePost.postContent.substring(0, 100) + " ....."}
        </p>
        <div className="flex items-center gap-3">
          <img
            src={thePost.featuredImage}
            alt=""
            className="w-12 h-12 object-cover rounded-full border-4 border-white shadow-lg"
          />
          <p>
            <strong>Aeliyadevs</strong>
            <br />
            <span>Fri, {thePost.createdAt}</span>
          </p>
        </div>
        <Link
          to={"/posts/" + thePost.postId}
          className="text-blue-400 absolute right-4 bottom-4 block underline underline-offset-8"
        >
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default Card;
