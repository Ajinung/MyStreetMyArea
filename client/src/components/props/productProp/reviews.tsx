import { AiFillStar } from "react-icons/ai";
import { Reviewers } from ".";

const Reviews = () => {
  return (
    <div className="flex flex-col">
      <div className="flex  items-center gap-3 font-[600] text-lg">
        <AiFillStar /> 4.85 . 292 reviews
      </div>
      <div>
        <Reviewers />
      </div>
      <div></div>
    </div>
  );
};

export default Reviews;
