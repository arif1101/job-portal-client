import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const Navbar = () => {

    const {user,signOutUser} = useContext(AuthContext);
    
    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log("successfully sign out")
        })
        .catch(error => {
            console.log('failed to sign out. stay here.')
        })
    }

    const links = (
        <>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-sky-100' : 'hover:bg-sky-100'
                    }`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/myApplications"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-sky-100' : 'hover:bg-sky-100'
                    }`
                }
            >
                My Application
            </NavLink>
            <NavLink
                to="/addJob"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-sky-100' : 'hover:bg-sky-100'
                    }`
                }
            >
                Add Job
            </NavLink>
            <NavLink
                to="/myJobPost"
                className={({ isActive }) =>
                    `bg-white border px-2 rounded-xl flex items-center py-2 ${
                        isActive ? '!bg-sky-100' : 'hover:bg-sky-100'
                    }`
                }
            >
                My Post
            </NavLink>
        </>
    );
    
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <div className='flex gap-3'>
            <img className=' w-[32px] h-[32px]' src="../src/assets/image/job.png" alt="" />
            <p className="text-2xl text-green-800"><span className='text-red-600 font-bold'>J</span>ob<span className='text-red-600 font-bold'>P</span>ortal</p>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-4 font-semibold">
                {links}
            </ul>
        </div>
        <div className="navbar-end">

            {
                user ? <><button onClick={handleSignOut} className="btn">Sign Out</button>
                </> : <>
                    <Link to='/register'><button className="btn">Register</button></Link>
                    <Link to='/signin'><button className="btn">Sign In</button></Link>
                </>
            }
        </div>
        </div>
    );
};

export default Navbar;