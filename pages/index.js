import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/home/HeroSection'
import { Ouroffering } from '../components/home/Ouroffering'
import { homeObjOne } from '../data/HomeData'
import Aboutcode8 from '../components/home/Aboutcode8'
import Stats from '../components/home/Stats'
import Ourreach from '../components/home/Ourreach'
import OurPartners from '../components/home/OurPartners'
import Ourcommunity from '../components/home/OurCommunity'
import Eventgallery from '../components/home/Eventgallery'
import Testimonial from '../components/home/Testimonial'

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Ouroffering Heading={'Explore our programs'} />
      <Aboutcode8/>
      <Stats/>
      <Ourreach/>
      <Testimonial/>
      <Eventgallery/>
      <OurPartners/>
      <Ourcommunity/>
    </>
  )
}
