import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data)
            console.log('fetching data',data)
        })
    },[])
    
    return (
        <div>
            <h1 className='flex mb-8 mt-24 justify-center text-[42px] font-bold'>Hot Job</h1>
        	<div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;