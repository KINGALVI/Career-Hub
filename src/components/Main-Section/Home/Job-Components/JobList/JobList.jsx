// 📦 Importing individual job card component
import Job from '../Job/Job';

// 🧩 Importing category icons for visual job categories
import Accounts from '../../../../../../public/assets/icons/accounts.png';
import Chip from '../../../../../../public/assets/icons/chip.png';
import Creative from '../../../../../../public/assets/icons/creative.png';
import Marketing from '../../../../../../public/assets/icons/marketing.png';

// 🧭 Importing loader data from route
import { useLoaderData } from 'react-router-dom';

// ⚙️ React hook for component state management
import { useState } from 'react';

// 🧾 JobList component displays job categories and mapped job data
const JobList = () => {

    // 📥 Fetching job data loaded by route loader
    const AllJobsData = useLoaderData();

    // 🎛️ State to control number of jobs shown
    const [ShowAllJobs, setShowAllJobs] = useState(4);

    return (
        <>
            {/* 🏷️ Job Category Section */}
            <div>
                <h1 className="text-3xl text-center font-bold mt-16 mb-3">Job Category List</h1>
                <p className="text-center">
                    Explore thousands of job opportunities with all the information you need. Its your future !!
                </p>
            </div>

            {/* 🧠 Static Job Category Cards */}
            <div className="flex justify-center mt-16 mb-28">

                {/* 🧮 Category: Account & Finance */}
                <div className="me-16">
                    <center>
                        <img src={Accounts} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Account & Finance</h3>
                        <p>300 Jobs Available</p>
                    </center>
                </div>

                {/* 🎨 Category: Creative Design */}
                <div className="me-16">
                    <center>
                        <img src={Creative} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Creative Design</h3>
                        <p>100+ Jobs Available</p>
                    </center>
                </div>

                {/* 📈 Category: Marketing & Sales */}
                <div className="me-16">
                    <center>
                        <img src={Marketing} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Marketing & Sales</h3>
                        <p>150 Jobs Available</p>
                    </center>
                </div>

                {/* ⚙️ Category: Engineering Job */}
                <div>
                    <center>
                        <img src={Chip} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Engineering Job</h3>
                        <p>224 Jobs Available</p>
                    </center>
                </div>

            </div>

            {/* 💼 Featured Jobs Section */}
            <h1 className="text-3xl text-center font-bold mt-16 mb-3">Featured Jobs</h1>
            <p className="text-center">
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>

            <br /><br />

            {/* 📦 Displaying sliced jobs with Job component */}
            <div className="grid grid-cols-2">
                {AllJobsData.slice(0, ShowAllJobs).map(SingelJobData => (
                    <Job key={SingelJobData.id} SingelJobData={SingelJobData} />
                ))}
            </div>

            {/* 🎯 Show All Jobs Button */}
            <center className={ShowAllJobs === AllJobsData.length ? "hidden" : ""}>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowAllJobs(AllJobsData.length)}
                >
                    Show All Jobs
                </button>
            </center>

            <br /><br />
        </>
    );
};

// 🚀 Export the component for reuse in Home or other pages
export default JobList;