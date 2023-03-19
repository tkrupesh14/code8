import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/home/HeroSection";
import { Ouroffering } from "../components/home/Ouroffering";
import { homeObjOne } from "../data/HomeData";
import AboutUs from "../components/AboutUs";
import Ourreach from "../components/home/Ourreach";
import OurPartners from "../components/home/OurPartners";
import Ourcommunity from "../components/home/OurCommunity";
import Eventgallery from "../components/home/Eventgallery";
import Testimonial from "../components/home/Testimonial";
import WhyWithUs from "../components/home/WhyWithUs";
import Stats from "../components/home/Stats";
import Mentorstats from "../components/Mentorstats";
import MobileSAP from "../components/community/MobileSAP";
import CommunityPartners from "../components/CommunityPartners";
import Events from "../components/community/Events";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection {...homeObjOne} />
      <MobileSAP heading="Doing Projects made easy,professionally" description="Learn, Build and conquer like a pro with us. Join the community of thousands of likemind professionals now for free." button="Join Our Community"/>
      <WhyWithUs Heading = "Our Programs"/>
      <AboutUs Heading="About Us" SideHeading="ABOUT" kickLine="Enabling community led peer to peer learning like never before!"/>
      <Stats />
      <Mentorstats/>
      <Testimonial />
      <Events/>
      <Ourcommunity />

    </div>
  );
}
