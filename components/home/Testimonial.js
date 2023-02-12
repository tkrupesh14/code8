import React from "react";
import { useState, useEffect } from "react";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home/Testimonial.module.css";

//new imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Card = (props) => {
  return (
    <div className={`${styles.testimonial_card} group-hover:bg-blue-600 duration-1000 testimonial-card`}>
      <img
        className={`${styles.img_home}`}
        style={{ borderRadius: "50%" }}
        src={props.image_url}
      ></img>
      <div className={`${styles.Name_holder}`}>{props.name}</div>
      {props.orgnaization && (
        <p className={`${styles.orgnaization}`}>{props.orgnaization}</p>
      )}
      {/* <img id="img-rating" src="https://github.com/KapadiaShubham/code8-media/blob/master/home/img/rating.png?raw=true" ></img> */}
      <div className={`${styles.testimonial_exp}`}>{props.description}</div>
    </div>
  );
};
const data = [
  {
    name: "Aman",
    orgnaization: "Team Upanyaas",
    image_url: "https://i.imgur.com/oHXxXRI.jpg",
    description:
      "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad that we at upanyas decided to work with you. It’s really great how easy it was for us to get hands on good engineers and everyone and Code8 made sure that the onboarding was as smooth as possible. Cheers to you guys. Looking forward to work with the team in the near future as well.",
  },
  {
    name: "Gurtaran Singh",
    orgnaization: "Gaming Geeks",
    image_url: "https://i.imgur.com/AUTr7Ym.jpg",
    description:
      "Working with Code8 was very amazing and informative.  Gaming Geeks collaborated with Code8 on the Web Game Dev Bootcamp that took place from February 24 to March 2, 2022. Prior to the event, we felt it would be difficult for both teams to make one decision because we were two different communities managed by members of different age groups, different experiences, but the Code8 team was brilliant in unity, teamwork and hard work.  Our whole team is very grateful to Code8 as they have worked not only for the event, but they also give a lot of talks and advice to our team. In the end, I would like to say that If we got another chance to collaborate with the Team, we will be more than happy to do so.",
  },
  {
    name: "Aaditya",
    orgnaization: "Befikra Community",
    image_url: "https://i.imgur.com/r3oBDMR.jpg",
    description:
      "My experience with Code8 have been amazing and the founders are so cool and they have helped us grow in our domain in the ecosystem they provide. They have also previously conducted hackathons and events on blockchain development which were really awesome. I am happy to be part of Code8 community. Wishing more growth to code8 and to learn more from the community.",
  },
  {
    name: "Vikas Rai",
    image_url: "https://i.imgur.com/rifOyjI.jpg",
    description: `Hello everyone, I'm Vikas Rai. Recently I attended TezIndia Blockchain Bootcamp 1.0. The Bootcamp was amazing. I didn't have any previous knowledge about Web 3.0. So this Bootcamp was very helpful to get to know about Web 3.0 and also get familiarized with Tezos Blockchain.

        The mentor was very knowledgeable and explained everything nicely.
        It was a one-week-long Bootcamp and after the end of Bootcamp, we also have to make the projects based on Tezos Blockchain.
        
        So, regarding that, I planned to build the "NFT Domain Marketplace" (Where people can buy web3 domain names).
        
        I got stuck at various points while building projects but thanks to the mentors and members of the Bootcamp they helped a lot in clearing our doubts and also suggesting the solution to our problem.
        
        In the end, I would like to say that the overall experience of this Bootcamp is so amazing and I wish they organize these kinds of Bootcamp again.
        `,
  },
];
const Testimonial = () => {
  //will give error as it will execute on server side and window will give error
  const [matches900, setMatches900] = useState();
  const [matches550, setMatches550] = useState();
  useEffect(() => {
    setMatches900(window.matchMedia("(max-width: 900px)").matches);
    setMatches550(window.matchMedia("(mmax-width: 550px)").matches);

    window
      .matchMedia("(max-width: 900px) and (min-width: 550px)")
      .addEventListener("change", (e) => setMatches900(e.matches));

    window
      .matchMedia("(max-width: 550px)")
      .addEventListener("change", (e) => setMatches550(e.matches));
  }, []);
  useEffect(() => {
    console.log(matches550, matches900);
  }, [matches550, matches900]);
  return (
    <div className={`${styles.Testimonial}`}>
      <div className={`${styles.Testimonial_head}`}>
        <h1 className="title text-5xl mb-10">Testimonials</h1>
      </div>
      <h2>Some amazing experiences from techies around.</h2>
      <div className={`${styles.Testimonial_holder}`}>
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={!matches900 && !matches550 ? 3 : matches900 ? 2 : 1}
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          className={"mySwiper"}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className={`${styles.myswiperslide}`}>
                <Card
                  name={item.name}
                  orgnaization={item.orgnaization}
                  image_url={item.image_url}
                  description={item.description}
                  className=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
