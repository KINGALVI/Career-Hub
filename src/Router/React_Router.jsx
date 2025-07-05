// Importing required components and routing methods from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Error handling component for catching route-level issues
import ErrorHandel from "../components/HandelError/ErrorHandel";

// Main layout component which wraps nested routes
import Main from "../components/Main-Section/MainSection";

// Individual route components
import JobList from "../components/Main-Section/Home/Job-Components/JobList/JobList"; // 🧷 added missing semicolon
import ApliedJobs from "../components/Main-Section/Aplied-Jobs/AppliedJobs";
import Home from "../components/Main-Section/Home/Home";
import SingelJob from "../components/Main-Section/Home/Job-Components/SingelJob/SingelJob";

// 👇 React Router configuration component
const React_Router = () => {

    // Define the route tree using createBrowserRouter
    const router = createBrowserRouter([
        {
            // This wraps all child routes inside the Main layout
            element: <Main />,

            // Displays on route errors (e.g. failed loader, no match)
            errorElement: <ErrorHandel />,

            // 🌐 Nested route definitions
            children: [

                // 🏠 Home page route: loads all job data
                {
                    path: "/",
                    loader: () => fetch('/data/jobs.json'),
                    element: <Home />
                },

                // 📃 Job list page using the same job data
                {
                    path: "/JobList",
                    loader: () => fetch('/data/jobs.json'),
                    element: <JobList />
                },

                // 🔍 Route for viewing a single job detail
                // Uses a dynamic parameter (e.g. /1, /2, /3)
                {
                    path: "/:Job_Detail",
                    loader: ({ params }) =>
                        fetch('/data/jobs.json')
                            .then(res => res.json())
                            .then(allJobs =>
                                allJobs.find(job => job.id.toString() === params.Job_Detail)
                            ),
                    element: <SingelJob />
                },

                // ✅ Applied Jobs page: filters applied jobs using job data
                {
                    path: "/ApliedJobs",
                    loader: () => fetch('/data/jobs.json'),
                    element: <ApliedJobs />
                }
            ]
        }
    ]);

    // 🔁 Return the router provider to activate routing
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

// ✅ Export the router so it can be used in App.jsx
export default React_Router;