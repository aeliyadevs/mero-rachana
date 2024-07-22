import { useEffect, useState } from "react";
import CardAlt from "../../components/CardAlt";
import HeadingTwo from "../../components/ul/HeadingTwo";
import { posts } from "../../data/defaultPosts.json";
import { getPostsByCategory } from "../../utils/GetData";

interface Posts {
  postId: number;
}
const Posts = () => {
  let [category, setCategory] = useState<string>("");
  const [postsToShow, setPostsToShow] = useState<Array<Posts>>([]);
  const getPosts = (cat: string) => {
    setPostsToShow(getPostsByCategory(cat));
  };

  useEffect(() => {
    if (!category) {
      setPostsToShow(posts);
    } else {
      getPosts(category);
    }
  }, [category]);

  return (
    <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
      <HeadingTwo heading={"All Posts"} />
      <div className="flex gap-3 flex-wrap mb-3">
        <button
          onClick={() => setCategory("")}
          className={
            "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
            (category === ""
              ? "bg-sky-500 text-white"
              : "bg-transparent text-sky-500")
          }
        >
          All
        </button>
        <button
          onClick={() => setCategory("poem")}
          className={
            "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
            (category === "poem"
              ? "bg-sky-500 text-white"
              : "bg-transparent text-sky-500")
          }
        >
          Poems
        </button>
        <button
          onClick={() => setCategory("thought")}
          className={
            "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
            (category === "thought"
              ? "bg-sky-500 text-white"
              : "bg-transparent text-sky-500")
          }
        >
          Thoughts
        </button>
        <button
          onClick={() => setCategory("story")}
          className={
            "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
            (category === "story"
              ? "bg-sky-500 text-white"
              : "bg-transparent text-sky-500")
          }
        >
          Stories
        </button>
        <button
          onClick={() => setCategory("uncategorized")}
          className={
            "rounded-full border-[1px] border-sky-500 px-6 py-1 " +
            (category === "uncategorized"
              ? "bg-sky-500 text-white"
              : "bg-transparent text-sky-500")
          }
        >
          Uncategorized
        </button>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {postsToShow.map((post, index) => (
          <CardAlt key={index} id={post.postId} />
        ))}
      </div>
    </section>
  );
};
export default Posts;
