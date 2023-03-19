import React from 'react'
import Ourcommunity from '../components/home/OurCommunity'
import MobileSAP from '../components/community/MobileSAP'
import SAP from '../components/community/SAP'
import styles from '../styles/home/Community.module.css'
import Features from '../components/Features/Features'
import Mentorstats from '../components/Mentorstats'
import WorkshopsCard from '../components/community/WorkshopsCard'
import Mentors from '../components/community/mentors'
import CommunityPartners from '../components/CommunityPartners'
import Events from '../components/community/Events'
// import styles from '../styles/home/OurCommunity.module.css'
// import BuiltTop from '../components/community/BuiltTop'
// import EventsDiv from '../components/community/EventsDiv'



const community = () => {
  return (
    <div className="bg-black text-white">
      {/* Join Us
      <BuiltTop /> */}

      <SAP />

      <MobileSAP heading="Learn, Build & Collabroate" description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help." button="Join Our Community"/>
      <Features />
      {/* <Mentors Heading = "Our Mentors" />
      <WorkshopsCard Heading="Our Workshops"/> */}

      {/* <EventsDiv/> */}

      <Mentorstats />
      <CommunityPartners />
      <Events/>
      <Ourcommunity/>
    </div>
  )
}

export default community
