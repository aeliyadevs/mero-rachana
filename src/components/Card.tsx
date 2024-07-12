import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
import { posts, authors } from "../data/defaultPosts.json";

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
interface Author {
  id: number;
  name: string;
  profileImage: string;
  category: string;
}
const Card: React.FC<ComponentProps> = ({ id }) => {
  const getPostById = (id: number): Post | undefined => {
    return posts.find((post) => post.postId === id);
  };
  const getAuthorById = (id: number): Author | undefined => {
    return authors.find((author) => author.id === id);
  };
  const thePost = getPostById(id);
  let theAuthor = undefined;
  if (thePost) {
    theAuthor = getAuthorById(thePost.author);
  }

  if (!thePost) {
    return <>Missing post</>;
  }
  return (
    <div className="bg-slate-100 rounded-md border-l-4 border-blue-300 shadow-lg shadow-slate-200 flex">
      <div className="relative p-4 pb-4">
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
        {/* <Link
          to={"/posts/" + thePost.postId}
          className="text-sm text-blue-400 underline-offset-8"
        >
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link> */}
      </div>
      <img
        className="w-44 h-full object-cover rounded-md"
        src={thePost.featuredImage}
        alt=""
      />
    </div>
  );
};
export default Card;
