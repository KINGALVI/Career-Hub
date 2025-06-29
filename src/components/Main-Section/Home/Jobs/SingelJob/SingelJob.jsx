import './SingelJob.css'
import { useLoaderData, useNavigate } from "react-router-dom";

const SingelJob = () => {

    const SingelJobData = useLoaderData();

    const { job_responsibility, job_description, educational_requirements, experiences, contact_information } = SingelJobData;

    const Navigate = useNavigate();
    const ShowHomePage = () => {
        Navigate(-1)
    }

    return (
        <>
            <center><h1 className="text-3xl text-center font-bold mt-28 mb-28">Job Details</h1></center>
            <div className="ms-28 me-28">
                <p><b>Job Description : </b>{job_description}</p>
                <p><b>Job Responsibility : </b>{job_responsibility}</p>
                <p><b>Educational Requirements : </b>{educational_requirements}</p>
                <p><b>Experiences : </b>{experiences}</p>
                <br /><br />
                <center className='Border'>
                    <div className="Border">
                        <br />
                        <b className="text-2xl">Contact Information</b>
                        <br /><br />
                        <p><b>Phone :</b> {contact_information.phone}</p>
                        <p><b>Email :</b> {contact_information.email}</p>
                        <p><b>Address :</b> {contact_information.address}</p>
                        <br />
                        <button className="btn btn-secondary">Apply Now</button>
                        <br /><br />
                    </div>
                </center>
            </div>


            <br /><br />

            <center><button className="btn btn-primary" onClick={ShowHomePage}>GO BACK</button></center>

            <br /><br /><br />
        </>
    );

};

export default SingelJob;