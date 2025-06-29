import Banner_Image from '../../../../public/assets/images/user.png'
import Accounts from '../../../../public/assets/icons/accounts.png'
import Chip from '../../../../public/assets/icons/chip.png'
import Creative from '../../../../public/assets/icons/creative.png'
import Marketing from '../../../../public/assets/icons/marketing.png'
import Jobs from './Jobs/Jobs'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

    const AllJobsData = useLoaderData()

    return (
        <>
            <div className="flex justify-center bg-base-100 shadow-sm">

                <div className='mt-5'>
                    <h1 className="text-5xl mb-5">One Step </h1>
                    <h1 className="text-5xl mb-5">Closer To Your</h1>
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Dream Job</h1>
                    <br />
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <br />
                    <button className="btn btn-secondary">Get Started</button>
                </div>

                <img className="ms-60 h-96" src={Banner_Image} alt="Banner Image" />

            </div>

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
                    AllJobsData.map(SingelJobData => <Jobs key={SingelJobData.id} SingelJobData={SingelJobData} />)
                }
            </div>
        </>
    );

};

export default Home;