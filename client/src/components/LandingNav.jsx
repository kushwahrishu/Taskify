import React from "react";
import { Link } from "react-router-dom";
const LandingNav = () => {
  return (
    <nav className="flex items-center justify-between  px-6 py-4 bg-blue-600 text-white shadow-md">
      <div className="text-2xl font-bold">Taskify</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/">
            <p className=" text-xl hover:underline">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/features">
            <p className=" text-xl hover:underline">Features</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p className=" text-xl hover:underline">About</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p className=" text-xl hover:underline">Contact</p>
          </Link>
        </li>
      </ul>
      <Link to="/log-in">
        <button className="bg-white text-sky-500 px-4 py-2 rounded-xl font-semibold hover:bg-sky-100">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default LandingNav;
