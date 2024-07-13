import { useParams } from "react-router-dom";
import Author from "../components/Author";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ul/HeadingOne";
import HeadingTwo from "../components/ul/HeadingTwo";
import { posts } from "../data/defaultPosts.json";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";

interface Post {
  postId: number;
  postTitle: string;
  postSlug: string;
  postContent: string;
  featuredImage: string;
  author: number;
}
const Single = () => {
  let { id } = useParams();

  const [post, setPost] = useState<Post>();

  const getPostById = (id: string) => {
    return posts.find((post) => post.postId === parseInt(id));
  };

  useEffect(() => {
    if (id) {
      setPost(getPostById(id));
    }
  }, []);

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <article className="w-6/12 mx-auto mt-10 mb-20 flex flex-col">
      <img className="rounded-md mb-6" src={post.featuredImage} alt="" />
      <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-lime-300">
        <Author authorId={post.author} />
        <Meta />
      </div>
      <HeadingOne heading={post.postTitle} />
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
