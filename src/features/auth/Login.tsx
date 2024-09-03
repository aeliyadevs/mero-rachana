import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  return (
    <div className="w-9/12 mx-auto text-center">
      Login Page
      <div>
        Don't have an account?{" "}
        <Link to="/register" className="underline text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Login;
