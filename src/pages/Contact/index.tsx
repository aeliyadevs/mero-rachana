import HeadingOne from "../../components/ul/HeadingOne";
import Input from "../../components/ul/Input";
import Textarea from "../../components/ul/Textarea";

const Contact = () => {
  return (
    <div className="w-9/12 mx-auto my-12">
      <HeadingOne heading="Contact Us" />
      <form action="" className="flex flex-col gap-6">
        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required={true}
        />
        <div className="flex gap-6">
          <Input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            required={true}
          />
          <Input
            type="number"
            name="contactNumber"
            placeholder="Contact Number"
            required={false}
          />
        </div>
        <Textarea name="message" placeholder="Your message" />
        <input
          type="submit"
          value="Post"
          className="w-32 p-2 bg-blue-600 text-white rounded-md"
        />
      </form>
    </div>
  );
};
export default Contact;
