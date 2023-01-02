import React from "react";
import { categories } from "../data/data.js";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import { orange, pink } from "@mui/material/colors";

const Category = () => {
  return (
    <div className="max-w-[1500px] m-auto px-4 py-12 ">
      <h1 className="font-bold text-3xl text-center">SERVICES</h1>
      <div className="flex justify-around mt-10 flex-col lg:flex-row   ">
        <div className="flex flex-col justify-center items-center">
          <EmojiFoodBeverageOutlinedIcon
            fontSize="large"
            sx={{ color: orange[800] }}
          />
          <span className="py-4">Breakfast</span>
          <p className="text-center  mx-5 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <LunchDiningOutlinedIcon
            fontSize="large"
            sx={{ color: orange[800] }}
          />
          <span className="py-4">Lunch</span>
          <p className="text-center  mx-5 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <DinnerDiningOutlinedIcon
            fontSize="large"
            sx={{ color: orange[800] }}
          />
          <span className="py-4">Dinner</span>
          <p className="text-center  mx-5 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RestaurantOutlinedIcon
            fontSize="large"
            sx={{ color: orange[800] }}
          />
          <span className="py-4">Custom</span>
          <p className="text-center  mx-5 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
