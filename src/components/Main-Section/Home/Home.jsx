import Banner_Image from '../../../../public/assets/images/user.png'

const Home = () => {

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
        </>
    );

};

export default Home;