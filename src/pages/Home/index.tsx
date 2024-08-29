import HeadingTwo from "../../components/ui/HeadingTwo";
import WriterCard from "../../components/WriterCard";
import CardAlt from "../../components/CardAlt";
import FeaturedCardAlt from "../../components/FeaturedCardAlt";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Slider from "react-slick";
import BookReviewCard from "../../components/BookReviewCard";
import { useEffect, useState } from "react";
import { BookReview, Post, Writer } from "../../types";
import useAxios from "../../hooks/useAxios";
import CardAltSkeleton from "../../components/CardAltSkeleton";
import WriterCardSkeleton from "../../components/WriterCardSkeleton";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
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
  const [poems, setPoems] = useState<Post[]>([]);
  const [stories, setStories] = useState<Post[]>([]);
  const [thoughts, setThoughts] = useState<Post[]>([]);
  const [writers, setWriters] = useState<Writer[]>([]);
  const [bookReviews, setBookReviews] = useState<BookReview[]>([]);

  // use custom hook to fetch data - useAxios
  const { error, loading, fetchData } = useAxios();

  const fetchPosts = async () => {
    try {
      await fetchData({ url: "/posts", method: "GET" }, (data: any) => {
        setPosts(data);
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const fetchStories = async () => {
    try {
      await fetchData(
        { url: "/posts", method: "GET", params: { categoryId: 2 } },
        (data: any) => {
          setStories(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPoems = async () => {
    try {
      await fetchData(
        { url: "/posts", method: "GET", params: { categoryId: 1 } },
        (data: any) => {
          setPoems(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchThoughts = async () => {
    try {
      await fetchData(
        { url: "/posts", method: "GET", params: { categoryId: 3 } },
        (data: any) => {
          setThoughts(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWriters = async () => {
    try {
      await fetchData(
        { url: "/users", method: "GET", params: { userTypeId: 3 } },
        (data: any) => {
          setWriters(data);
        }
      );
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const fetchBookReviews = async () => {
    try {
      await fetchData(
        { url: "/book-reviews", method: "GET", params: { _embed: true } },
        (data: any) => {
          const mappedReviews = data.map((review: any) => ({
            id: review.id,
            title: review.title.rendered,
            slug: review.slug,
            content: review.content.rendered,
            featuredImage: review._embedded["wp:featuredmedia"][0].source_url,
            author: review.acf.author,
            publishedYear: review.acf.published_year,
          }));
          setBookReviews(mappedReviews);
        }
      );
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchWriters();
    fetchPoems();
    fetchStories();
    fetchThoughts();
    // fetchBookReviews();
  }, []);

  return (
    <>
      <section className="sm:w-11/12 lg:w-9/12 m-4 sm:mx-auto">
        <Slider {...settings}>
          {posts
            .filter((p) => p.isFeatured === true)
            .map((post, index) => (
              <FeaturedCardAlt key={index} post={post} />
            ))}
        </Slider>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Popular this month" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <CardAlt loading={loading} />
          ) : posts.length ? (
            posts.map((post, index) => <CardAlt key={index} post={post} />)
          ) : (
            <>Post(s) not found.</>
          )}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Top Writers" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading ? (
            <WriterCard loading={loading} />
          ) : writers.length ? (
            writers.map((writer, index) => (
              <WriterCard key={index} writer={writer} />
            ))
          ) : (
            <>Writer(s) not found.</>
          )}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest poems" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <CardAlt loading={loading} />
          ) : poems.length ? (
            poems
              .filter((p) => p.category.name === "poem")
              .map((post, index) => <CardAlt key={index} post={post} />)
          ) : (
            <>Post(s) not found.</>
          )}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest stories" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <CardAlt loading={loading} />
          ) : stories.length ? (
            stories
              .filter((p) => p.category.name === "story")
              .map((post, index) => <CardAlt key={index} post={post} />)
          ) : (
            <>Post(s) not found.</>
          )}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest thoughts" />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
            <CardAlt loading={loading} />
          ) : thoughts.length ? (
            thoughts.map((post, index) => <CardAlt key={index} post={post} />)
          ) : (
            <>Post(s) not found.</>
          )}
        </div>
      </section>
      <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
        <HeadingTwo heading="Latest Book Reviews" />
        <div className="">
          {bookReviews.length ? (
            <Slider {...reviewSliderOptions}>
              {bookReviews &&
                bookReviews.map((review, index) => (
                  <BookReviewCard key={index} review={review} />
                ))}
            </Slider>
          ) : (
            <>Review(s) not found.</>
          )}
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
