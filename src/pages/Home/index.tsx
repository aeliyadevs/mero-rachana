import { Link } from "react-router-dom";
import HeadingTwo from "../../components/ul/HeadingTwo";
import PrimaryButton from "../../components/ul/PrimaryButton";
import { posts } from "../../data/defaultPosts.json";
import HeadingThree from "../../components/ul/HeadingThree";

const Home = () => {
  let featuredPost = undefined;
  const getFeaturedPost = () => {
    return posts.find((post) => post.featured === true);
  };
  featuredPost = getFeaturedPost();
  return (
    <>
      <section className="w-9/12 mx-auto my-8 flex items-center">
        <div className="bg-slate-100 rounded-md -mr-32 relative border-l-2 border-b-2 border-blue-200 p-10">
          <Link to={"/posts/" + featuredPost?.postId}>
            <h2 className="text-4xl font-semibold  mb-4 hover:text-sky-700 hover:translate-x-2 duration-300">
              {featuredPost?.postTitle}
            </h2>
          </Link>
          <p className="font-semibold mb-2">
            Aeliyadevs | {featuredPost?.createdAt} |{" "}
            {featuredPost?.postCategory}
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
      <section className="w-9/12 mx-auto py-4">
        <h1 className="text-3xl font-bold bg-slate-700 text-white font-nepaliFont">
          प्रत्येक व्यक्ति को विचार और उसकी अभिव्यक्ति की स्वतन्त्रता का अधिकार
          है ।
        </h1>
        <h2 className="font-primaryFont">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
          ducimus.
        </h2>

        <PrimaryButton />
      </section>
    </>
  );
};
export default Home;
