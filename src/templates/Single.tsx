import { useParams } from "react-router-dom";
import Author from "../components/Author";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ul/HeadingOne";
import HeadingTwo from "../components/ul/HeadingTwo";
import { posts } from "../data/defaultPosts.json";

const Single = () => {
  let { id } = useParams();
  console.log(id);

  const findPostById = (id: string | undefined) => {
    return posts.find((post) => post.postId === id);
  };
  const thePost = findPostById(id);
  if (!thePost) {
    return <p>Post not found!</p>;
  }

  return (
    <article className="w-6/12 mx-auto my-20 flex flex-col">
      <img className="rounded-md mb-6" src={thePost.featuredImage} alt="" />
      <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-lime-300">
        <Author authorId={thePost.author} />
        <Meta />
      </div>
      <HeadingOne heading={thePost.postTitle} postId={thePost.postId} />
      <p>{thePost.postContent}</p>
      <p>{thePost.postContent}</p>
      <HeadingTwo heading={thePost.postSlug} />
      <p>{thePost.postContent}</p>
      <p>{thePost.postContent}</p>
      <SocialShare />
    </article>
  );
};
export default Single;
