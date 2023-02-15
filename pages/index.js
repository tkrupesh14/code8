import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/home/HeroSection";
import { Ouroffering } from "../components/home/Ouroffering";
import { homeObjOne } from "../data/HomeData";
import Aboutcode8 from "../components/home/Aboutcode8";
import Ourreach from "../components/home/Ourreach";
import OurPartners from "../components/home/OurPartners";
import Ourcommunity from "../components/home/OurCommunity";
import Eventgallery from "../components/home/Eventgallery";
import Testimonial from "../components/home/Testimonial";
import WhyWithUs from "../components/home/WhyWithUs";
import Stats from "../components/home/Stats";
import Mentorstats from "../components/Mentorstats";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection {...homeObjOne} />
      <WhyWithUs Heading = "Explore Our Programs"/>
      <Aboutcode8 />
      <Stats />
      <Mentorstats/>
      <Testimonial />
      <Eventgallery />
      <Stats/>
      <Ourcommunity />
    </div>
  );
}
