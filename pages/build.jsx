import React from "react";
import Buildbycode from "../components/Build/Buildbycode";
import Findnexproject from "../components/Build/Findnexproject";
import Howitworks from "../components/Build/Howitworks";
import Stats from "../components/Build/Stats";
import Whatisbuild from "../components/Build/Whatisbuild";
import WhyWithUs from "../components/Build/WhyWithUs";
import Writtinghelloworld from "../components/Build/Writtinghelloworld";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const build = () => {
  return (
    <div className="build bg-black text-white">
      <AnimatedCursor
        color="255, 255, 255"
        innerStyle={{
          backgroundColor: "transparent",
          width: "20px",
          height: "20px",
          border: "2px solid white",
          boxShadow: "rgb(255 255 255) 0px 0px 20px",
        }}
      />

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
