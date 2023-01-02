import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto  py-12 grid md:grid-cols-4 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-4 pt-6">Starter</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[260px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1553683374-242e9f9567f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-4 pt-6">Main</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[260px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1564436872-f6d81182df12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-4 pt-6">Desserts</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[260px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
          <p className="font-bold text-2xl px-4 pt-6">Drinks</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[260px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
