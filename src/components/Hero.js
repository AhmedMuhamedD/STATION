import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto ">
      <div className="max-h-full relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[700px] bg-black/30 flex flex-col justify-center px-4">
          <h1 className="px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Taste the
            <br /> Experience
          </h1>
          <p className="px-4 pt-5 text-xs sm:text-5xs md:text-xs lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolore, debitis provident blanditiis officiis dicta.
          </p>
          <div className="px-4 flex gap-4">
            <button className="bg-orange-600 w-fit text-white mt-5 text-xs md:text-lg hover:bg-orange-400">
              Exploer Our Menu
            </button>
            {/* <button className="bg-orange-400 w-fit text-white mt-5">
              Book a Table
            </button> */}
          </div>
        </div>

        <img
          className="w-full max-h-[700px] object-cover"
          src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
