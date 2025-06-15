import { useState } from "react";
import Review from "../components/Review";
import { Link } from "react-router-dom";

import reviews from "../../data/reviews.js";

function Home() {
  const [direction, setDirection] = useState("");

  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-full max-w-5xl flex items-center justify-center flex-col gap-6">
        <div className="w-full">
          <p className="self-start text-lg">Wpisz miejsce swojej podróży:</p>
          <input
            placeholder="Treść wyszukiwania"
            type="text"
            className={`mt-3 w-full focus:outline-0 border-b-2 py-3 ${
              direction ? "border-green-500" : "border-gray-400"
            }`}
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          />
        </div>
        <div className="w-full">
          <p className="self-start text-lg">Filtrowanie</p>
          <div className="w-full flex gap-4">
            <div className="flex flex-col gap-4 flex-1">
              <select
                name="filtr"
                className="py-4 w-full focus:outline-0 border-gray-400 border-b-2 focus:border-green-600 ease-in duration-200"
              >
                <option value="filtr" disabled>
                  filtr
                </option>
                <option value="opcja1">opcja1</option>
                <option value="opcja2">opcja2</option>
              </select>
              <select
                name="filtr2"
                className="py-4 w-full focus:outline-0 border-gray-400 border-b-2 focus:border-green-600 ease-in duration-200"
              >
                <option value="filtr" disabled>
                  filtr
                </option>
                <option value="opcja1">opcja1</option>
                <option value="opcja2">opcja2</option>
              </select>
              <select
                name="filtr3"
                className="py-4 w-full focus:outline-0 border-gray-400 border-b-2 focus:border-green-600 ease-in duration-200"
              >
                <option value="filtr" disabled>
                  filtr
                </option>
                <option value="opcja1">opcja1</option>
                <option value="opcja2">opcja2</option>
              </select>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <select
                name="filtr4"
                className="py-4 w-full focus:outline-0 border-gray-400 border-b-2 focus:border-green-600 ease-in duration-200"
              >
                <option value="filtr" disabled>
                  filtr
                </option>
                <option value="opcja1">opcja1</option>
                <option value="opcja2">opcja2</option>
              </select>
              <select
                name="filtr5"
                className="py-4 w-full focus:outline-0 border-gray-400 border-b-2 focus:border-green-600 ease-in duration-200"
              >
                <option value="filtr" disabled>
                  filtr
                </option>
                <option value="opcja1">opcja1</option>
                <option value="opcja2">opcja2</option>
              </select>
              <select
                name="filtr6"
                className="py-4 w-full focus:outline-0 border-gray-400 border-b-2 focus:border-green-600 ease-in duration-200"
              >
                <option value="filtr" disabled>
                  filtr
                </option>
                <option value="opcja1">opcja1</option>
                <option value="opcja2">opcja2</option>
              </select>
            </div>
          </div>
        </div>
        <Link to={'/'}>
        <button className="px-4 py-2 bg-green-600 text-white rounded-sm hover:cursor-pointer">
            Wyszukaj
          </button>
        </Link>
         
        <div className="w-full flex flex-col gap-4">
          <p className="self-start text-lg">Zdjęcia naszych klientów</p>
          <img
            src="https://media.istockphoto.com/id/672425798/photo/couple-in-loungers-on-beach-at-maldives.jpg?s=612x612&w=0&k=20&c=EtdtcJ6qsCiEmPB0IUsNfefSArqe7J3MBDGwEqt_WA8="
            alt="img1"
            className="w-full"
          />
          <img
            src="https://media.istockphoto.com/id/1497396873/photo/ready-for-starting-my-beach-holiday.webp?b=1&s=612x612&w=0&k=20&c=icXdMuwbywMK_-pegqalhAuwuo25DP2p7mOGeyv3wFQ="
            alt="img2"
            className="w-full"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="self-start text-lg">Ostatnie recenzje</p>
          {reviews.slice(0, 2).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>

        <Link to={"/reviews"}>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-sm hover:cursor-pointer">
            Więcej recenzji
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
