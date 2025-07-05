// 🧭 Importing navigation tools from React Router
import { Link } from 'react-router-dom';

// 🖼️ Importing banner image for the hero section
import Banner_Image from '../../../../public/assets/images/user.png';

// 📦 Importing JobList component to showcase featured jobs
import JobList from './Job-Components/JobList/JobList';

// 🏡 Home component: landing page with introduction and featured jobs
const Home = () => {

  return (
    <>
      {/* 🏠 Hero Section: Intro text + banner image */}
      <div className="flex justify-center bg-base-100 shadow-lg">

        <div className="mt-5">
          {/* 🎯 Motivational headlines */}
          <h1 className="text-5xl mb-5">One Step</h1>
          <h1 className="text-5xl mb-5">Closer To Your</h1>

          {/* ✨ Gradient text using TailwindCSS */}
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Dream Job
          </h1>

          <br />

          {/* 📄 Short pitch paragraph */}
          <p>
            Explore thousands of job opportunities with all the <br />
            information you need. It's your future. Come find it. Manage all <br />
            your job application from start to finish.
          </p>

          <br />

          {/* 🚀 CTA button to navigate to job listings */}
          <Link to='/JobList' className="btn btn-secondary">
            Get Started
          </Link>
        </div>

        {/* 🖼️ Hero image positioned beside the text */}
        <img className="ms-60 h-96" src={Banner_Image} alt="Banner Image" />
      </div>

      {/* 📃 Renders job list below the hero section */}
      <JobList />

      <br /><b></b>
    </>
  );
};

export default Home;

// ✅ Exporting the Home component for route configuration