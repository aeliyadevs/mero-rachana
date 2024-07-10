import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";
import NotFound from "../NotFound";

const Home = () => {
  return (
    <section className="w-9/12 mx-auto py-4">
      <h1 className="text-3xl font-bold bg-slate-700 text-white font-nepaliFont">
        प्रत्येक व्यक्ति को विचार और उसकी अभिव्यक्ति की स्वतन्त्रता का अधिकार है
        ।
      </h1>
      <h2 className="font-primaryFont">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ducimus.
      </h2>

      <PrimaryButton />
    </section>
  );
};
export default Home;
