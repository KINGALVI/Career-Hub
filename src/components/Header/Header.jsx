// 🔗 Import custom styles for the header layout
import './Header.css';

// 🔗 Import routing components for navigation
import { Link, NavLink } from "react-router-dom";

// 📌 Header component displays the top navigation bar for the application
const Header = () => {

    // 📚 Links rendered both in desktop nav and dropdown menu (mobile)
    const Links = (
        <>
            {/* 👈 Active styling is handled automatically by NavLink */}
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/JobList'>Job List</NavLink></li>
            <li><NavLink to='/ApliedJobs'>Aplied Jobs</NavLink></li>
        </>
    );

    return (
        <>
            {/* 🧭 Responsive navigation bar using TailwindCSS + daisyUI */}
            <div className="navbar bg-base-300 shadow-sm">

                {/* 📱 Left side: logo and dropdown for small screens */}
                <div className="navbar-start">
                    <div className="dropdown">

                        {/* 🔽 Dropdown toggle button visible only on small screens */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {/* 📃 Mobile dropdown menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {Links}
                        </ul>
                    </div>

                    {/* 🏠 Logo + home link */}
                    <Link to='/' className="btn btn-ghost text-xl">
                        Career Hub
                    </Link>
                </div>

                {/* 🖥️ Center navigation menu (visible on large screens) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>

                {/* 🎯 Right CTA button to direct users to job listing */}
                <div className="navbar-end">
                    <Link to='/JobList' className="btn btn-accent">
                        Start Applying
                    </Link>
                </div>

            </div>
        </>
    );
};

// 🚀 Exporting the Header component for use in Main layout
export default Header;