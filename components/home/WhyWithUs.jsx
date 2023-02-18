import { motion } from "framer-motion";
import React, { useRef } from "react";
import WhyWithUsCard from "./WhyWithUsCard";

const WhyWithUs = (props) => {
  const { Heading } = props
  return (
    <div className="2xl:mx-72 my-20">
      <p className="text-5xl font-semibold z-20 pb-2 text-center title">
      {Heading}
      </p>

      <div
        id="cards"
        className="grid grid-cols-4 text-center mt-20 pl-56 gap-x-5 gap-y-44 group relative"
      >
        <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14"></div>
        <svg
          width="1090"
          height="1425"
          viewBox="0 0 1090 1425"
          fill="none"
          className="absolute right-0 top-20 overflow-visible opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_14_10)">
            <path
              d="M-64.2789 -6.56634C-36.083 -376.997 507.084 -376.998 535.28 -6.5668V-6.5668C546.545 141.436 664.167 259.056 812.17 270.314V270.314C1182.51 298.484 1182.51 841.517 812.17 869.687V869.687C664.167 880.945 546.545 998.565 535.28 1146.57V1146.57C507.084 1517 -36.0827 1517 -64.2786 1146.57V1146.57C-75.5441 998.566 -193.166 880.945 -341.169 869.687V869.687C-711.511 841.517 -711.511 298.485 -341.169 270.314V270.314C-193.166 259.056 -75.5442 141.436 -64.2789 -6.56634V-6.56634Z"
              fill="url(#paint0_linear_14_10)"
              fill-opacity="0.7"
            />
            <path
              d="M-340.828 274.801C-190.608 263.375 -71.226 143.993 -59.792 -6.22486C-32.0181 -371.111 503.019 -371.112 530.793 -6.22521C542.227 143.993 661.609 263.375 811.829 274.801C1176.63 302.549 1176.63 837.452 811.829 865.2C661.61 876.627 542.227 996.008 530.793 1146.23C503.019 1511.11 -32.0178 1511.11 -59.7918 1146.23C-71.2259 996.009 -190.608 876.627 -340.827 865.2C-705.624 837.452 -705.624 302.55 -340.828 274.801Z"
              stroke="url(#paint1_linear_14_10)"
              stroke-opacity="0.6"
              stroke-width="9"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_14_10"
              x="-738.925"
              y="-404.39"
              width="1948.85"
              height="1948.78"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="60" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_14_10"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_14_10"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_14_10"
              x1="235"
              y1="-226"
              x2="235"
              y2="1550.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#100c2c" />
              <stop offset="0.473671" stop-color="#8571FF" />
              <stop offset="1" stop-color="#0408ff" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_14_10"
              x1="506.001"
              y1="-191.499"
              x2="892.001"
              y2="929.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-6 -left-4 group-hover:blur-md group-hover:top-1 duration-1000 rounded-full"
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
              gradientTransform="translate(32.0Project based experiential learning135 43.343) rotate(73.1167) scale(54.2715)"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <WhyWithUsCard
          title="Project based experiential learning"
          content="Our build program offers project-based learning opportunities in most industry-relevant tech stacks. It helps you hone your skills and let you validate your skills with our industry-standard certification."
        />
        <WhyWithUsCard
          title="Learn what makes you truly industry ready"
          content="We offer a wide range of cohort-based learning courses, which helps you gain extra edge on your learning with project-based experiential learning advantage."
        />
        <WhyWithUsCard
          title="Learn on the go"
          content="Community-driven peer-to-peer learning ecosystem Where you learn among peers from different colleges, share skills, collaborate on projects. Our events, boot camps, and workshops keep you all updated with the latest learning trends"
        />
        
      </div>
    </div>
  );
};

export default WhyWithUs;