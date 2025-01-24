import React from "react";
import { Link } from "react-router-dom";

const ManualNavLink = ({ path, name, icon }) => {
  return (
    <li className="w-full">
      <Link
        to={path}
        className="w-full flex justify-center my-3 py-3 cursor-pointer relative group hover:text-designColor transition-all"
      >
        <div className="text-2xl text-center">{icon}</div>
        <span className="absolute left-0 opacity-0 -z-10 top-1/2 -translate-y-1/2 w-32 text-center px-3 py-1 rounded-3xl  bg-designColor text-xl text-bodyColor uppercase font-semibold transition-all group-hover:left-14 group-hover:z-50 group-hover:opacity-100">
          {name}
        </span>
      </Link>
    </li>
  );
};

export default ManualNavLink;
