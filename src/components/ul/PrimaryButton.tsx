import { Link } from "react-router-dom";

const PrimaryButton = () => {
  return (
    <Link to="/posts/3">
      <button className="bg-amber-400 text-white px-9 py-2 rounded-full">
        Click Me
      </button>
    </Link>
  );
};
export default PrimaryButton;
