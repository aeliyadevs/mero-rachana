import { useParams } from "react-router-dom";
import { getBookReviewById } from "../../utils/GetData";

const Review = () => {
  const { id } = useParams();
  const bookReview = getBookReviewById(parseInt(id ? id : "0"));
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
  if (!bookReview) {
    return <>Review not found.</>;
  }
  return (
    <div className="w-6/12 mx-auto my-16 grid grid-cols-3 gap-6">
      <div className="rounded-md overflow-hidden">
        <img src={bookReview.bookCover} alt={bookReview.bookName} />
      </div>
      <div className="col-span-2 py-6">
        <h1 className="text-5xl font-bold mb-3">{bookReview.bookName}</h1>
        <p>
          Book by <strong>{bookReview.author}</strong>
        </p>
        <p>
          Published Year - <strong>{bookReview.publishedYear}</strong>
        </p>
        <div className="rating text-xl text-sky-500">
          {bookReview.rating ? (
            renderStars(bookReview.rating)
          ) : (
            <span className="text-gray-400 text-base">N/A</span>
          )}
        </div>
        <blockquote className="mt-4 border-l-4 border-sky-200 pl-4">
          {bookReview.review}
        </blockquote>
      </div>
    </div>
  );
};
export default Review;
