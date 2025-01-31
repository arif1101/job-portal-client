import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import signinAnimation from "../../assets/lottie/signin.json"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log('from signIn : ',location)
    const cardDetailsPath = location.state || '/';
    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            console.log('sign in ', result.user.email);
            const user = {email: email}
            
            axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
            .then(res => {
                console.log("JWT Response:", res.data);
            })
            .catch(error => {
                console.error("JWT Request Error:", error);
            });

            // navigate(cardDetailsPath);
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content -mt-[300px] md:mt-0 flex-col md:flex-row-reverse">
                <div className="text-center w-80 md:w-[500px] lg:text-left">
                <Lottie className='' animationData={signinAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Signin;