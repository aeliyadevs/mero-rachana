import CardAlt from "../../components/CardAlt";
import HeadingTwo from "../../components/ul/HeadingTwo";
import { posts } from "../../data/defaultPosts.json";
const Posts = () => {
  return (
    <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
      <HeadingTwo heading={"All Posts"} />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <CardAlt key={index} id={post.postId} />
        ))}
      </div>
    </section>
  );
};
export default Posts;
