import { useParams } from "react-router-dom";
import { getBookReviewById } from "../../utils/GetData";

const Review = () => {
  const { id } = useParams();
  console.log(id);
  const bookReview = getBookReviewById(parseInt(id ? id : "0"));
  return (
    <div className="w-7/12 mx-auto my-16 grid grid-cols-3 gap-6">
      <div className="rounded-md overflow-hidden">
        <img src={bookReview?.bookCover} alt={bookReview?.bookName} />
      </div>
      <div className="col-span-2 py-6">
        <h1 className="text-5xl font-bold mb-3">{bookReview?.bookName}</h1>
        <p>
          Book by <strong>{bookReview?.author}</strong>
        </p>
        <p>
          Published Year - <strong>{bookReview?.publishedYear}</strong>
        </p>
        <blockquote className="mt-4 border-l-2 border-lime-400 pl-4">
          {bookReview?.review}
        </blockquote>
      </div>
    </div>
  );
};
export default Review;
