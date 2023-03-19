import React from "react";
// import "../styles/Projectcat.css";

// import Newsletter from "../Projectpage/Newsletter";
import TalkToExperts from "../components/TalkToExperts";
import Explorecategories from "../components/project/Explorecategories";
import Image from "next/image";
import Newsletter from "../components/Newsletter";

const Projectcat = () => {
  // const urlquery = new URLSearchParams(window.location.search);
  // const level = urlquery.get("level");

  return (
    <div className="Projectcat bg-black text-white">
      
      <div className="Categories -mt-12">
        <h1>Explore our categories</h1>
        <div className="Category-holder">
          <Explorecategories
            topic={"Web Development"}
            image={"category3"}
            desc={"Explore our curated web development projects to work on different web development tech stacks and hone your skills in website development."}
            options={true}
          />
          <Explorecategories
            topic={"Android Development"}
            image={"category2"}
            desc={"Explore different App development projects and build Apps and gain hands-on expertise and skills in App development."}
            options={true}
          />
          <Explorecategories
            topic={"Blockchain"}
            image={"category1"}
            desc={"Blockchain is the future, explore the projects and get hands-on with the blockchain technology."}
            options={true}
          />
        </div>
      </div>
      <TalkToExperts />
      {/* <Newsletter /> */}
    </div>
  );
};

export default Projectcat;
