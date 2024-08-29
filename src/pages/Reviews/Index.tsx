import BookReviewCard from "../../components/BookReviewCard";
import HeadingOne from "../../components/ui/HeadingOne";
import HeadingTwo from "../../components/ui/HeadingTwo";
import { bookReviews } from "../../data/defaultPosts.json";

const Reviews = () => {
  return (
    <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
      {/* <HeadingOne heading={"Book reviews"} center={false} /> */}
      <HeadingTwo heading={"Book reviews"} />
      {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookReviews.map((review, index) => (
          <BookReviewCard key={index} review={review} />
        ))}
      </div> */}
    </section>
  );
};
export default Reviews;
