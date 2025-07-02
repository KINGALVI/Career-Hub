import Job from '../Job/Job';
import Accounts from '../../../../../../public/assets/icons/accounts.png'
import Chip from '../../../../../../public/assets/icons/chip.png'
import Creative from '../../../../../../public/assets/icons/creative.png'
import Marketing from '../../../../../../public/assets/icons/marketing.png'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

const JobList = () => {

    const AllJobsData = useLoaderData()

    const [ShowAllJobs, setShowAllJobs] = useState(4);

    return (
        <>

            <div>
                <h1 className="text-3xl text-center font-bold mt-16 mb-3">Job Category List</h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future !!</p>
            </div>

            <div className="flex justify-center mt-16 mb-28">
                <div className="me-16">
                    <center>
                        <img src={Accounts} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Account & Finance</h3>
                        <p>300 Jobs Available</p>
                    </center>
                </div>
                <div className="me-16">
                    <center>
                        <img src={Creative} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Creative Design</h3>
                        <p>100+ Jobs Available</p>
                    </center>
                </div>
                <div className="me-16">
                    <center>
                        <img src={Marketing} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Marketing & Sales</h3>
                        <p>150 Jobs Available</p>
                    </center>
                </div>
                <div>
                    <center>
                        <img src={Chip} alt="Job Category" />
                        <br />
                        <h3 className="text-2xl font-bold mb-1.5">Engineering Job</h3>
                        <p>224 Jobs Available</p>
                    </center>
                </div>
            </div>
            <h1 className="text-3xl text-center font-bold mt-16 mb-3">Featured Jobs</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <br /><br />
            <div className="grid grid-cols-2">
                {
                    AllJobsData.slice(0, ShowAllJobs).map(SingelJobData => <Job key={SingelJobData.id} SingelJobData={SingelJobData} />)
                }
            </div>

            <center className={ShowAllJobs === AllJobsData.length ? "hidden" : ""}>
                <button className="btn btn-primary" onClick={() => setShowAllJobs(AllJobsData.length)}>Show All Jobs</button>
            </center>
            <br /><br />
        </>
    );
};

export default JobList;