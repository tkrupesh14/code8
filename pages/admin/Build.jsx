import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "../../Admin/components/Sidebar";
import styles from "../../styles/admin/Build.module.css";
import profile from "../../assets/images/profile.png";
import { BiSearchAlt } from "react-icons/bi";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useAddProjectMutation } from "../../redux/features/allSlice";
import { Alert, Snackbar } from "@mui/material";

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
  const [value, setValue] = useState(``);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
  });

  useEffect(() => {
    setProjectData((prev) => ({
      ...prev,
      description: value,
    }));
  }, [value]);

  const [addProjectFunction, addProjectResponse] = useAddProjectMutation();

  const handleSubmit = () => {
    addProjectFunction(projectData);
  };
  const handleChange = (e) => {
    setProjectData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (addProjectResponse.isSuccess) {
      openMsg("Project Uploaded Succesfully!");
      setProjectData({
        title: "",
        category: "",
        description: "",
        level: "",
      });
    } else if (addProjectResponse.isError) {
      openMsg(addProjectResponse.error?.data?.message, "error");
      console.log(addProjectResponse);
    }
  }, [addProjectResponse]);

  console.log("Project Data: ", projectData);

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

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen w-full list-disc" data-color-mode="dark">
        <div className="px-10 py-5 flex justify-between">
          <input
            name="title"
            placeholder="Title"
            type="text"
            className="bg-transparent w-72 border rounded-full px-5 border-black/50"
            value={projectData.title}
            onChange={handleChange}
          />

          <div className="flex items-center gap-3">
            <p>Project Category</p>
            <select
              name={"category"}
              id="category"
              className="bg-transparent border border-black/50 rounded-md px-5 py-2 w-56"
              value={projectData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="WEB_DEVELOPMENT">Web Development</option>
              <option value="APP_DEVELOPMENT">App Development</option>
              <option value="BLOCKCHAIN">Blockchain</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <p>Project Level</p>
            <select
              name={"level"}
              id="level"
              className="bg-transparent border border-black/50 rounded-md px-5 py-2 w-44"
              defaultValue={projectData.level}
              onChange={handleChange}
            >
              <option value="">Select Level</option>
              <option value="BEGINNER">Beginner</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="ADVANCED">Advanced</option>
            </select>
          </div>

          <div>
            <button
              className="border px-5 py-2 rounded-full"
              onClick={handleSubmit}
            >
              Upload Project
            </button>
          </div>
        </div>
        <MDEditor height={"100%"} value={value} onChange={setValue} />
        <div style={{ paddingTop: 50 }}>
          <Markdown source={value} />
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
