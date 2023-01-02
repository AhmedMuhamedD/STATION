import React from "react";

const Category = () => {
  return (
    <div className="max-w-[1400px] m-auto px-4 py-12 mb-10">
      <form className="flex flex-col gap-10 mt-11 ">
        <div className="flex ">
          <div className="flex flex-col text-white flex-1 justify-start ">
            <input
              type="text"
              id="username"
              placeholder="Enter Your Name"
              className="border-b focus:outline-none text-black py-2 my-2 w-1/2"
            />

            <input
              type="date"
              id="date"
              className="border-b focus:outline-none text-gray-400 py-2 my-2 w-1/2"
            />

            <input
              type="text"
              id="time"
              placeholder="Phone Number"
              className="border-b focus:outline-none text-black py-2 my-2 w-1/2"
            />

            <input
              type="number"
              id="number"
              placeholder="Selec Number"
              className="border-b focus:outline-none text-black py-2 my-2 w-1/2"
            />
          </div>
          <div className="flex  flex-1 flex-col justify-center items-start">
            <h1 className="text-3xl text-black-500 font-bold mb-3">
              Do Not
              <br /> Miss Your<span className="text-orange-500"> Chance</span>
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus error saepe non vitae voluptatibus mollitia
              adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          <button className="w-fit  outline-none border-none bg-orange-500 text-white  hover:bg-orange-300 ">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
