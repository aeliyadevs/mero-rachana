import { useParams } from "react-router-dom";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ui/HeadingOne";
import Comment from "../components/Comment";
import useAxios from "../hooks/useAxios";
import { useEffect, useRef, useState } from "react";
import { Post } from "../types";
import { DateFormatter } from "../utils/DateFormatter";
import WriterCardMini from "../components/WriterCardMini";
import SingleSkeleton from "./SingleSkeleton";
import NotFound from "../pages/NotFound";

const Single = () => {
  const { id } = useParams();
  const viewIncrementExecutedRef = useRef(false);
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

  const incrementPostView = async (postId: number, userId: number) => {
    try {
      await fetchData(
        {
          url: `views`,
          method: "POST",
          params: { postId: postId, userId: userId },
        },
        (data: any) => {
          // console.log(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
    if (id != undefined && !viewIncrementExecutedRef.current) {
      incrementPostView(parseInt(id), 3);
      viewIncrementExecutedRef.current = true;
    }
  }, [id]);

  if (loading) {
    return <SingleSkeleton />;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <article className="w-7/12 mx-auto my-6 flex flex-col">
      <img
        className="rounded-md h-[500px] object-cover mb-6"
        src={post.featuredImage}
        alt=""
      />
      <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-sky-300">
        <WriterCardMini writer={post.createdBy} />
        <Meta postId={post.postId} />
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
  );
};
export default Single;
