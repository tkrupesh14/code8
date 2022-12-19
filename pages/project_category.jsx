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
    <div className="Projectcat">
      <div className="Projectcat-head">
        <div className="Projectheadleft">
          <h1>Introducing Code8 Project Hub</h1>
          <div className="Projectheadleft-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
            sint, reprehenderit ex quidem repellendus dicta voluptatum nemo at
            ducimus exercitationem, dolor quasi libero laboriosam impedit?
          </div>
          <div className="Search-project">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              className="bg-transparent"
              placeholder="Search"
            />
          </div>
          <div className="Level">Level : </div>
        </div>
        <div className="Project-head-face">
          <Image
            width="600px"
            height="500"
            src="/images/projects/Projectpage2.png"
            alt="Project page 2"
          />
        </div>
      </div>
      <div className="Categories">
        <h1>Explore our categories</h1>
        <div className="Category-holder">
          <Explorecategories
            topic={"Web Development"}
            image={"category3"}
            options={true}
          />
          <Explorecategories
            topic={"Android Development"}
            image={"category2"}
            options={true}
          />
          <Explorecategories
            topic={"Blockchain"}
            image={"category1"}
            options={true}
          />
        </div>
      </div>
      <TalkToExperts />
      <Newsletter />
    </div>
  );
};

export default Projectcat;
