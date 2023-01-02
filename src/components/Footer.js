import React from "react";

const Category = () => {
  const Services = ["Mebmbership", "Producs", "Branches", "Menus"];
  const Company = ["Quality", "Help", "Careers", "Share"];
  const ourMenu = ["Breatfast", "Lunch", "Dinner", "Custom"];
  const contactUs = [
    "+02154235874",
    "+01010101010",
    "test@products.com",
    "123 park, Down Town, Earth",
  ];
  return (
    <div className="flex flex-col  w-full m-auto px-4 py-12  bg-orange-200 justify-around lg:flex-row ">
      <div className="grid grid-col-1 gap-4 lg:grid-cols-2 max-w-[1400px]">
        <div>
          <h3 className="pb-4 font-bold">About Us</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolore, debitis provident blanditiis officiis dicta
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1600px]">
          <div>
            <div className="mb-5 font-bold">Service</div>
            <ul>
              {Services.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-5 font-bold">Company</div>
            <ul>
              {Company.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-5 font-bold">Our Menu</div>
            <ul>
              {ourMenu.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-5 font-bold">Contact Us</div>
            <ul>
              {contactUs.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
