import React from "react";
import { categories } from "../data/data.js";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import { orange, yellow } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const Category = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 mb-10">
      <h1 className="font-bold text-4xl text-center m-7">Reservation</h1>
      <p className="flex text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        error saepe non vitae voluptatibus mollitia adipisci.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Temporibus error saepe non vitae
        voluptatibus mollitia adipisci.
      </p>
      <form className="flex flex-col gap-10 mt-11 ">
        <div className="flex">
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
          <div className="flex  flex-1 flex-col justify-center items-center">
            <h1 className="text-2xl text-orange-500 font-bold mb-3">
              Do Not Miss Your Chance
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus error saepe non vitae voluptatibus mollitia
              adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          <button className="w-1/4 outline-none border-none bg-orange-500 text-white  hover:bg-orange-300 ">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
