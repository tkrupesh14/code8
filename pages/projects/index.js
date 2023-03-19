import { useEffect } from "react";
import Explorecategories from "../../components/project/Explorecategories";
import Projects from "../../components/project/projects";
import { useAllProjectsQuery } from "../../redux/features/allSlice";
import styles from "../../styles/projects/Projectpage.module.css";
const Projectpage = () => {
  const allProjects = useAllProjectsQuery();
  useEffect(() => {
    allProjects.refetch();
  }, []);
  return (
    <div className="bg-black text-white">
    <div className={`${styles.Projectpage}`}>
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
      <div className={`${styles.Projects_holder}`}>
        {allProjects?.data?.projects?.map((project) => (
          <Projects
            key={project?._id}
            title={project?.title}
            description={project?.shortDescription}
            id={project?._id}
            technologies={project?.technologies}
          />
        ))}
      </div>

      <div className={`${styles.Categories}`}>
        <h1>Explore our categories</h1>
        <div className={`${styles.Category_holder}`}>
          <Explorecategories
            topic={"Web Development"}
            image={"category3"}
            desc={"Explore our curated web development projects to work on different web development tech stacks and hone your skills in website development."}
            options={false}
          />
          <Explorecategories
            topic={"Android Development"}
            image={"category2"}
            desc={"Explore different App development projects and build Apps and gain hands-on expertise and skills in App development."}
            options={false}
          />
          <Explorecategories
            topic={"Blockchain"}
            image={"category1"}
            desc={"Blockchain is the future, explore the projects and get hands-on with the blockchain technology."}
            options={false}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projectpage;
