import { getFeaturedPost } from "../../utils/GetData";
import HeadingTwo from "../../components/ul/HeadingTwo";
import AuthorCard from "../../components/AuthorCard";

import { authors } from "../../data/defaultPosts.json";
import CardAlt from "../../components/CardAlt";
import FeaturedCardAlt from "../../components/FeaturedCardAlt";
import PrimaryButton from "../../components/ul/PrimaryButton";

const Home = () => {
  const featuredPosts = getFeaturedPost();
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
      <section className="sm:w-9/12 mx-auto my-6 sm:my-16 grid md:grid-cols-2 gap-6 px-3">
        {featuredPosts.map((featuredPost, index) => (
          <FeaturedCardAlt key={index} id={featuredPost.postId} />
        ))}
      </section>
      <section className="sm:w-9/12 mx-auto my-16 px-3">
        <HeadingTwo heading="Popular this month" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
          {/* <CardAlt id={4} /> */}
        </div>
      </section>
      <section className="sm:w-9/12 mx-auto my-16 px-3">
        <HeadingTwo heading="Top Writers" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <HeadingTwo heading="Latest poems" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <HeadingTwo heading="Latest thoughts" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16">
        <HeadingTwo heading="Latest stories" />
        <div className="grid grid-cols-3 gap-6">
          <CardAlt id={1} />
          <CardAlt id={2} />
          <CardAlt id={3} />
        </div>
      </section>
      <section className="w-9/12 mx-auto my-16 gap-6">
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
      <section className="bg-sky-500 w-full">
        <div className="w-9/12 mx-auto p-12 text-white text-center flex flex-col items-center">
          <h2 className="text-6xl font-bold mb-6">
            Discover a World of Stories
          </h2>
          <p className="mb-6">
            Start your literary journey today. Join thousands of readers who are
            passionate about storytelling and creativity. <br />
            Together, let's celebrate the power of words. Click below to get
            started!
          </p>
          <div className="flex gap-6">
            <PrimaryButton value="Join Now" />
            <PrimaryButton value="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
