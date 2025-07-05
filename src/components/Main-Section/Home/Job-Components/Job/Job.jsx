// 🧭 React Router hook for programmatic navigation
import { useNavigate } from 'react-router-dom';

// 🎨 Importing card styles
import './Job.css';

// 📦 Job component that displays a single job card
const Job = ({ SingelJobData }) => {

    // 🧮 Destructure the job object to get individual details
    const {
        id,
        logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
        moneyImg,
        locationImg
    } = SingelJobData;

    // 🧭 Setup navigation to single job details page
    const Navigate = useNavigate();

    // 🔗 Navigate to dynamic path: /1, /2, etc.
    const SingelJobDetail = () => {
        Navigate(`/${id}`);
    };

    return (
        <center>
            <div className="card bg-base-100 w-96 shadow-lg Border">

                {/* 🖼️ Logo area */}
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Logo" className="rounded-xl" />
                </figure>

                {/* 📃 Job details */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{job_title}</h2>
                    <p>{company_name}</p>

                    <span className="flex">
                        <p className="Border">{remote_or_onsite}</p>
                        <p className="Border">{job_type}</p>
                    </span>

                    <span className="flex">
                        <span className="flex">
                            <img src={locationImg} alt="Location Logo" />
                            <p className="me-2.5">{location}</p>
                        </span>
                        <span className="flex">
                            <img src={moneyImg} alt="Money Logo" />
                            <p>{salary}</p>
                        </span>
                    </span>

                    <div className="card-actions mt-5">
                        <button className="btn btn-primary" onClick={SingelJobDetail}>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </center>
    );
};

// 📐 PropTypes validate the shape and type of incoming props
// This helps catch bugs early and provides documentation for collaborators

import PropTypes from 'prop-types';

Job.propTypes = {
    SingelJobData: PropTypes.shape({
        // 🔢 id can be either a string or a number (e.g. 1 or "1")
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

        // 🖼️ logo URL or path to company image
        logo: PropTypes.string.isRequired,

        // 🏷️ Job title like "UI Designer"
        job_title: PropTypes.string.isRequired,

        // 🏢 Company name
        company_name: PropTypes.string.isRequired,

        // 🌍 Whether the job is remote or onsite
        remote_or_onsite: PropTypes.string.isRequired,

        // 📍 Location text, like "Dhaka, Bangladesh"
        location: PropTypes.string.isRequired,

        // ⏱️ Job type like "Full Time"
        job_type: PropTypes.string.isRequired,

        // 💰 Salary range, e.g. "100k–150k"
        salary: PropTypes.string.isRequired,

        // 📉 Path or URL for salary icon image
        moneyImg: PropTypes.string.isRequired,

        // 📌 Path or URL for location icon image
        locationImg: PropTypes.string.isRequired,
    }).isRequired // ✅ The entire job object must be passed, and all fields are required
};

// ✅ Export the Job component for use in JobList and beyond
export default Job;