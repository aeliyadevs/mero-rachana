import { useParams } from "react-router-dom";
import Author from "../components/Author";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ui/HeadingOne";
import Comment from "../components/Comment";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { Post } from "../types";

const Single = () => {
  const { id } = useParams();

  // const post = getPostById(parseInt(id ? id : "0"));

  // fetch data from api
  const [post, setPost] = useState<Post>({} as Post);
  const { error, loading, fetchData } = useAxios();

  const fetchPost = async () => {
    try {
      await fetchData({ url: "/posts/" + id, method: "GET" }, (data: any) => {
        console.log(data);
        setPost({
          ...post,
          id: data.postId,
          title: data.postTitle,
          slug: data.postTitleSlug,
          content: data.postContent,
          featuredImage: data.featuredImage,
          category: data.category.name,
          author: data.createdBy,
          isFeatured: data.isFeatured,
        });
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {loading ? (
        <>Content Loading</>
      ) : (
        <>
          {error ? <>{error}</> : <></>}
          <article className="w-6/12 mx-auto my-16 flex flex-col">
            <img
              className="rounded-md h-[500px] object-cover mb-6"
              src={post.featuredImage}
              alt=""
            />
            <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-sky-300">
              <Author author={post.author} />
              <Meta />
            </div>
            <HeadingOne heading={post.title} center={false} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <SocialShare />
            <Comment postId={post.id} />
          </article>
        </>
      )}
    </>
  );
};
export default Single;
