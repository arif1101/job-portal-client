
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/Signin";
import JobDetails from "../pages/jobdetails/JObDetails";
import PrivateAuth from "./PrivateAuth";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyJobPost from "../pages/MyJobPost/MyJobPost";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/jobs/:id',
            element: <PrivateAuth><JobDetails></JobDetails></PrivateAuth>,
            loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/jobapply/:id',
          element: <PrivateAuth><JobApply></JobApply></PrivateAuth>
        },
        {
          path: '/myApplications',
          element: <PrivateAuth><MyApplications></MyApplications></PrivateAuth>
        },
        {
          path: '/addJob',
          element: <PrivateAuth><AddJob></AddJob></PrivateAuth>
        },
        {
          path: '/myJobPost',
          element: <PrivateAuth><MyJobPost></MyJobPost></PrivateAuth>
        },
        {
          path: '/viewApplications/:job_id',
          element: <PrivateAuth><ViewApplications></ViewApplications></PrivateAuth>,
          loader: ({ params }) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;

