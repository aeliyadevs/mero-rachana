import { useEffect, useState } from "react";
import CardAlt from "../../components/CardAlt";
import HeadingTwo from "../../components/ui/HeadingTwo";
// import { posts } from "../../data/defaultPosts.json";
// import { getPostsByCategory } from "../../utils/GetData";
import { Post } from "../../types";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/ui/Loading";

interface Posts {
  postId: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { error, loading, fetchData } = useAxios();

  const fetchPosts = async () => {
    try {
      await fetchData({ url: "/posts", method: "GET" }, (data: any) => {
        console.log(data);
        const mappedPosts = data.map((post: any) => ({
          id: post.postId,
          title: post.postTitle,
          slug: post.postTitleSlug,
          content: post.postContent,
          featuredImage: post.featuredImage,
          category: post.category.name,
          author: post.createdBy.userName,
          isFeatured: post.isFeatured,
        }));
        setPosts(mappedPosts);
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
          {error ? <p>{error}</p> : <></>}
          <HeadingTwo heading={"All Posts"} />
          <div className="flex gap-3 flex-wrap mb-3">
            <button
              onClick={() => setSelectedCategory("")}
              className={
                "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
                (selectedCategory === ""
                  ? "bg-sky-500 text-white"
                  : "bg-transparent text-sky-500")
              }
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("poem")}
              className={
                "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
                (selectedCategory === "poem"
                  ? "bg-sky-500 text-white"
                  : "bg-transparent text-sky-500")
              }
            >
              Poems
            </button>
            <button
              onClick={() => setSelectedCategory("story")}
              className={
                "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
                (selectedCategory === "story"
                  ? "bg-sky-500 text-white"
                  : "bg-transparent text-sky-500")
              }
            >
              Stories
            </button>
            <button
              onClick={() => setSelectedCategory("thought")}
              className={
                "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
                (selectedCategory === "thought"
                  ? "bg-sky-500 text-white"
                  : "bg-transparent text-sky-500")
              }
            >
              Thoughts
            </button>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts
              .filter((p) =>
                selectedCategory ? p.category === selectedCategory : true
              )
              .map((post, index) => (
                <CardAlt key={index} post={post} />
              ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Posts;
