import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import ApliedJobs from "../components/Main-Section/Aplied-Jobs/AppliedJobs";
import Statistics from "../components/Main-Section/Statistics/Statistics";
import Blogs from "../components/Main-Section/Blogs/Blogs";
import Home from "../components/Main-Section/Home/Home";
import SingelJob from "../components/Main-Section/Home/Jobs/SingelJob/SingelJob";


const React_Router = () => {

    const router = createBrowserRouter([
        {

            element: <Main />,

            errorElement: <ErrorHandel />,

            children: [
                {
                    path: "/",
                    loader: () => fetch('/data/jobs.json'),
                    element: <Home />
                },

                //***** Advance Method *****//
                // {
                //     path: "/:Job_Detail",
                //     loader: async ({ params }) => {
                //         const res = await fetch('/data/jobs.json');
                //         const allJobs = await res.json();
                //         const matchedJob = allJobs.find(job => job.id.toString() === params.Job_Detail);
                //         return matchedJob;
                //     },
                //     element: <SingelJob />
                // },

                //***** Normal Method *****//
                {
                    path: "/:Job_Detail",
                    loader: ({ params }) =>
                        fetch('/data/jobs.json')
                            .then(res => res.json())
                            .then(allJobs => allJobs.find(job => job.id.toString() === params.Job_Detail)),
                    element: <SingelJob />
                },

                {
                    path: "/ApliedJobs",
                    loader: () => fetch('/data/jobs.json'),
                    element: <ApliedJobs />
                },
                {
                    path: "/Statistics",
                    element: <Statistics />
                },
                {
                    path: "/Blogs",
                    element: <Blogs />
                }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default React_Router;