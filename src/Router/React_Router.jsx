import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import Main from "../components/Main-Section/MainSection";

const React_Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",

            element: <Main />,

            errorElement: <ErrorHandel />,

            children: [

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