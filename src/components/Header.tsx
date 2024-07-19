import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 flex justify-between text-white py-6">
      <div className="w-full sm:w-11/12 lg:w-9/12 px-3 mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="logo">
            <h1 className="text-4xl font-bold text-primary">
              Mero<span className="font-light text-white">Rachana</span>
            </h1>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
        <div className="lg:hidden">
          <i className="fa-solid fa-bars"></i>
          <nav className="hidden">
            <ul className="flex gap-8">
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
