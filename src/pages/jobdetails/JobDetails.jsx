import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import { GrCloudSoftware } from "react-icons/gr";


const JobDetails = () => {

    const job = useLoaderData();
    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job;

    const {min, max, currency} = salaryRange;
    
    return (
        <div className='flex justify-between p-6'>
            <div className='max-w-[800px] lg:w-[800px] flex flex-col gap-5'>
                <div className='max-h-[158px] p-6 flex gap-3 bg-slate-100 shadow items-center rounded-[10px]'>
                    <img className='w-[110px] bg-white h-[110px] rounded-full p-7 border'  src={company_logo}  alt="" />
                    <div>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                        <div className='flex gap-3'>
                            <p className='flex items-center gap-2 text-xl'><GrCloudSoftware></GrCloudSoftware> {company}</p>
                            <p className='flex items-center gap-2 text-xl'><IoLocation></IoLocation> {location}</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                     {/* job description */}
                    <div>
                        <h1 className='text-2xl font-semibold'>Job Description : </h1>
                        <p>{description}</p>
                    </div>
                    {/* Resposibilities and duties */}
                    <div>
                        <h1 className='text-2xl font-semibold'>Responsibilities and Duties : </h1>
                        {
                            responsibilities.map((response, index) => <p key={index}>{index+1}. {response}</p>)
                        }
                    </div>
                    {/* job requirements */}
                    <div>
                        <h1 className='text-2xl font-semibold'>Requirements : </h1>
                        {
                            requirements.map((require, index) => <p>{index+1}. {require}</p>)
                        }
                    </div>
                </div>

                <Link to={`/jobapply/${_id}`}>
                <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply noe</p>
                </Link>

            </div>
            <div className='w-[400px] shadow bg-slate-100 flex flex-col gap-6 p-6 rounded-[10px]'>
                <h1 className='text-2xl font-semibold'>Job Information</h1>
                <div className='border'></div>
                <div className='flex flex-col gap-6'>
                    <div className='flex items-center gap-5'>
                        <div className='text-3xl'>
                        <GrCloudSoftware></GrCloudSoftware>
                        </div>
                        <div>
                            <h1 className='text-xl'>Company name</h1>
                            <p>{company}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='text-3xl'>
                        <GrCloudSoftware></GrCloudSoftware>
                        </div>
                        <div>
                            <h1 className='text-xl'>Company name</h1>
                            <p>{company}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='text-3xl'>
                        <GrCloudSoftware></GrCloudSoftware>
                        </div>
                        <div>
                            <h1 className='text-xl'>Company name</h1>
                            <p>{company}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='text-3xl'>
                        <GrCloudSoftware></GrCloudSoftware>
                        </div>
                        <div>
                            <h1 className='text-xl'>Company name</h1>
                            <p>{company}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;