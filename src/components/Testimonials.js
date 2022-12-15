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
    <div className="max-w-[1640px] m-auto px-4 py-12 ">
      {/* Categories */}
      <div className="flex justify-around mt-10  flex-col lg:flex-row bg-orange-50 py-10 px-5">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-52 w-52 rounded-full mb-7"
          />
          <p className="flex text-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            error saepe non vitae voluptatibus mollitia adipisci.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Temporibus error saepe
            non vitae voluptatibus mollitia adipisci.
          </p>
          <div>
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
          </div>
          <span className="py-4 font-bold">Herman Miller</span>
        </div>
        <div className="flex flex-col justify-center items-center mx-5">
          <img
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-52 w-52 rounded-full mb-7"
          />
          <p className="flex text-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            error saepe non vitae voluptatibus mollitia adipisci.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Temporibus error saepe
            non vitae voluptatibus mollitia adipisci.
          </p>
          <div>
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
          </div>
          <span className="py-4 font-bold">Alexander Smith</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-52 w-52 rounded-full mb-7"
          />
          <p className="flex text-center my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            error saepe non vitae voluptatibus mollitia adipisci.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Temporibus error saepe
            non vitae voluptatibus mollitia adipisci.
          </p>
          <div>
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
            <StarIcon sx={{ color: yellow[700] }} />
          </div>
          <span className="py-4 font-bold">Lisa Washington</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
