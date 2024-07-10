import HeadingOne from "../components/ul/HeadingOne";

interface ComponentProps {
  type: string;
  postId: string | undefined;
}
const Single: React.FC<ComponentProps> = ({ type, postId }) => {
  return (
    <article className="w-6/12 mx-auto my-20 flex flex-col">
      <HeadingOne type={type} postId={postId} />
      <img
        className="rounded-md mb-6"
        src="https://st.depositphotos.com/1005563/4941/i/450/depositphotos_49418809-stock-photo-frog-on-the-leaf.jpg"
        alt=""
      />
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
    </article>
  );
};
export default Single;
