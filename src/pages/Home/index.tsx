import { Link } from "react-router-dom";
import { getFeaturedPost } from "../../utils/GetData";

const Home = () => {
  const featuredPost = getFeaturedPost();
  return (
    <>
      <section className="w-9/12 mx-auto my-8 flex gap-6">
        <div className="pt-8">
          <span className="text-green-500">Featured article</span>
          <Link to={"/posts/" + featuredPost?.postId}>
            <h2 className="text-5xl font-semibold  mb-4 hover:text-sky-700 hover:translate-x-2 duration-300">
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
            className="text-sm text-blue-400 underline float-right underline-offset-8"
          >
            View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </Link>
        </div>
        <img
          src={featuredPost?.featuredImage}
          alt=""
          className="w-6/12 rounded-md"
        />
      </section>
    </>
  );
};
export default Home;
