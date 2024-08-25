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

  // fetch data from api
  const [post, setPost] = useState<Post>();
  const { error, loading, fetchData } = useAxios();

  const fetchPost = async () => {
    if (id) {
      try {
        await fetchData({ url: "/posts/" + id, method: "GET" }, (data: any) => {
          console.log(data);
          const mappedPost: Post = {
            postId: data.postId,
            postTitle: data.postTitle,
            postTitleSlug: data.postTitleSlug,
            postExcerpt: data.postTitleSlug,
            postContent: data.postContent,
            featuredImage: data.featuredImage,
            category: data.category,
            author: data.createdBy,
            isFeatured: data.isFeatured,
          };
          setPost(mappedPost);
        });
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <>
      {!post ? (
        <>Content Loading</>
      ) : (
        <>
          {error ? <>{error}</> : <></>}
          <article className="w-7/12 mx-auto my-16 flex flex-col">
            <img
              className="rounded-md h-[500px] object-cover mb-6"
              src={post.featuredImage}
              alt=""
            />
            <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-sky-300">
              <Author author={post.author} />
              <Meta />
            </div>
            <HeadingOne heading={post.postTitle} center={false} />
            <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
            <SocialShare />
            <Comment postId={post.postId} />
          </article>
        </>
      )}
    </>
  );
};
export default Single;
