import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import Jobs from "../components/Main-Section/Jobs/Jobs";
import ApliedJobs from "../components/Main-Section/Aplied-Jobs/ApliedJobs";
import Statistics from "../components/Main-Section/Statistics/Statistics";
import Blogs from "../components/Main-Section/Blogs/Blogs";


const React_Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",

            element: <Main />,

            errorElement: <ErrorHandel />,

            children: [
                {
                    path: "/Jobs",
                    element: <Jobs />
                },
                {
                    path: "/ApliedJobs",
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