import {
  getFeaturedPost,
  getLatestBookReviews,
  getLatestPosts,
  getPostsByCategory,
} from "../../utils/GetData";
import HeadingTwo from "../../components/ul/HeadingTwo";
import AuthorCard from "../../components/AuthorCard";
import { authors } from "../../data/defaultPosts.json";
import CardAlt from "../../components/CardAlt";
import FeaturedCardAlt from "../../components/FeaturedCardAlt";
import PrimaryButton from "../../components/ul/PrimaryButton";
import Slider from "react-slick";
import BookReviewCard from "../../components/BookReviewCard";

const Home = () => {
  const featuredPosts = getFeaturedPost();
  const latestPosts = getLatestPosts(3);
  const stories = getPostsByCategory("story");
  const poems = getPostsByCategory("poem");
  const thoughts = getPostsByCategory("thought");
  const latestReviews = getLatestBookReviews(4);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  var reviewSliderOptions = {
    dots: false,
    Infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
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
      <section className="sm:w-11/12 lg:w-9/12 m-4 sm:mx-auto">
        <Slider {...settings}>
          {featuredPosts.map((featuredPost, index) => (
            <FeaturedCardAlt key={index} id={featuredPost.postId} />
          ))}
        </Slider>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Popular this month" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <CardAlt key={index} id={post.postId} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Top Writers" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest poems" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {poems.map((poem, index) => (
            <CardAlt key={index} id={poem.postId} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest thoughts" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {thoughts.map((thought, index) => (
            <CardAlt key={index} id={thought.postId} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest stories" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <CardAlt key={index} id={story.postId} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest Book Reviews" />
        <div className="">
          <Slider {...reviewSliderOptions}>
            {latestReviews &&
              latestReviews.map((review, index) => (
                <BookReviewCard key={index} book={review} />
              ))}
          </Slider>
        </div>
      </section>
      <section className="bg-sky-500 w-full">
        <div className="sm:w-11/12 lg:w-7/12 mx-4 sm:mx-auto p-6 lg:p-12 text-white text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover A World Of Stories
          </h2>
          <p className="mb-6">
            Start your literary journey today. Join thousands of readers who are
            passionate about storytelling and creativity. Together, let's
            celebrate the power of words. Click below to get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <PrimaryButton value="Join Now" />
            <PrimaryButton value="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
