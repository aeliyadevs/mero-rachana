import {
  getFeaturedPost,
  getLatestBookReviews,
  getLatestPosts,
  getPostsByCategory,
} from "../../utils/GetData";
import HeadingTwo from "../../components/ui/HeadingTwo";
import AuthorCard from "../../components/AuthorCard";
import { authors } from "../../data/defaultPosts.json";
import CardAlt from "../../components/CardAlt";
import FeaturedCardAlt from "../../components/FeaturedCardAlt";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Slider from "react-slick";
import BookReviewCard from "../../components/BookReviewCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category, Post } from "../../components/types";

const Home = () => {
  const featuredPosts = getFeaturedPost();
  // const latestPosts = getLatestPosts(3);
  // const poems = getPostsByCategory(1);
  // const stories = getPostsByCategory(2);
  // const thoughts = getPostsByCategory(3);
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

  // Fetch from API
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    axios
      .get("http://merorachana-cms/wp-json/wp/v2/posts?_embed")
      .then((res) => {
        let data: Post[] = [];
        res.data.map((post: any) => {
          data = [
            ...data,
            {
              id: post.id,
              title: post.title.rendered,
              slug: post.slug,
              excerpt: post.excerpt.rendered,
              featuredImage: post._embedded["wp:featuredmedia"][0].source_url,
              category: post.categories,
              author: post.author,
            },
          ];
        });
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://merorachana-cms/wp-json/wp/v2/categories")
      .then((res) => {
        let data: Category[] = [];
        res.data.map((category: any) => {
          data = [
            ...data,
            {
              id: category.id,
              name: category.name,
              slug: category.slug,
              description: category.description,
              parent: category.parent,
              count: category.count,
            },
          ];
        });
        console.log(data);
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {/* <section className="sm:w-11/12 lg:w-9/12 m-4 sm:mx-auto">
        {posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title.rendered}</h2>
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt="featured image"
            />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        ))}
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
          {posts.map((post, index) => (
            <CardAlt
              key={index}
              post={post}
              categoryName={
                categories.find((c) => c.id === post.category[0])?.name
              }
            />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Popular this month" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <CardAlt key={index} post={post} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Popular this month" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <CardAlt key={index} post={post} />
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
          {posts.map((post, index) => (
            <CardAlt key={index} post={post} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest thoughts" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <CardAlt key={index} post={post} />
          ))}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest stories" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <CardAlt key={index} post={post} />
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
