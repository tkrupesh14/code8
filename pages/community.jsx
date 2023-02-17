import React from 'react'
import Ourcommunity from '../components/home/OurCommunity'
import MobileSAP from '../components/community/MobileSAP'
import SAP from '../components/community/SAP'
import styles from '../styles/home/Community.module.css'
import Features from '../components/Features/Features'
import Mentorstats from '../components/Mentorstats'
import WorkshopsCard from '../components/community/WorkshopsCard'
// import styles from '../styles/home/OurCommunity.module.css'
// import BuiltTop from '../components/community/BuiltTop'
// import EventsDiv from '../components/community/EventsDiv'



const community = () => {
  return (
    <div className="bg-black text-white">
      {/* Join Us
      <BuiltTop /> */}

      <SAP />

      <MobileSAP />
      <WorkshopsCard Heading="Our Workshops"/>
      <Features />

      {/* <EventsDiv/> */}

      <Mentorstats />
 
      <Ourcommunity/>
    </div>
  )
}

export default community
