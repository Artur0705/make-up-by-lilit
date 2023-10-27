import React from "react";
import { Link } from "react-router-dom";

const Fashion = () => {
  return (
    <div className="h-screen w-full text-twhite mt-40">
      <div className="flex h-screen w-full absolute bg-zinc-300 opacity-50"></div>
      <div className="flex flex-col h-screen w-full justify-center items-center absolute z-40">
        <p className="text-center text-4xl tracking-widest uppercase">
          Fashion
        </p>
        <p className="text-center text-xl italic">
          Fashion, Commercial, Editorial
        </p>
        <p className="text-center text-xl italic">Make-up</p>
        <Link to="/portfolio">
          <button className="btn text-center">view more</button>
        </Link>
      </div>
      <img
        loading="lazy"
        src="https://images.pexels.com/photos/6648493/pexels-photo-6648493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fashion"
        className="h-screen w-full md:object-contain object-cover z-0 overflow-scroll"
      />
    </div>
  );
};

export default Fashion;
