import { Link } from "react-router-dom";
import HeadingThree from "./ul/HeadingThree";

interface ComponentProps {
  id: string;
}
const Card: React.FC<ComponentProps> = ({ id }) => {
  return (
    <div className="shadow-lg">
      <img
        className="rounded-md"
        src="https://st.depositphotos.com/1005563/4941/i/450/depositphotos_49418809-stock-photo-frog-on-the-leaf.jpg"
        alt=""
      />
      <div className="p-4 pb-8">
        <HeadingThree heading="Card title" />
        <p className="mb-3">
          Lorem ipsum dolor sit amet consect etur, adipi sicing elit. Nostrum a
          iusto laud antium.
        </p>
        <Link
          to={`/posts/${id}`}
          className="text-blue-400 underline underline-offset-8"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
export default Card;
