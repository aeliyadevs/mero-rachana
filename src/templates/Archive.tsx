import CardAlt from "../components/CardAlt";
import HeadingTwo from "../components/ul/HeadingTwo";
import { posts } from "../data/defaultPosts.json";

interface ComponentProps {
  type: string;
}

const Archive: React.FC<ComponentProps> = ({ type }) => {
  return (
    <section className="w-9/12 mx-auto my-16">
      <HeadingTwo heading={"All " + type + "s"} />
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <CardAlt key={index} id={post.postId} />
        ))}
      </div>
    </section>
  );
};
export default Archive;
