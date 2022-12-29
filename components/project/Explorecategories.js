import React from "react";
import styles from "../../styles/projects/Explorecategories.module.css";
import Link from "next/link";

const Explorecategories = (props) => {
  return (
    <div className={`${styles.Explorecategories}`}>
      <div className={`${styles.Category_image}`}>
        <img src={`/images/projects/${props.image}.png`} alt="" />
      </div>
      <div className={`${styles.Category_body}`}>
        <div>
          <div className={`${styles.Category_name}`}>{props.topic}</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam unde
            voluptate nihil dolor perferendis! Porro, ex architecto voluptatum
            sint repellat ut! Nemo.
          </div>
        </div>
        <Link href={`/projects?domain=${props.topic}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      {props.options && (
        <div className={`${styles.Category_operations}`}>
          <Link href="/projects" className="cursor-pointer cat-option">
            <button>Expolore {props?.topic}</button>
          </Link>
          {/* <button className="cat-option 😁">
            Join the community <i className="fa-solid fa-arrow-right"></i>{" "}
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Explorecategories;
