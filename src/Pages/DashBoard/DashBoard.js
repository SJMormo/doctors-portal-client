import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-bold text-purple-500'>Welcome to Your Dashboard</h2>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to={"/dashboard"}>My Appointments</Link></li>
                    <li><Link to={"/dashboard/review"}>My Reviews</Link></li>
                    <li><Link to={"/dashboard/users"}>All Users</Link></li>
                </ul>

            </div>
        </div >
    );
};

export default DashBoard;