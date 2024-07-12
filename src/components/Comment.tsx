import HeadingThree from "./ul/HeadingThree";

const Comment = () => {
  return (
    <>
      <HeadingThree heading="Leave a comment." />
      <p className="pb-3">2 comments</p>
      <div>
        <div className="flex mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/25717458?v=4"
            alt=""
            className="w-10 h-10 rounded-full mt-2 mr-2"
          />
          <div>
            <h4 className="font-bold">Aeliyadevs</h4>
            <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit.</p>
            <div className="flex gap-4 text-sm font-semibold">
              <p>30 Likes</p>
              <p>Reply</p>
            </div>
          </div>
        </div>
        <div className="flex mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/25717458?v=4"
            alt=""
            className="w-10 h-10 rounded-full mt-2 mr-2"
          />
          <div>
            <h4 className="font-bold">Aeliyadevs</h4>
            <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit.</p>
            <div className="flex gap-4 text-sm font-semibold">
              <p>30 Likes</p>
              <p>Reply</p>
            </div>
          </div>
        </div>
      </div>
      <form action="">
        <textarea
          name="comment"
          id="comment"
          className="w-full border-2 rounded-md p-4 mb-2 resize-none"
          placeholder="Add a comment"
        />
        <input
          type="submit"
          value="Post"
          className="w-32 p-2 bg-blue-600 text-white rounded-md"
        />
      </form>
    </>
  );
};
export default Comment;
