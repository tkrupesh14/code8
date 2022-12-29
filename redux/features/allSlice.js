import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../config/constants";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    keepUnusedDataFor: 1,

    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.user?.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),

    // Project
    addProject: builder.mutation({
      query: (body) => ({
        url: "/project",
        method: "POST",
        body,
      }),
    }),
    allProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
    }),
    getAProject: builder.query({
      query: (projectId) => ({
        url: `/project/${projectId}`,
        method: "GET",
      }),
    }),

    // Project Enroll And Submittion
    enrollAProject: builder.mutation({
      query: (projectId) => ({
        url: "/user/project",
        method: "POST",
        body: { projectId },
      }),
    }),
    getEnrolledProjects: builder.query({
      query: () => ({
        url: "/user/projects",
        method: "GET",
      }),
    }),
    getAEnrolledProject: builder.mutation({
      query: (projectId) => ({
        url: `/user/project/${projectId}`,
        method: "GET",
      }),
    }),
    submitAProject: builder.mutation({
      query: ({ projectId, githubLink, deployedLink }) => ({
        url: "/user/project-submit",
        method: "POST",
        body: {
          projectId,
          githubLink,
          deployedLink,
        },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,

  useAddProjectMutation,
  useAllProjectsQuery,
  useGetAProjectQuery,

  useEnrollAProjectMutation,
  useGetAEnrolledProjectMutation,
  useGetEnrolledProjectsQuery,
  useSubmitAProjectMutation,
} = allApi;
