import { Link } from 'react-router-dom';
import Banner_Image from '../../../../public/assets/images/user.png'
import JobList from './Job-Components/JobList/JobList'

const Home = () => {

    return (
        <>
            <div className="flex justify-center bg-base-100 shadow-lg">

                <div className='mt-5'>
                    <h1 className="text-5xl mb-5">One Step </h1>
                    <h1 className="text-5xl mb-5">Closer To Your</h1>
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Dream Job</h1>
                    <br />
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <br />
                    <Link to='/JobList' className="btn btn-secondary">Get Started</Link>
                </div>

                <img className="ms-60 h-96" src={Banner_Image} alt="Banner Image" />

            </div>

            <JobList />

            <br /><b></b>

        </>
    );

};

export default Home;