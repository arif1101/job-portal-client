import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    // console.log("from job apply 1", 'id is : ',id, 'user is',user.email);
    
    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phnNumber = form.phnNumber.value;
        const gitUrl = form.gitHub.value;
        // console.log('from job apply  2:',name, email, phnNumber, gitUrl)
        // console.log('after 2', user)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            gitUrl,
            name,
            email,
            phnNumber
        };

        console.log('from apply now : ', jobApplication)

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobApplication),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if(data.insertedId){
                    Swal.fire("Successfully Apply");
                }
                navigate('/myApplications')
            })
    }
    
    return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-[700px] shrink-0 shadow-2xl">
        <form onSubmit={handleJobApply} className="card-body">
            {/* first name */}
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Name :</span>
            </label>
            <input type="name" name="name" placeholder="First Name : " className="input input-bordered" required />
            </div>

            {/* email */}
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your Email :</span>
            </label>
            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
            </div>
            
            {/* phone number */}
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your phone no :</span>
            </label>
            <input type="number" name="phnNumber" placeholder="Your phone no :" className="input input-bordered" required />
            </div>

            {/* github url */}
            <div className="form-control">
            <label className="label">
                <span className="label-text">Your GitHub :</span>
            </label>
            <input type="url" name="gitHub" placeholder="Your github :" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
            <button className="btn btn-primary">Apply now</button>
            </div>
        </form>
    </div>
    </div>
    );
};

export default JobApply;