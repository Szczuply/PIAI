import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center py-4">
        <div className="w-full max-w-5xl">
          <h3 className="font-bold mb-4">Kontakt</h3>
          <ul>
            <li>O nas</li>
            <li>Kariera</li>
            <li>Regulamin</li>
            <li>Polityka prywatności</li>
            <li>Polityka cookise</li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-gray-300 flex justify-center py-4">
        <div className="w-full max-w-5xl flex justify-between items-center">
          <p>© 2025 Biuro Podróży</p>
          <ul className="flex gap-4">
            <li className="hover:cursor-pointer">
              <Link to={"/"}>Facebook</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to={"/"}>Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
