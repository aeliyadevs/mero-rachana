import Author from "../components/Author";
import Meta from "../components/Meta";
import SocialShare from "../components/SocialShare";
import HeadingOne from "../components/ul/HeadingOne";
import HeadingTwo from "../components/ul/HeadingTwo";

interface ComponentProps {
  type: string;
  postId: string | undefined;
}
const Single: React.FC<ComponentProps> = ({ type, postId }) => {
  return (
    <article className="w-6/12 mx-auto my-20 flex flex-col">
      <img
        className="rounded-md mb-6"
        src="https://st.depositphotos.com/1005563/4941/i/450/depositphotos_49418809-stock-photo-frog-on-the-leaf.jpg"
        alt=""
      />
      <div className="flex justify-between items-center px-4 mb-10 border-l-4 border-lime-200">
        <Author />
        <Meta />
      </div>
      <HeadingOne type={type} postId={postId} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, eaque
        illo! Repellat quisquam vero laborum, non exercitationem optio. Sunt
        voluptas repellat tempora dolor dolorum ipsam veniam minima culpa magni,
        soluta ex illum at. Placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        expedita dignissimos placeat quam necessitatibus. Saepe nemo unde odio
        commodi veniam distinctio delectus voluptas quos mollitia aliquam
        voluptatum omnis explicabo eos, dolor odit sint eum placeat sed quaerat
        cumque a. Similique minus modi laudantium delectus velit!
      </p>
      <HeadingTwo heading="Lorem ipsum dolor sit amet" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, eaque
        illo! Repellat quisquam vero laborum, non exercitationem optio. Sunt
        voluptas repellat tempora dolor dolorum ipsam veniam minima culpa magni,
        soluta ex illum at. Placeat.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        expedita dignissimos placeat quam necessitatibus. Saepe nemo unde odio
        commodi veniam distinctio delectus voluptas quos mollitia aliquam
        voluptatum omnis explicabo eos, dolor odit sint eum placeat sed quaerat
        cumque a. Similique minus modi laudantium delectus velit!
      </p>
      <SocialShare />
    </article>
  );
};
export default Single;
