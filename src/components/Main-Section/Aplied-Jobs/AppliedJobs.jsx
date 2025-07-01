import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GetStoredJobApplication } from "./LocalStorage/LocalStorage";

const AppliedJobs = () => {

    const [ApliedJobs, setAppliedJobs] = useState()

    const AppliedJobs = useLoaderData()

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
        }

    }, [AppliedJobs])

    return (
        <>
            <h1 className="text-9xl">Aplied Jobs</h1>
        </>
    );

};

export default AppliedJobs;