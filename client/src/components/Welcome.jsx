import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen w-full text-white">
      <div className="flex h-screen w-full absolute bg-zinc-200 opacity-80"></div>
      <div className="flex flex-col h-screen w-full justify-center items-center absolute z-40">
        <p className="text-center text-4xl tracking-widest uppercase">
          Embrace Your Beauty
        </p>
        <p className="text-center text-xl italic mt-8">
          A journey of self-discovery and transformation awaits you.
        </p>
        <p className="text-center text-md mt-4 px-6 leading-10">
          Welcome to a place where your beauty is celebrated. <br /> My aim is
          to enhance your natural beauty and make you feel confident in your own
          skin. <br />
          Discover the range of makeup services tailored to suit your unique
          style. <br /> Let's create magic together!
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/3522732/pexels-photo-3522732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="welcome"
        className="h-screen w-full bg-center overflow-hidden	md:object-contain object-cover -z-999	opacity-40"
      />
    </div>
  );
};

export default Welcome;
