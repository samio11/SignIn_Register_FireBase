import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const dynamic_nav = <>
    <li> <Link to = '/'>Sign In</Link> </li>
    <li> <Link to = '/register'>Register Now</Link> </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {dynamic_nav}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SAMIO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {dynamic_nav}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-outline'><Link to={'/Dashbord'}>More Info</Link></button>
            </div>
        </div>
    );
};

export default Header;