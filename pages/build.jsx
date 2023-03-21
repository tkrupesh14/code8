import React from "react";
import Buildbycode from "../components/Build/Buildbycode";
import Findnexproject from "../components/Build/Findnexproject";
import Howitworks from "../components/Build/Howitworks";
import Stats from "../components/Build/Stats";
import Whatisbuild from "../components/Build/Whatisbuild";
import WhyWithUs from "../components/Build/WhyWithUs";
import Writtinghelloworld from "../components/Build/Writtinghelloworld";
import MobileSAP from "../components/community/MobileSAP";

const build = () => {
  return (
    <div className="build bg-black text-white">
     

      <Whatisbuild />
      <MobileSAP heading=" Master your skill,one project at a time !" description="We have created a wide range of build programs where you can hone
            your skill while working on projects." button="Start Building Project"/>
      {/* <Writtinghelloworld /> */}
      <WhyWithUs />
      <Howitworks />
      <Findnexproject Heading="Explore Projects"/>
      <Stats Heading="Mentors Works At"/>
      {/* <Buildbycode /> */}
    </div>
  );
};

export default build;