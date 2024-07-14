import { Link } from "react-router-dom";
import { getFeaturedPost } from "../../utils/GetData";
import FeaturedCard from "../../components/FeaturedCard";
import HeadingTwo from "../../components/ul/HeadingTwo";

const Home = () => {
  const featuredPost = getFeaturedPost();
  return (
    <>
      <section className="w-9/12 mx-auto my-16 rounded-md flex gap-6">
        <img
          src={featuredPost?.featuredImage}
          alt=""
          className="w-5/12 object-cover rounded-md"
        />
        <div className="p-6">
          <span className="text-green-500">Featured article</span>
          <Link to={"/posts/" + featuredPost?.postId}>
            <h2 className="text-5xl font-semibold  mt-2 mb-4 hover:text-sky-700 duration-300">
              {featuredPost?.postTitle}
            </h2>
          </Link>
          <p className="font-semibold mb-2">
            Aeliyadevs / {featuredPost?.postCategory} /{" "}
            {featuredPost?.createdAt}
          </p>
          <p className="mb-4">{featuredPost?.postContent}</p>
          <Link
            to={"/posts/" + featuredPost?.postId}
            className="text-sm text-blue-400 underline underline-offset-8"
          >
            View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </Link>
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <HeadingTwo heading="Latest posts" />
        <div className="flex gap-6">
          <FeaturedCard id={1} />
          <FeaturedCard id={2} />
          <FeaturedCard id={4} />
        </div>
      </section>
    </>
  );
};
export default Home;
