// 🧩 Import PropTypes to define and validate expected prop types
// (This helps catch errors if someone accidentally passes the wrong type of prop)
import PropTypes from "prop-types";

// 🧭 Import tools to get route error data and navigate between pages
import { Link, useRouteError } from "react-router-dom";

// 🚨 This component handles page-level errors such as:
// 404 (Not Found), loader failures, or fetch-related route issues
const ErrorHandel = () => {

    // 🪲 Grabs the error object returned by a failing route
    const Error = useRouteError();

    // 🧪 Good dev practice: log the error for debugging
    console.log(Error);

    return (
        <>
            {/* 🛑 Main error title */}
            <h1 className="text-5xl text-center">
                SORRY PAGE NOT FOUND !!
            </h1>

            <br />

            {/* 🧾 Show either the default status text or the explicit error message */}
            <p className="text-3xl text-center">
                <b><i>{Error.statusText || Error.message}</i></b>
            </p>

            <br />

            {/* 🎯 If the status code is 404, show an additional internal error message */}
            {Error.status === 404 && (
                <p className="text-3xl text-center">
                    <b><i>{Error.error?.message}</i></b>
                </p>
            )}

            <br />

            {/* 🏠 Call-to-action: go back to homepage */}
            <center>
                <Link className="btn btn-primary" to='/'>
                    HOME PAGE
                </Link>
            </center>
        </>
    );
};

// 📐 PropTypes definition (currently unused in the component, but helpful for future expansion)
// These props might be used if you want to pass in a custom error message or status from a parent
ErrorHandel.propTypes = {
    // optional string prop for providing a custom fallback message
    customErrorMessage: PropTypes.string,

    // optional number prop in case you want to show a specific error code
    statusCode: PropTypes.number
};

// 🚀 Makes this component available for use in routing config
export default ErrorHandel;