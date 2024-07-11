import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";
import { posts } from "../data/defaultPosts.json";

interface ComponentProps {
  id: number;
}
interface Post {
  postId: number;
  postTitle: string;
  postContent: string;
  featuredImage: string;
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
    <div className="shadow-lg">
      <img
        className="w-full h-64 object-cover rounded-md"
        src={thePost.featuredImage}
        alt=""
      />
      <div className="p-4 pb-4">
        <HeadingThree heading={thePost.postTitle} />
        <p className="mb-3">
          {thePost.postContent.substring(0, 120) + " ....."}
        </p>
        <Link
          to={"/posts/" + thePost.postId}
          className="text-blue-400 underline underline-offset-8"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
export default Card;
