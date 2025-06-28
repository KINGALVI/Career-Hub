import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";
import Jobs from "../components/Main-Section/Home/Jobs/Jobs";
import ApliedJobs from "../components/Main-Section/Aplied-Jobs/ApliedJobs";
import Statistics from "../components/Main-Section/Statistics/Statistics";
import Blogs from "../components/Main-Section/Blogs/Blogs";
import Home from "../components/Main-Section/Home/Home";


const React_Router = () => {

    const router = createBrowserRouter([
        {

            element: <Main />,

            errorElement: <ErrorHandel />,

            children: [
                {
                    path: "/",
                    element: <Home />
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