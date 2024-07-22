import BookReviewCard from "../../components/BookReviewCard";
import HeadingOne from "../../components/ui/HeadingOne";
import { bookReviews } from "../../data/defaultPosts.json";

const Reviews = () => {
  return (
    <div className="sm:w-11/12 lg:w-9/12 m-4 sm:mx-auto px-3 my-16">
      <HeadingOne heading={"Book reviews"} center={false} />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookReviews.map((review, index) => (
          <BookReviewCard key={index} book={review} />
        ))}
      </div>
    </div>
  );
};
export default Reviews;
