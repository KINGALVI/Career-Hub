import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/ApliedJobs'>Aplied Jobs</NavLink></li>
        <li><NavLink to='/Statistics'>Statistics</NavLink></li>
        <li><NavLink to='/Blogs'>Blogs</NavLink></li>
    </>

    return (
        <>
            <div className="navbar bg-base-300 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Career Hub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-accent">Start Applying</button>
                </div>
            </div>
        </>
    );

};

export default Header;