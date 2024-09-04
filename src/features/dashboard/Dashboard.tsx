import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-9/12 mx-auto my-16 text-center">
      <div>
        Hello <span className="font-semibold">Aeliya</span>, Welcome to the
        dashboard!
      </div>
      <Link to="/" className="text-blue-500 text-center">
        Back to Homepage
      </Link>
    </div>
  );
};
export default Dashboard;
