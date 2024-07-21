import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="w-full sm:w-11/12 lg:w-9/12 px-3 mx-auto mb-4 pt-12">
        <p className="text-4xl sm:text-5xl text-primary mb-2 font-bold">
          Mero<span className="font-light text-white">Rachana</span>
        </p>
        <p className="pb-4">A common platform for Nepali writers and readers</p>
      </div>
      <div className="w-full sm:w-11/12 lg:w-9/12 px-3 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        <div className="contact-info w-2/4">
          <h2 className="text-nowrap mb-3 text-2xl underline underline-offset-8">
            Contact Info
          </h2>
          <ul>
            <li>9876543210</li>
            <li>info@merorachana.com</li>
            <li>Lalitpur, Nepal</li>
          </ul>
        </div>
        <nav className="w-2/4">
          <h2 className="text-nowrap mb-3 text-2xl underline underline-offset-8">
            Quick Links
          </h2>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </nav>
        <nav className="w-2/4">
          <h2 className="text-nowrap mb-3 text-2xl underline underline-offset-8">
            Categories
          </h2>
          <ul>
            <li>Poems</li>
            <li>Stories</li>
            <li>Thoughts</li>
            <li>Book Reviews</li>
          </ul>
        </nav>
        <nav className="w-2/4">
          <h2 className="text-nowrap mb-3 text-2xl underline underline-offset-8">
            Quick Links
          </h2>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
      <div className="w-full bg-gray-800 py-3">
        <div className="w-full sm:w-11/12 lg:w-9/12 px-3 mx-auto">
          Copyright © 2024 MeroRachana. Designed & Developed by{" "}
          <Link
            to="https://cli.aeliya.com.np"
            target="_blank"
            className="text-primary underline"
          >
            Aeliyadevs
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
