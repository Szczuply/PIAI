import React from "react";
import { Link } from "react-router-dom";

const Offer = ({ offer }) => {
  return (
    <Link to={`/offers/${offer.id}`}>
      <div className="w-full border-2 rounded-md border-gray-200 p-4 flex flex-col gap-4 hover:cursor-pointer">
        <img
          src={offer.images[0]}
          alt={offer.destination}
          className="rounded-sm shadow-lg"
        />
        <p className="text-blue-400 text-md font-semibold">
          {offer.destination}
        </p>
        <p className="text-green-600 text-md font-bold">{offer.price}</p>
      </div>
    </Link>
  );
};

export default Offer;
