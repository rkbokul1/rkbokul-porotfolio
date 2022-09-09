import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><a href="#home">Home</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#porotfolio">Porotfolio</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
        
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar px-12  first:text-white"> {/*--bg-base-100*/}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a href='#home' className="btn btn-ghost normal-case text-xl">R.K <span className='text-primary ml-1'>Bokul</span></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                       {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;