import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetEnrolledProjectsQuery } from "../redux/features/allSlice";
import { logout, userState } from "../redux/features/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(userState);

  const allEnrolledProjects = useGetEnrolledProjectsQuery();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  console.log(allEnrolledProjects.data);

  useEffect(() => {
    allEnrolledProjects.refetch();
  }, []);

  if (user)
    return (
      <div>
        <section className="pt-5 bg-blueGray-50">
          <div className="w-full lg:w-4/12 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative z-10 w-56 h-56 text-center mx-auto">
                      <img
                        alt="Image"
                        src="https://img.freepik.com/free-icon/user_318-875902.jpg?w=200"
                        className="shadow-xl rounded-full w-56 h-56  align-middle border-none absolute hover:scale-105  hover:shadow-2xl duration-300 ease-in-out mx-auto"
                      />
                    </div>
                  </div>
                  {/* <div className="w-full px-4 text-center">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Comments
                      </span>
                    </div>
                  </div>
                </div> */}
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-semibold leading-normal mt-5 mb-2">
                    {user?.user?.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Surat, India
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-5">
                    Full Stack Developer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    {allEnrolledProjects?.data?.projects?.length > 0 && (
                      <h1 className="text-2xl font-semibold mb-5">
                        Enrolled Projects
                      </h1>
                    )}

                    <div className="w-full lg:w-10/12 px-4 ">
                      {allEnrolledProjects?.data?.projects?.map((project) => (
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {project.projectId.title} : {project.projectId.level}
                        </p>
                      ))}

                      <button
                        onClick={() => {
                          dispatch(logout());
                          router.push("/");
                        }}
                        class="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                      >
                        <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span class="relative z-20 flex items-center text-sm">
                          <svg
                            class="relative w-5 h-5 -ml-3 mr-2 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                          </svg>
                          Logout
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  else {
    return "";
  }
};

export default Profile;
