import './Jobs.css';

const Jobs = ({ SingelJobData }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, moneyImg, locationImg } = SingelJobData
    return (
        <center>
            <div className="card bg-base-100 w-96 shadow-sm Border">
                <figure className="px-10 pt-10">
                    <img
                        src={logo}
                        alt="Logo"
                        className="rounded-xl" />
                </figure>
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
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </center>
    );

};

export default Jobs;