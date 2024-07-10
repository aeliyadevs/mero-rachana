import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 flex justify-between text-white py-6">
      <div className="w-9/12 mx-auto flex justify-between">
        <div className="logo">
          <h1 className="text-4xl font-bold">Mero Rachana</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
