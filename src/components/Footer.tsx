const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="w-9/12 mx-auto mb-4 pt-12">
        <p className="text-5xl mb-4 font-bold">
          Mero<span className="font-light">Rachana</span>
        </p>
        <p className="pb-4">A common platform for Nepali writers and readers</p>
      </div>
      <div className="w-9/12 mx-auto flex mb-4 pb-12">
        <div className="contact-info w-2/4">
          <h2 className="mb-3 text-2xl underline underline-offset-8">
            Contact Info
          </h2>
          <ul>
            <li>9876543210</li>
            <li>info@merorachana.com</li>
            <li>Lalitpur, Nepal</li>
          </ul>
        </div>
        <nav className="w-2/4">
          <h2 className="mb-3 text-2xl underline underline-offset-8">
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
          <h2 className="mb-3 text-2xl underline underline-offset-8">
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
          <h2 className="mb-3 text-2xl underline underline-offset-8">
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
      <div className="w-full bg-gray-900 py-3">
        <div className="w-9/12 mx-auto">Copyright © 2024 MeroRachana.</div>
      </div>
    </footer>
  );
};
export default Footer;
