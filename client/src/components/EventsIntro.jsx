import React from "react";
import { Link } from "react-router-dom";

const EventsIntro = () => {
  return (
    <div className="h-screen w-full text-twhite mt-40 z-40 overflow-hidden">
      <div className="flex h-screen w-full absolute bg-zinc-300 opacity-50"></div>
      <div className="flex flex-col h-screen w-full justify-center items-center absolute z-40">
        <p className="text-center text-3xl uppercase">
          EVENTS & SPECIAL OCCASIONS
        </p>
        <p className="text-center text-xl italic">Makeup and Styling</p>
        <p className="text-center pt-6 xl:mx-52 leading-10 text-sm">
          Enhance your special occasions with professional makeup and styling.
          <br />
          Whether it's a wedding, photoshoot, or any other event, <br />
          experience a personalized beauty transformation tailored to suit your
          needs.
        </p>
        <Link to="/portfolio">
          <button className="text-center btn">view more</button>
        </Link>
      </div>
      <img
        src="https://images.pexels.com/photos/7514857/pexels-photo-7514857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bride"
        className="h-screen w-full md:object-contain object-cover z-0 overflow-scroll"
      />
    </div>
  );
};

export default EventsIntro;
