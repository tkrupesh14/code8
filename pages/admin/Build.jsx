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

import { useDispatch, useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import Select from "react-select";
import { uploadFile } from "../../redux/features/fileUploadSlice";

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
  const user = useSelector(userState);
  if (!user?.user?.isAdmin) return null;

  const [value, setValue] = useState(``);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    shortDescription: "",
    technologies: [],
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
        shortDescription: "",
        technologies: [],
      });
      setTechArray([]);
      setTech("");
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

  const [techArray, setTechArray] = useState([]);
  const [tech, setTech] = useState("");

  const handleTechSubmit = (e) => {
    e.preventDefault();
    if (!tech) return;
    setTechArray((prev) => [...prev, tech]);
    setTech("");
  };

  useEffect(() => {
    setProjectData((prev) => ({
      ...prev,
      technologies: techArray,
    }));
  }, [techArray]);

  console.log("Tech Array", techArray);

  const dispatch = useDispatch();

  const [file, setFile] = useState();
  const [url, setUrl] = useState("");

  const handleFileUpload = async (e) => {
    setUrl("");
    e.preventDefault();
    if (file) {
      await dispatch(uploadFile({ file: file, folder: "project" })).then(
        (response) => {
          console.log("response: ", response);
          if (response?.payload?.status == 200) {
            setFile();
            setUrl(response?.payload?.data?.url);
            openMsg("File Uploaded Successfully!");
          } else {
            openMsg(response?.payload, "error");
          }
        }
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen w-full list-disc" data-color-mode="dark">
        <h1 className="font-semibold text-4xl p-5">Build</h1>
        <hr />
        <div className="grid grid-cols-2 gap-10">
          <div className="px-10 py-5 flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="pr-10">Title </label>
              <input
                name="title"
                placeholder="Title"
                type="text"
                className="bg-transparent w-72 border rounded-full px-5 py-2 border-black/50"
                value={projectData.title}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-3 justify-between">
              <label htmlFor="" className="pr-10">Project Category</label>
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

            <div className="flex items-center gap-3 justify-between">
              <label htmlFor="" className="pr-10">Project Level</label>
              <select
                name={"level"}
                id="level"
                className="bg-transparent border border-black/50 rounded-md px-5 py-2 w-44"
                defaultValue={projectData.level}
                onChange={handleChange}
              >https://code8-s3.s3.ap-south-1.amazonaws.com/Logo/LOGO+HORIZONTAL+blue+grad.png
                <option value="">Select Level</option>
                <option value="BEGINNER">Beginner</option>
                <option value="INTERMEDIATE">Intermediate</option>
                <option value="ADVANCED">Advanced</option>
              </select>
            </div>

            <div>
              <button
                className="bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Upload Project
              </button>
            </div>
          </div>

          <div className="px-10 py-5 flex flex-col gap-5 justify-between">
            <label htmlFor="" className="pr-10">Short Description</label>
            <textarea
              name="shortDescription"
              placeholder="Short Description..."
              type="text"
              className="bg-transparent w-96 border rounded-md px-5 py-3 border-black/50"
              value={projectData.shortDescription}
              onChange={handleChange}
            />

            <form onSubmit={handleFileUpload}>
              <label htmlFor="" className="pr-10">Choose File</label>
              <label class="flex items-center">
                <span class="sr-only">Choose File</span>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  class="block border rounded-full mr-5 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <button
                  className="bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600"
                  type="submit"
                >
                  Get URL
                </button>
              </label>

              {url && (
                <div>
                  <span className="text-blue-600 underline cursor-pointer">
                    {url}
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                    className="bg-green-500 text-white rounded-full px-4 py-1 hover:bg-green-600"
                  >
                    Copy
                  </button>
                </div>
              )}
            </form>

            <div className="flex items-center gap-3">
              {/* <Select options={Hotels} onChange={setHandle} isMulti /> */}
              {/* <div>{selectedOptions}</div> */}

              <form onSubmit={handleTechSubmit}>
              <label htmlFor="" className="pr-10">Technologies Used</label>
                <input
                  name="tech"
                  value={tech}
                  onChange={(e) => setTech(e.target.value.trim())}
                  type="text"
                  className="bg-transparent px-3 py-2 border border-black/50 rounded-md"
                />

                <button
                  className="inline-block py-2 text-sm text-white bg-gray-800 pr-4 pl-3 ml-4 hover:bg-gray-700 rounded-xl"
                  type="submit"
                >
                  + Add
                </button>

                <div className="font-semibold flex mt-2">
                  {techArray?.map((t, i) => (
                    <div key={i}>
                      <label
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        htmlFor={t}
                      >
                        {t}
                      </label>
                      <input
                        onClick={(e) => {
                          setTechArray((prev) => {
                            const index = prev.indexOf(e.target.name);
                            if (index > -1) {
                              prev.splice(index, 1);
                            }
                            return [...prev];
                          });
                        }}
                        type="checkbox"
                        name={t}
                        id={t}
                        className="hidden"
                      />
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>

        <label htmlFor="" className="p-10 mb-10">Desctiption:</label>
        <MDEditor height={"100%"} value={value} onChange={setValue} />
        <div style={{ paddingTop: 50 }} className="mt-10">
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
