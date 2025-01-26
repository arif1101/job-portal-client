import React from 'react';
import { IoLocation } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {

    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;

    const {min, max, currency} = salaryRange;
    
    return (
        <div>
            

<div className="w-full max-w-sm min-h-[350px] md:max-w-[450px] bg-white border border-gray-200 rounded-lg shadow px-4 py-[20px] flex flex-col justify-between">
    <div className='flex flex-row gap-4 items-center'>
        <img src={company_logo} className='w-[48px] h-[48px]' alt="" />
        <div>
            <h1 className='text-2xl font-medium'>{company}</h1>
            <h1 className='flex items-center gap-2'><IoLocation></IoLocation> {location}</h1>
        </div>
    </div>
    <div className="flex flex-col gap-3 mt-3">
        <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{title}</h5>
        </a>
        <div className="flex flex-col">
            <p className='text-sm'>{description}</p>
            <div className='flex flex-wrap gap-2'>
                {
                    requirements.map((skill,index) => <p className='border border-solid px-1 shadow rounded-md text-center' key={index}>{skill}</p> )
                }
            </div>
        </div>
    </div>
    <div className="flex flex-row items-center justify-between align-bottom">
            <span className=" text-black">Salary : {min} - {max}</span>
            <Link to={`/jobs/${_id}`}>
            <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</p>
            </Link>
    </div>
</div>

        </div>
    );
};

export default HotJobCard;