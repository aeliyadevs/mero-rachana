import { useParams } from "react-router-dom";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ui/HeadingOne";
import Comment from "../components/Comment";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { Post } from "../types";
import { DateFormatter } from "../utils/DateFormatter";
import WriterCardMini from "../components/WriterCardMini";
import CardAltSkeleton from "../components/CardAltSkeleton";

const Single = () => {
  const { id } = useParams();

  // fetch data from api
  const [post, setPost] = useState<Post | null>(null);
  const { response, error, loading, fetchData } = useAxios();

  const fetchPost = async () => {
    if (id) {
      try {
        await fetchData(
          { url: `/posts/${id}`, method: "GET" },
          (data: Post) => {
            // const mappedPost: Post = {
            //   postId: data.postId,
            //   postTitle: data.postTitle,
            //   postTitleSlug: data.postTitleSlug,
            //   postExcerpt: data.postTitleSlug,
            //   postContent: data.postContent,
            //   featuredImage: data.featuredImage,
            //   category: data.category,
            //   author: data.createdBy,
            //   createdAt: data.createdAt,
            //   isFeatured: data.isFeatured,
            // };
            setPost(data);
          }
        );
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (loading) {
    return <>Content loading</>;
  }

  if (!post) {
    return <>No post found.</>;
  }

  return (
    <>
      {loading ? (
        <CardAltSkeleton />
      ) : !post ? (
        <>No post found.</>
      ) : (
        <article className="w-7/12 mx-auto my-16 flex flex-col">
          <img
            className="rounded-md h-[500px] object-cover mb-6"
            src={post.featuredImage}
            alt=""
          />
          <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-sky-300">
            <WriterCardMini author={post.createdBy} />
            <Meta />
          </div>
          <HeadingOne heading={post.postTitle} center={false} />
          <p className="pb-4 flex items-center gap-2">
            <i className="fa-regular fa-calendar"></i>
            {DateFormatter(post.createdAt)}
          </p>

          <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
          <SocialShare />
          <Comment postId={post.postId} />
        </article>
      )}
    </>
  );
};
export default Single;
