import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-9/12 flex justify-center mx-auto p-10">
      <div className="w-2/3 text-slate-800 bg-blue-100 text-center my-10 p-10 rounded-md shadow-lg">
        <p className="text-9xl">404</p>
        <h2 className="text-4xl mb-4">Oops! Page Not Found</h2>
        <p className="mb-4">
          It seems that the page you were looking for doesn't exist. Here are a
          few things you could try:
        </p>
        {/* <ul>
          <li>Check the URL: Make sure the address is spelled correctly.</li>
          <li>Go to the homepage: [Link to Homepage]</li>
          <li>
            Contact Support: If you believe there's a problem with the website,
            please contact us.
          </li>
        </ul> */}
        <Link to="/" className="text-blue-400 underline underline-offset-8">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
