import HeadingOne from "../../components/ul/HeadingOne";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import Submit from "../../components/form/Submit";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto my-16">
      <HeadingOne heading="Contact Us" center={true} />
      <p className="text-center mb-8">
        Send you messages and/or queries to us. We will get back to you soon!
      </p>
      <form action="" className="max-w-2xl mx-auto flex flex-col gap-3">
        <div className="flex gap-5">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required={true}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required={false}
          />
        </div>
        <div className="flex gap-5">
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
        <Submit value="Send Message" center={true} />
      </form>
    </div>
  );
};
export default Contact;
