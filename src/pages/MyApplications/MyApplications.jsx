import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const MyApplications = () => {

    const {user} = useAuth();
    const [jobs, setJobs] = useState([]);
    console.log('from my application : ',jobs)
    
    
    useEffect(() => {
        // fetch(`http://localhost:5000/job-application?email=${user.email}`)
        // .then(res => res.json())
        // .then(data => setJobs(data))

        axios.get(`http://localhost:5000/job-application?email=${user.email}`, { withCredentials: true })
        .then(res => setJobs(res.data))
        .catch(error => console.error("Error:", error));
        
    }, [user.email])
    
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table">
                <tbody>
                    {
                        jobs.map((job, index) => 
                        <tr key={index}>
                        <th>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={job.company_logo}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{job.title}</div>
                            <div className="text-sm opacity-50">{job.location}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Zemlak, Daniel and Leannon
                        <br />
                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyApplications;