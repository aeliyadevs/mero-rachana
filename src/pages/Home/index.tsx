import { Link } from "react-router-dom";
import { getFeaturedPost } from "../../utils/GetData";
import HeadingTwo from "../../components/ul/HeadingTwo";
import AuthorCard from "../../components/AuthorCard";

import { authors } from "../../data/defaultPosts.json";
import CardAlt from "../../components/CardAlt";
import FeaturedCardAlt from "../../components/FeaturedCardAlt";

const Home = () => {
  const featuredPost = getFeaturedPost();
  return (
    <>
      {/* <section className="w-9/12 mx-auto my-12 rounded-md flex gap-6">
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
      </section> */}
      <section className="w-9/12 mx-auto my-8 flex gap-6">
        <FeaturedCardAlt id={2} />
        <FeaturedCardAlt id={3} />
      </section>
      <section className="w-9/12 mx-auto my-24">
        <HeadingTwo heading="Popular this month" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-24">
        <HeadingTwo heading="Top Writers" />
        <div className="grid grid-cols-5 gap-6">
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </div>
      </section>
      <section className="w-9/12 mx-auto my-24">
        <HeadingTwo heading="Latest poems" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-24">
        <HeadingTwo heading="Latest thoughts" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-24">
        <HeadingTwo heading="Latest stories" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-24 gap-6">
        <HeadingTwo heading="Book Reviews" />
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gray-200">
            <img
              src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="bg-gray-200">
            <img
              src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="bg-gray-200">
            <img
              src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="bg-gray-200">
            <img
              src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/12/Digital-Marketing-Meet-Up-Event-Poster-DesignTemplate.jpg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
