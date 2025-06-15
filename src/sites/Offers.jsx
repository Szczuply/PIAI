import React from "react";
import offers from "../../data/offers.js";
import Offer from "../components/Offer.jsx";

const Offers = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-5xl flex items-center justify-center flex-col gap-6">
        <h2 className="self-start text-2xl font-semibold">Oferty</h2>
        <div className="w-full grid grid-cols-3 gap-4">
          {offers.map((offer) => (
            <Offer key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
