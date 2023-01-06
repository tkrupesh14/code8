import React from "react";

const WhyWithUs = () => {
  return (
    <div className="2xl:mx-72 my-20">
      <p className="text-5xl font-semibold z-20 pb-2 text-center title">
        Why build project with us?
      </p>

      <div className="grid grid-cols-4 text-center mt-20 gap-x-5 gap-y-44 group relative">
        <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14"></div>
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
              gradientTransform="translate(32.0135 43.343) rotate(73.1167) scale(54.2715)"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10">
          <div className="text-2xl font-semibold duration-500 mt-5 mb-10 text-pink-500">
            Community led learning programs
          </div>
          <div className="mb-5 duration-500 text-center">
            Learn with the community and start building from day1 with our best
            curated resources.
          </div>
        </div>
        <div className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-slate-800/50 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10">
          <div className="text-2xl font-semibold duration-500 mt-5 mb-10 text-pink-500">
            24x7 community support
          </div>
          <div className="mb-5 duration-500 text-center">
            Discuss and Collab with likemind and experts from our community to
            build projects.
          </div>
        </div>
        <div className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-slate-800/50 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10">
          <div className="text-2xl font-semibold duration-500 mt-5 mb-10 text-pink-500">
            Best in class curated projects.
          </div>
          <div className="mb-5 duration-500 text-center">
            Our projects and curriculum help you achieve industry standard
            skills and experience.
          </div>
        </div>
        <div className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-slate-800/50 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10">
          <div className="text-2xl font-semibold duration-500 mt-5 mb-10 text-pink-500">
            Earn skill badges and certificates.
          </div>
          <div className="mb-5 duration-500 text-center">
            Earn our badges and certificates that help you land internships,
            projects and jobs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWithUs;
