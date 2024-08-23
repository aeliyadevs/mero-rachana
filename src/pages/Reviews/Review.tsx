import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { BookReview } from "../../types";
import Loading from "../../components/ui/Loading";

const Review = () => {
  const { id } = useParams();
  const [review, setReview] = useState<BookReview | {}>({});
  // const bookReview = getBookReviewById(parseInt(id ? id : "0"));

  const { error, loading, fetchData } = useAxios();

  const fetchReview = async () => {
    try {
      await fetchData(
        { url: `/book-reviews/${id}`, method: "GET", params: { _embed: true } },
        (data: any) => {
          const mappedReview = {
            id: data.id,
            title: data.title.rendered,
            slug: data.slug,
            content: data.content.rendered,
            featuredImage: data._embedded["wp:featuredmedia"][0].source_url,
            author: data.acf.author,
            publishedYear: data.acf.published_year,
          };
          setReview(mappedReview);
        }
      );
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const renderStars = (count: number) => {
    const stars = [];
    // set rated stars
    for (let i = 0; i < count; i++) {
      stars.push(<i className="fa-solid fa-star"></i>);
    }
    // set unrated stars
    for (let i = 0; i < 5 - count; i++) {
      stars.push(<i className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  useEffect(() => {
    fetchReview();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-7/12 mx-auto my-16 grid grid-cols-3 gap-6">
          <div className="rounded-md overflow-hidden">
            <img src={review.featuredImage} alt={review.title} />
          </div>
          <div className="col-span-2 py-6">
            <h1 className="text-5xl font-bold mb-3">{review.title}</h1>
            <p>
              Book by <strong>{review.author}</strong>
            </p>
            <p>
              Published Year - <strong>{review.publishedYear}</strong>
            </p>
            <div className="rating text-xl text-sky-500">
              {review.rating ? (
                renderStars(review.rating)
              ) : (
                <span className="text-gray-400 text-base">N/A</span>
              )}
            </div>
            {/* <blockquote className="mt-4 border-l-4 border-sky-200 pl-4">
          {review.content}
        </blockquote> */}
            <div
              dangerouslySetInnerHTML={{ __html: review.content }}
              className="mt-4 border-l-4 border-sky-200 pl-4"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Review;
