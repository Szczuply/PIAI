import React from "react";
import { useParams } from "react-router-dom";
import offers from "../../data/offers";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import ImageCarousel from "../components/ImageCarousel";
import reviews from "../../data/reviews";

const OfferDetails = () => {
  const { id } = useParams();
  const offer = offers[id - 1];

  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-5xl flex items-start justify-center flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Wycieczka: {offer.destination}
        </h2>
        <p className="text-green-600 text-md">Cena: {offer.price}</p>
        <img src={offer.images[0]} alt={offer.destination} className="w-full" />
        <Link to={"/"} className="self-center">
          <button className="px-4 py-2 bg-green-600 text-white rounded-sm hover:cursor-pointer">
            Zamów teraz
          </button>
        </Link>

        <ImageCarousel images={offer.images} />

        <div className="w-full bg-green-100 shadow-sm p-7 flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Zalety</h2>
          <ul className="ml-4">
            {offer.advatages.map((advantage, idx) => (
              <li key={idx}>{advantage}</li>
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-100 shadow-sm p-7 flex flex-col gap-2">
          <h2 className="font-semibold text-lg">Opis wycieczki</h2>
          <ul className="ml-4">{offer.description}</ul>
        </div>
        <Review review={reviews[0]} />
        <div className="w-full flex items-center flex-col justify-center gap-4 mt-2">
          <Link to={"/reviews"}>Zobacz więcej opinii</Link>
          <Link to={"/"}>Powrót do strony głównej</Link>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
