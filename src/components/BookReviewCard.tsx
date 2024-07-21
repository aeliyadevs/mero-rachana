import { Link } from "react-router-dom";

interface ComponentProps {
  book: {
    id: number;
    bookName: string;
    author: string;
    bookCover: string;
    publishedYear: number;
    review: string;
  };
}
const BookReviewCard: React.FC<ComponentProps> = ({ book }) => {
  return (
    <div className="h-[380px] sm:h-[450px] relative rounded-md overflow-hidden">
      <img
        src={book.bookCover}
        alt={book.bookName}
        className="w-full h-full absolute mx-auto object-contain"
      />
      <div className="w-full h-full text-white flex flex-col justify-end absolute opacity-0 hover:opacity-100 translate-y-28 hover:translate-y-0 duration-300 bg-gradient-to-b from-transparent to-black p-3 pb-5">
        <h3 className="text-xl font-bold">{book.bookName}</h3>
        <p>
          Book by <strong>{book.author}</strong>
        </p>
        <p>
          Published Year - <strong>{book.publishedYear}</strong>
        </p>
        <Link to={"/posts/" + book.id} className="text-sm text-blue-400 mt-2">
          View Details <i className="fa-solid fa-arrow-right-long ml-2"></i>
        </Link>
      </div>
    </div>
  );
};
export default BookReviewCard;
