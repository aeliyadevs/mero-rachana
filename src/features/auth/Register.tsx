import { Link } from "react-router-dom";
import HeadingOne from "../../components/ui/HeadingOne";
import { Checkbox, Input, Submit } from "../../components/form";

const Register = () => {
  return (
    <div className="w-8/12 mx-auto my-16">
      <HeadingOne heading={"Register User"} center={true} />
      <form action="" className="max-w-2xl mx-auto flex flex-col gap-3">
        <div className="flex gap-5">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required={true}
          />
          {/* <Input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            required={false}
          /> */}
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required={true}
          />
        </div>
        <div className="flex gap-5">
          <Input
            type="text"
            name="userName"
            placeholder="Username"
            required={true}
          />
          <Input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            required={true}
          />
        </div>
        <div className="flex gap-5">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required={true}
          />

          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required={true}
          />
        </div>

        <Checkbox
          label="I agree to the Terms and conditions"
          name="rememberMe"
          required={false}
        />
        <Submit value="Register Now" center={true} />
      </form>
      <div className="text-center mt-3">
        Have an account?{" "}
        <Link to="/login" className="underline text-blue-500">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Register;
