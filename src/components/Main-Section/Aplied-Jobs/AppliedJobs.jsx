import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GetStoredJobApplication } from "./LocalStorage/LocalStorage";

const AppliedJobs = () => {

    const AppliedJobs = useLoaderData()

    const [ApliedJobs, setAppliedJobs] = useState([])
    const [DispalyJobs, setDisplayJobs] = useState([])

    useEffect(() => {
        const StoredJobIDs = GetStoredJobApplication();
        if (AppliedJobs.length > 0) {
            const AllAppliedJobs = [];
            for (const id of StoredJobIDs) {
                const Job = AppliedJobs.find(job => job.id === id)
                if (Job) {
                    AllAppliedJobs.push(Job);
                }
            }
            setAppliedJobs(AllAppliedJobs)
            setDisplayJobs(AllAppliedJobs)
        }

    }, [AppliedJobs])

    const handelJobsFilter = Filter => {
        if (Filter === 'All') {
            setDisplayJobs(ApliedJobs)
        }
        else if (Filter === 'Remote') {
            const RemoteJobs = ApliedJobs.filter(Job => Job.remote_or_onsite === 'Remote')
            setDisplayJobs(RemoteJobs)
        }
        else if (Filter === 'Onsite') {
            const OnsiteJobs = ApliedJobs.filter(Job => Job.remote_or_onsite === 'Onsite')
            setDisplayJobs(OnsiteJobs)
        }
    }

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <center><h1 className="text-3xl font-bold">Applied Jobs</h1></center>
                <br /><br /><br /><br />
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
                <div className="space-y-6">
                    {DispalyJobs.map(job => (
                        <div key={job.id} className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-6 shadow-md bg-base-100">
                            <div className="flex items-center space-x-5">
                                <img src={job.logo} alt="Company Logo" className="w-24 h-24 object-contain bg-gray-100 rounded" />
                                <div>
                                    <h2 className="text-xl font-bold">{job.job_title}</h2>
                                    <p className="text-gray-500">{job.company_name}</p>
                                    <div className="flex flex-wrap gap-2 my-2">
                                        <span className="badge badge-outline">{job.remote_or_onsite}</span>
                                        <span className="badge badge-outline">{job.job_type}</span>
                                    </div>
                                    <div className="flex gap-4 text-sm text-gray-600">
                                        <span><i className="fa-solid fa-location-dot mr-1"></i>{job.location}</span>
                                        <span><i className="fa-solid fa-sack-dollar mr-1"></i>{job.salary}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

};

export default AppliedJobs;