import React from "react";

const Review = ({review}) => {
  return (
    <div className="w-full bg-yellow-100 shadow-sm p-7 flex flex-col gap-2">
      <h2 className="text-xl">{review.title}</h2>
      <p className="text-sm">{review.description}</p>
      <div className="flex justify-between items-center">
        <img src={review.avatar} alt="" className="w-14 rounded-full" />
        <p>
          {review.name} {review.date}
        </p>
      </div>
    </div>
  );
};

export default Review;
