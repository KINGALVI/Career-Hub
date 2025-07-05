// 📦 React hooks for side effects and local component state
import { useEffect, useState } from "react";

// 🧭 React Router hook to load route-based data from jobs.json
import { useLoaderData } from "react-router-dom";

// 💾 Utility to get applied job IDs from localStorage
import { GetStoredJobApplication } from "./LocalStorage/LocalStorage";

// 🧾 Main component that displays the list of jobs the user has applied to
const AppliedJobs = () => {

    // 🗂️ Get all job listings passed from the loader
    const AppliedJobs = useLoaderData();

    // 🧠 State to store matched jobs the user applied for
    const [ApliedJobs, setAppliedJobs] = useState([]);

    // 👁️ State for displaying jobs filtered by category (All, Remote, Onsite)
    const [DispalyJobs, setDisplayJobs] = useState([]);

    // 🔁 useEffect: fetch job IDs from localStorage and map them to actual job objects
    useEffect(() => {
        const StoredJobIDs = GetStoredJobApplication();

        if (AppliedJobs.length > 0) {
            const AllAppliedJobs = [];

            for (const id of StoredJobIDs) {
                const Job = AppliedJobs.find(job => job.id === id);
                if (Job) {
                    AllAppliedJobs.push(Job);
                }
            }

            // 🗃️ Update state with matched applied jobs
            setAppliedJobs(AllAppliedJobs);
            setDisplayJobs(AllAppliedJobs);
        }
    }, [AppliedJobs]);

    // 🔍 Filter logic for dropdown (All | Remote | Onsite)
    const handelJobsFilter = (Filter) => {
        if (Filter === 'All') {
            setDisplayJobs(ApliedJobs);
        } else if (Filter === 'Remote') {
            const RemoteJobs = ApliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(RemoteJobs);
        } else if (Filter === 'Onsite') {
            const OnsiteJobs = ApliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(OnsiteJobs);
        }
    };

    return (
        <>
            {/* 🧭 Page Container */}
            <div className="container mx-auto px-4 py-8">

                {/* 📢 Heading */}
                <center>
                    <h1 className="text-3xl font-bold">Applied Jobs</h1>
                </center>

                <br /><br /><br /><br />

                {/* 🔽 Filter Dropdown */}
                <center>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-outline btn-primary">Filter By</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handelJobsFilter('All')}>All</a></li>
                            <li><a onClick={() => handelJobsFilter('Remote')}>Remote</a></li>
                            <li><a onClick={() => handelJobsFilter('Onsite')}>Onsite</a></li>
                        </ul>
                    </div>
                </center>

                <br /><br />

                {/* 🧾 Section that renders all applied jobs as individual cards */}
                <div className="space-y-6">
                    {DispalyJobs.length > 0 ? (
                        // ✅ If there are applied jobs to show, map through them
                        DispalyJobs.map(job => (
                            <div
                                key={job.id}
                                className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-6 shadow-md bg-base-100"
                            >
                                {/* 🔳 Left section: logo + job info */}
                                <div className="flex items-center space-x-5">

                                    {/* 🖼️ Company logo */}
                                    <img
                                        src={job.logo}
                                        alt="Company Logo"
                                        className="w-24 h-24 object-contain bg-gray-100 rounded"
                                    />

                                    {/* 🏷️ Job text info: title, company, tags, location, salary */}
                                    <div>
                                        {/* 📌 Job title */}
                                        <h2 className="text-xl font-bold">{job.job_title}</h2>

                                        {/* 🏢 Company name */}
                                        <p className="text-gray-500">{job.company_name}</p>

                                        {/* 🏷️ Tags like Remote/Onsite and Full Time/Part Time */}
                                        <div className="flex flex-wrap gap-2 my-2">
                                            <span className="badge badge-outline">{job.remote_or_onsite}</span>
                                            <span className="badge badge-outline">{job.job_type}</span>
                                        </div>

                                        {/* 📍 Location and 💰 Salary with icons */}
                                        <div className="flex gap-4 text-sm text-gray-600">
                                            <span>
                                                <i className="fa-solid fa-location-dot mr-1"></i>
                                                {job.location}
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-sack-dollar mr-1"></i>
                                                {job.salary}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 🎯 CTA: View Details button (currently static) */}
                                <div className="mt-4 md:mt-0">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        // ❌ Fallback: if there are no jobs applied
                        <p className="text-center">No applied jobs found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

// 🚀 Exporting the component to be used in the routing system
export default AppliedJobs;