import { Link } from "react-router-dom";
import { BookReview } from "./types";

interface ComponentProps {
  review: BookReview;
}
const BookReviewCard: React.FC<ComponentProps> = ({ review }) => {
  return (
    <div className="h-auto relative rounded-md overflow-hidden">
      <img
        src={review.featuredImage}
        alt={review.title}
        className="w-full mx-auto object-contain"
      />
      <div className="w-full h-full text-white flex flex-col justify-end absolute bottom-0 opacity-0 hover:opacity-100 translate-y-10 hover:translate-y-0 duration-300 bg-gradient-to-b from-transparent to-black p-3 pb-5">
        <h3 className="text-2xl font-semibold">{review.title}</h3>
        <p>
          Book by <strong>{review.author}</strong>
        </p>
        <p>
          Published Year - <strong>{review.publishedYear}</strong>
        </p>
        <Link
          to={"/book-reviews/" + review.id}
          className="text-sm text-blue-400 mt-2"
        >
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default BookReviewCard;
