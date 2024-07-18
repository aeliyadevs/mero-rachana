import { useParams } from "react-router-dom";
import Author from "../components/Author";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ul/HeadingOne";
import HeadingTwo from "../components/ul/HeadingTwo";
import Comment from "../components/Comment";
import { getPostById } from "../utils/GetData";

const Single = () => {
  const { id } = useParams();

  const post = getPostById(parseInt(id ? id : "0"));

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <article className="w-6/12 mx-auto mt-10 mb-20 flex flex-col">
      <img
        className="rounded-md h-[500px] object-cover mb-6"
        src={post.featuredImage}
        alt=""
      />
      <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-lime-300">
        <Author authorId={post.author} />
        <Meta />
      </div>
      <HeadingOne heading={post.postTitle} center={false} />
      <p>{post.postContent}</p>
      <p>{post.postContent}</p>
      <HeadingTwo heading={post.postSlug} />
      <p>{post.postContent}</p>
      <p>{post.postContent}</p>
      <SocialShare />
      <Comment postId={post.postId} />
    </article>
  );
};
export default Single;
