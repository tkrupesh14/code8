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

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection {...homeObjOne} />
      <MobileSAP heading="Learn, Build & Collabroate" description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help." button="Join Our Community"/>
      <WhyWithUs Heading = "Our Programs"/>
      <AboutUs Heading="About Us" SideHeading="ABOUT"/>
      <Stats />
      <Mentorstats/>
      <Testimonial />
      <Eventgallery />
      <Ourcommunity />
    </div>
  );
}
