import Image from "next/image";
import React from "react";
// import "../styles/Talktoexpert.css";
const TalkToExperts = () => {
  return (
    <div className="Talktoexpers">
      <div className="Talktoexpert-desc">
        <h1>Talk to our Experts</h1>
        <div className="Expert-descriptions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          consequuntur. Esse eum similique velit quod perferendis veritatis
          illum repellat sunt non pariatur omnis, recusandae quae mollitia eos
          totam eius quaerat consequuntur libero sapiente impedit voluptate
          debitis quibusdam. Vero, dolorem.
        </div>
        <button className="rounded-full bg-blue-600 p-2 transition-all hover:text-xl ">
          Contact Us <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="Talktoexpert-face">
        <img
          className="overflow-visible h-[30rem]"
          src="/images/Experties.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TalkToExperts;
