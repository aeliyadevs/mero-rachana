import { useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const offCanvasMenu = useRef<HTMLDivElement>(null);
  const ActivateMenu = () => {
    offCanvasMenu.current?.classList.remove("translate-x-full");
  };
  const DeactivateMenu = () => {
    offCanvasMenu.current?.classList.add("translate-x-full");
  };
  return (
    <header className="w-full bg-white shadow-md shadow-gray-200 px-3 sm:px-0">
      {/* <div className="bg-blue-800 text-white">
        <div className="w-9/12 mx-auto">
          <marquee behavior="scroll" direction="left">
            Share your thoughts, stories or creations
          </marquee>
        </div>
      </div> */}
      <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto flex justify-between items-center py-5">
        <Link to="/">
          <div className="logo">
            <h1 className="text-4xl font-bold text-primary">
              {/* Mero<span className="font-light text-white">Rachana</span> */}
              <img
                src="/images/logo.png"
                alt="mero rachana logo"
                className="w-44"
              />
            </h1>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center">
          <ul className="flex gap-8">
            <Link
              to="/"
              className="hover:text-red-700 hover:translate-y-1 duration-300"
            >
              Home
            </Link>
            <Link
              to="/posts"
              className="hover:text-red-700 hover:translate-y-1 duration-300"
            >
              Poems
            </Link>
            <Link
              to="/posts"
              className="hover:text-red-700 hover:translate-y-1 duration-300"
            >
              Stories
            </Link>
            <Link
              to="/posts"
              className="hover:text-red-700 hover:translate-y-1 duration-300"
            >
              Thoughts
            </Link>
            <Link
              to="/book-reviews"
              className="hover:text-red-700 hover:translate-y-1 duration-300"
            >
              Book Reviews
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-700 hover:translate-y-1 duration-300"
            >
              Contact
            </Link>
          </ul>
        </nav>
        <div className="lg:hidden">
          <div
            onClick={() => {
              ActivateMenu();
            }}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
          <div
            ref={offCanvasMenu}
            className="w-full h-screen fixed text-white left-0 top-0 translate-x-full duration-500 z-10 bg-gradient-to-b from-slate-950 to-slate-950/90 p-10"
          >
            <div
              className="absolute top-7 right-7"
              onClick={() => {
                DeactivateMenu();
              }}
            >
              <i className="fa-solid fa-xmark text-2xl"></i>
            </div>
            <nav className="sm:w-8/12 mx-auto py-6 my-8">
              <ul className="flex flex-col text-lg ">
                <Link
                  to="/"
                  className="flex gap-4 items-center py-4 border-b-[1px] border-b-slate-500/50"
                >
                  <i className="fa-solid fa-arrow-right-long text-sm"></i> Home
                </Link>
                <Link
                  to="/posts"
                  className="flex gap-4 items-center py-3 border-b-[1px] border-b-slate-500/50"
                >
                  <i className="fa-solid fa-arrow-right-long text-sm"></i> Posts
                </Link>
                <Link
                  to="/book-reviews"
                  className="flex gap-4 items-center py-3 border-b-[1px] border-b-slate-500/50"
                >
                  <i className="fa-solid fa-arrow-right-long text-sm"></i> Book
                  Reviews
                </Link>
                <Link
                  to="/categories"
                  className="flex gap-4 items-center py-3 border-b-[1px] border-b-slate-500/50"
                >
                  <i className="fa-solid fa-arrow-right-long text-sm"></i>{" "}
                  Categories
                </Link>
                <Link
                  to="/contact"
                  className="flex gap-4 items-center py-3 border-b-[1px] border-b-slate-500/50"
                >
                  <i className="fa-solid fa-arrow-right-long text-sm"></i>{" "}
                  Contact
                </Link>
                <Link
                  to="/login"
                  className="flex gap-4 items-center py-3 border-b-[1px] border-b-slate-500/50"
                >
                  <i className="fa-solid fa-arrow-right-long text-sm"></i> Login
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
