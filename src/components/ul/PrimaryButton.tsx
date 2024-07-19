import { Link } from "react-router-dom";
interface ComponentProps {
  value: string;
}
const PrimaryButton: React.FC<ComponentProps> = ({ value }) => {
  return (
    <Link to="/posts/3">
      <button className="w-[256px] bg-slate-900 text-white px-8 md:px-16 py-4 rounded-full">
        {value}
      </button>
    </Link>
  );
};
export default PrimaryButton;
