import {
  useAllProjectsQuery,
  useEnrollAProjectMutation,
  useGetAEnrolledProjectMutation,
  useGetAProjectQuery,
  useGetEnrolledProjectsQuery,
} from "../../redux/features/allSlice";
import styles from "../../styles/projects/projectdesc.module.css";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import { Alert, Snackbar } from "@mui/material";

const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);
const projectdesc = () => {
  const router = useRouter();
  const projectId = router?.query?.projectId;
  const user = useSelector(userState);
  const { data, isLoading, refetch } = useGetAProjectQuery(projectId);
  useEffect(() => {
    refetch();
    enrolledProjectFunction(projectId);
  }, []);

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

  const [enrolledProjectFunction, enrolledProjectResponse] =
    useGetAEnrolledProjectMutation();
  const [enrollFunction, enrollResponse] = useEnrollAProjectMutation();
  const handleEnroll = () => {
    if (user) {
      enrollFunction(projectId);
    }
  };

  useEffect(() => {
    if (enrollResponse?.isSuccess) {
      openMsg(enrollResponse?.data?.message);
      enrolledProjectFunction(projectId);
    }
    if (enrollResponse?.error) {
      openMsg(enrollResponse?.error?.data?.message);
      enrolledProjectFunction(projectId);
    }
  }, [enrollResponse]);

  return (
    <div>
      <div>
        {/* <div>{data?.project?.title}</div> */}
        <div>
          <div data-color-mode="light" className="max-w-4xl mx-auto my-10">
            <Markdown
              className="rounded-lg border shadow-lg py-5 px-10"
              source={data?.project?.description}
            />
          </div>
        </div>

        <div className="text-center mt-5 mb-32">
          {!user?.user?.projects?.find(
            (project) => project.projectId == projectId
          ) ? (
            <button
              onClick={handleEnroll}
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-50 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>

              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Enroll & Accept The Challenge
              </span>
            </button>
          ) : (
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-between">
                <label htmlFor="githubLink">Github Link</label>
                <input
                  name="githubLink"
                  placeholder="Github Link"
                  type="text"
                  className="bg-transparent w-72 border rounded-full py-3 px-5 border-black/50"
                />
              </div>
              <div className="flex items-center gap-3 justify-between">
                <label htmlFor="deployedLink">Deployed Link</label>
                <input
                  name="deployedLink"
                  placeholder="Deployed Link"
                  type="text"
                  className="bg-transparent w-72 border rounded-full py-3 px-5 border-black/50"
                />
              </div>
              <div className="flex items-center gap-3 justify-center">
                <button
                  // onClick={handleEnroll}
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-50 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>

                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Submit
                  </span>
                </button>
              </div>
            </div>
          )}
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
    </div>
  );
};

export default projectdesc;
