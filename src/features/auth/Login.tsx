import { Link } from "react-router-dom";
import { Checkbox, Input, Submit } from "../../components/form";
import HeadingOne from "../../components/ui/HeadingOne";

const Login = () => {
  return (
    <div className="w-4/12 mx-auto my-16">
      <HeadingOne heading={"User Login"} center={true} />
      <form action="" className="max-w-2xl mx-auto flex flex-col gap-3">
        {/* <div className="flex gap-5"> */}
        <Input
          type="text"
          name="username"
          placeholder="Username"
          required={true}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required={true}
        />
        <Checkbox label="Remember Me" name="rememberMe" required={false} />
        {/* </div> */}
        <Submit value="Login Now" center={true} />
      </form>
      <div className="text-center mt-3">
        Don't have an account?{" "}
        <Link to="/register" className="underline text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Login;
