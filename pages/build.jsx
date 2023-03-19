import React from "react";
import Buildbycode from "../components/Build/Buildbycode";
import Findnexproject from "../components/Build/Findnexproject";
import Howitworks from "../components/Build/Howitworks";
import Stats from "../components/Build/Stats";
import Whatisbuild from "../components/Build/Whatisbuild";
import WhyWithUs from "../components/Build/WhyWithUs";
import Writtinghelloworld from "../components/Build/Writtinghelloworld";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";


const build = () => {
  return (
    <div className="build bg-black text-white">
     

      <Whatisbuild />
      {/* <Writtinghelloworld /> */}
      <WhyWithUs />
      <Howitworks />
      <Findnexproject />
      <Stats />
     

      {/* <Buildbycode /> */}
    </div>
  );
};

export default build;
