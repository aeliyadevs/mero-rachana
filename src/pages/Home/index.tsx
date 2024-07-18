import { Link } from "react-router-dom";
import { getFeaturedPost } from "../../utils/GetData";
import FeaturedCard from "../../components/FeaturedCard";
import HeadingTwo from "../../components/ul/HeadingTwo";
import CardAlt from "../../components/CardAlt";
import AuthorCard from "../../components/AuthorCard";

import { authors } from "../../data/defaultPosts.json";

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
        <div className="flex flex-col justify-center">
          <span className="text-green-500">Featured article</span>
          <Link to={"/posts/" + featuredPost?.postId}>
            <h2 className="text-5xl font-semibold mt-2 mb-4 hover:text-primary duration-300">
              {featuredPost?.postTitle}
            </h2>
          </Link>
          <p className="font-semibold text-black/50 mb-2">
            Aeliyadevs / {featuredPost?.postCategory} /{" "}
            {featuredPost?.createdAt}
          </p>
          <p className="mb-4">{featuredPost?.postContent}</p>
          <Link
            to={"/posts/" + featuredPost?.postId}
            className="text-sm text-blue-400"
          >
            View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </Link>
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <HeadingTwo heading="Popular this month" />
        <div className="flex gap-6">
          <FeaturedCard id={1} />
          <FeaturedCard id={2} />
          <FeaturedCard id={4} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <HeadingTwo heading="Top Writers" />
        <div className="grid grid-cols-5 gap-6">
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-200 rounded-md p-4"></div>
          <div className="grid gap-6 grid-cols-3 col-span-2">
            <div className="col-span-3">
              <HeadingTwo heading="Latest posts" />
            </div>
            <CardAlt id={1} />
            <CardAlt id={2} />
            <CardAlt id={3} />

            <CardAlt id={1} />
            <CardAlt id={2} />
            <CardAlt id={3} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
