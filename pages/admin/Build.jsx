import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../../Admin/components/Sidebar";
import styles from "../../styles/admin/Build.module.css";
import profile from "../../assets/images/profile.png";
import { BiSearchAlt } from "react-icons/bi";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);
const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);

const Build = () => {
  const [value, setValue] = useState(`
  # 🚀 Documentation For Project

  ### Project Title: 🌦️  **WEATHER FORECAST WEBSITE**
  ### Problem Statement: To determine how the atmosphere evolves in the future.
  
  1. ⌛ Short-term weather forecast prediction
  2. 👆 To know different parameters of weather in single click.
  3. 💻 Collect 5-day data in a single frame 
  
  ----------
  
  ## Idea/Solution:
  
  > *A seven-day forecast can accurately predict the weather about 80 percent of the time and a five-day forecast can accurately predict the weather approximately
   90 percent of the time.*
  
  - Create a platform where you can get all type of measurements and activities related to weather.
  - A page where you get 5-day weather data, that helps in your travelling planning for future. 
  - Web page that provides current weather location for any city across India. 
  
  ### Tech Stack Used:-
  
  <p align="center">
    <a href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
    </a>
  </p>
  
  [Project Badge Link](https://shields.io/)
  
  
  - HTML5
  - CSS3
  - BOOTSTRAP
  - JAVASCRIPT 
  - JQUERY
  
  ### Technical Description: 
  **It is a weather forecasting website where you can enter your city names to collect the weather data for next 5-days, along with other parameters that helps you in your travel planning. As such when you enter your city name, it would create a request to current API used in this project. API then send the all the data and sub-parameters that fulfil your demand.**
  
  ### Prototyping Steps: 
  
  - We start from creating 3 main files in this project i.e., index.html, style.css and code.js
  - In index.html file, we create a skeleton structure for our project, such as where to place, what to place etc.
  - Also in index.html we import few resources that help to make our website more responsive such as bootstrap and jquerry libraries.
  
  - We’ve also import an API with its API key that’s helping in our web page to get the data. 
  - We connect our API to our website through Jquerry function. 
  - CSS and Bootstrap helps to get designing and maintain the styling of web page and entire website. 
  - Atlast the javascript file helps us to store the data and represent the data as well as permit/request and 
    access the request of the user as it is the browser’s language. 
  
  Prerequisites, Author, Collaborator
  
  
  ## Resouces: XYZ
  ### Download [Github link](https://github.com/ImAyansarkar/weather_app)
  
  ## Demo
  ### [Netlify Link](https://heartfelt-cranachan-3f1b40.netlify.app/)
  
  
  `);

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="w-full h-screen list-disc" data-color-mode="dark">
        <MDEditor height={"100%"} value={value} onChange={setValue} />
        <div style={{ paddingTop: 50 }}>
          <Markdown source={value} />
        </div>
        {/* <EditerMarkdown source={value} /> */}
      </div>

      {/* Previous Code */}
      {/* <div className={styles.mainscreen}>
        <div className={styles.buildHead}>
          <div className={styles.buildHeadLeft}>
            <div className={styles.buildHeadText}>Weclome Back Jimmy</div>
          </div>
          <div className={styles.buildHeadright}>
            <div className={styles.buildProfile}>
              <Image
                src={profile}
                width={70}
                height={70}
                alt="profile"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.buildSearch}>
              <input type="text" placeholder='Search' />
            </div>
          </div>
        </div>
        <div className={styles.Choose_holder}>
          <div className={styles.Choose_heading}>Choose Category</div>
          <div className={styles.Choose_box}>
            <div className={styles.Choose_head}>Existing Category</div>
            <hr />
            <div className={styles.Choices}>cat-1</div>
            <div className={styles.Choices}>cat-2</div>
            <div className={styles.Choices}>cat-3</div>
          </div>
          <div className={styles.Add_new}> Add new category </div>
        </div>
        <div className={styles.Bottom_buttons}>
          <button className={styles.Save}>Save</button>
          <button className={styles.Next}>Next</button>
        </div>
      </div> */}
    </div>
  );
};

export default Build;
