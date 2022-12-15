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
    <div className="flex flex-col  w-full m-auto px-4 py-12  bg-orange-200 justify-around lg:flex-row ">
      <div className="w-18">
        <div className="mb-5 font-bold">Service</div>
        <ul>
          <li className="hover:text-orange-500">Mempership</li>
          <li className="hover:text-orange-500">Products</li>
          <li className="hover:text-orange-500">Branches</li>
          <li className="hover:text-orange-500">Menues</li>
        </ul>
      </div>
      <div>
        <div className="mb-5 font-bold">Company</div>
        <ul>
          <li className="hover:text-orange-500">Quality</li>
          <li className="hover:text-orange-500">Help</li>
          <li className="hover:text-orange-500">Careers</li>
          <li className="hover:text-orange-500">Share</li>
        </ul>
      </div>
      <div>
        <div className="mb-5 font-bold">Our Menu</div>
        <ul>
          <li className="hover:text-orange-500">Breakfast</li>
          <li className="hover:text-orange-500">Lunch</li>
          <li className="hover:text-orange-500">Dinner</li>
          <li className="hover:text-orange-500">Custom</li>
        </ul>
      </div>
      <div>
        <div className="mb-5 font-bold">Contact Us</div>
        <ul>
          <li className="hover:text-orange-500">+00000000000</li>
          <li className="hover:text-orange-500">+01010101010</li>
          <li className="hover:text-orange-500">test@products.com</li>
          <li className="hover:text-orange-500">123 park, Down Town, Earth</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
