import Image from "next/image";
import React, { useState } from "react";
import styles from '../../styles/Mentors.module.css'

import SmallArrow from "../../assets/images/smallarrow.png";
import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import biginnerImg from '../../public/images/icons/beginner.png'
import intermediateImg from '../../public/images/icons/intermediate.png'
import expertImg from '../../public/images/icons/inter.png'

const Card = (props) => {
  const [msg, setMsg] = useState({ message: "", theme: "success" });
  const openMsg = (message, theme = "success") => {
    setMsg({
      message,
      theme: theme ? theme : "success",
    });

    handleClick();
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const router = useRouter();
  const user = useSelector(userState);

  const handleLearnMore = () => {
    
      router.push("/project_category");
    
  };
  return(

  
    <motion.div
    initial={{ opacity: 0, scale: 0.8, translateY: 10 }}
    animate={{ translateY: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    viewport={{ once: true }}
    className="w-72 text-center group pt-10 w-full relative"
    id="FindNextProject"
  >
  

    
    
      <div className="bg-clip-padding backdrop-filter px-10 py-6 backdrop-blur-xl bg-opacity-60 border border-white/20 to-black bg-gradient-to-tl from-white/10 hover:rotate-1 hover:backdrop-blur-3xl hover:scale-105 group duration-500 rounded-3xl">
        <div>
        <Image src={props.imgLink} alt="ima" width={100} height={100} className="rounded"/>

        </div>
        <div className="text-4xl font-semibold  duration-500 mt-5 mb-10 text-pink-500">
        {props.title}
        </div>
        <div className="mb-5  duration-500">
        {props.content}
        </div>
        <div>
          <button
            onClick={handleLearnMore}
            className="text-pink-500  duration-500  flex items-center gap-2 font-bold text-xl"
          >
            Start Building <FaArrowRight />
          </button>
        </div>
      </div>
      
      
   

    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={msg.theme}
        sx={{ width: "100%" }}
      >
        {msg.message}
      </Alert>
    </Snackbar>
  </motion.div>
  )
}
const data = [
  {
      title: "Beginner",
      imgLink: biginnerImg,
      content: "find a beginner-level project for you. Which requires entry-level skills and a short time to complete."
  },
  {
      title: "Intermediate",
      imgLink: intermediateImg,
      content:"Work on mid-level skill projects with complex problem-solving to advance your skills."
  },
  {
    title: "Expert",
    imgLink: expertImg,
      content: "It's a whole team, multi-domain project where you solve real life problems and develop an MVP."
  },
 
]
const Findnexproject = (props) => {
  const {Heading} = props
  

  return (
    <div>
   <p className="text-4xl font-semibold z-20 mt-12 text-center title">
        {Heading}
        </p>
   <div className={styles.Whatdrivesus}>
         <div className={styles.w__card__holder}>
         <div className="">
      <svg
        className="absolute right-0 -z-0 mt-32"
        width="518"
        height="609"
        viewBox="0 0 518 1109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_147_1030)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1030.5 479.599C989.131 216.712 742.485 37.1352 479.599 78.5024C216.712 119.87 37.1353 366.516 78.5025 629.402C119.87 892.289 366.516 1071.87 629.402 1030.5C892.289 989.131 1071.87 742.485 1030.5 479.599ZM471.909 29.6327C761.785 -15.9815 1033.75 182.032 1079.37 471.909C1124.98 761.785 926.969 1033.75 637.092 1079.37C347.216 1124.98 75.2471 926.969 29.6328 637.092C-15.9814 347.216 182.032 75.247 471.909 29.6327Z"
            fill="url(#paint0_radial_147_1030)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_147_1030"
            x="0.0976562"
            y="0.097229"
            width="1108.81"
            height="1108.81"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="11.5"
              result="effect1_foregroundBlur_147_1030"
            />
          </filter>
          <radialGradient
            id="paint0_radial_147_1030"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(674.359 189.06) rotate(74.043) scale(1430.04)"
          >
            <stop stop-color="#5FD6DA" />
            <stop offset="0.371298" stop-color="#2D9BFD" />
            <stop offset="0.701752" stop-color="#BA84FE" />
            <stop offset="1" stop-color="#FE5C97" />
          </radialGradient>
        </defs>
      </svg>
    </div>
             {data.map((item, index) => {
                 return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
             })}
             
         </div>
         <motion.svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-40 bottom-0 left-1/3 group-hover:-bottom-2 group-hover:blur-sm duration-1000 rounded-full"
        // whileInView={{ rotate: 180, duration: 1000 }}
      >
        <circle
          cx="47.7753"
          cy="47.7753"
          r="47.5"
          transform="rotate(38.7451 47.7753 47.7753)"
          fill="url(#paint0_linear_2_25)"
        />
        <circle
          cx="47.7753"
          cy="47.7753"
          r="47.5"
          transform="rotate(38.7451 47.7753 47.7753)"
          fill="url(#paint1_radial_2_25)"
          fill-opacity="0.4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_25"
            x1="27.2753"
            y1="35.7753"
            x2="47.7753"
            y2="95.2753"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7CB8FF" />
            <stop offset="1" stop-color="#4A51FA" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_2_25"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(32.0135 43.343) rotate(73.1167) scale(54.2715)"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>
     </div>
 </div>
  );
};

export default Findnexproject;
