// 🎨 Custom styling for the job details page
import './SingelJob.css';

// 🍞 React Toastify: Used for notification after applying
import { Bounce, ToastContainer, toast } from 'react-toastify';

// 🧭 Hooks from React Router for routing and accessing loader data
import { useLoaderData, useNavigate } from "react-router-dom";

// 💾 Utility to save the job ID into localStorage (applied jobs tracker)
import { SaveJobApplication } from '../../../Aplied-Jobs/LocalStorage/LocalStorage';

// 📄 Main Component: Displays the full details of a single job
const SingelJob = () => {

    // 📥 Get job data from route loader (comes from React Router config)
    const SingelJobData = useLoaderData();

    // 🧾 Destructure important fields from the job object
    const {
        id,
        job_responsibility,
        job_description,
        educational_requirements,
        experiences,
        contact_information
    } = SingelJobData;

    // 💾 Save job to localStorage when the user applies
    const SavedJobApplication = () => {
        SaveJobApplication(id);
    };

    // 🍞 Trigger toast notification to confirm application
    const notify = () =>
        toast.success('You Have Successfully Applied For This Job!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

    // 🧭 Navigate back to previous page (like browser "Back" button)
    const Navigate = useNavigate();
    const ShowHomePage = () => {
        Navigate(-1);
    };

    return (
        <>
            {/* 🧾 Title */}
            <center>
                <h1 className="text-3xl text-center font-bold mt-28 mb-28">
                    Job Details
                </h1>
            </center>

            {/* 🗃️ Job Description Section */}
            <div className="ms-28 me-28">
                <p><b>Job Description:</b> {job_description}</p>
                <p><b>Job Responsibility:</b> {job_responsibility}</p>
                <p><b>Educational Requirements:</b> {educational_requirements}</p>
                <p><b>Experiences:</b> {experiences}</p>

                <br /><br />

                {/* 📞 Contact Info Box */}
                <center className='Border'>
                    <div className="Border">
                        <br />
                        <b className="text-2xl">Contact Information</b>
                        <br /><br />
                        <p><b>Phone:</b> {contact_information.phone}</p>
                        <p><b>Email:</b> {contact_information.email}</p>
                        <p><b>Address:</b> {contact_information.address}</p>
                        <br />

                        {/* 📩 Apply Button triggers toast and saves job */}
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                notify();
                                SavedJobApplication();
                            }}
                        >
                            Apply Now
                        </button>
                        <br /><br />
                    </div>
                </center>
            </div>

            <br /><br />

            {/* 🔙 Go Back Button */}
            <center>
                <button className="btn btn-primary" onClick={ShowHomePage}>
                    GO BACK
                </button>
            </center>

            <br /><br /><br />

            {/* ✅ Toast Container: enables Toastify notifications to appear */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </>
    );
};

// 🚀 Export the SingelJob component for route-based rendering
export default SingelJob;