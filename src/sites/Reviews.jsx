import React from "react";
import reviews from "../../data/reviews.js"
import Review from "../components/Review";
import {Link} from "react-router-dom";

const Reviews = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-5xl flex items-center justify-center flex-col gap-6">
        <h2 className="self-start text-2xl font-semibold">Recenzje</h2>
        {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        <Link to={"/"}><button className="px-4 py-2 bg-gray-600 text-white rounded-sm hover:cursor-pointer">Powrót do strony głównej</button></Link>
      </div>
    </div>
  );
};

export default Reviews;
