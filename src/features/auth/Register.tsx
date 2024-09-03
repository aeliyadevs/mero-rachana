import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-9/12 mx-auto text-center">
      Register Page
      <div>
        Have an account?{" "}
        <Link to="/login" className="underline text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Register;
