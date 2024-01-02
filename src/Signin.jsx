import React, { useRef } from 'react';
import sign from './Sign.json';
import Lottie from 'lottie-react';
import auth from './Base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';



const Signin = () => {
    const emailRef = useRef(null);
    const handle_Submit = e =>{
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);
       //Checking
       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast("This is not an email formate");
        return;
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        toast("Please Fill the Password correctedly");
        return;
    }
    else{
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
         toast("🔎 Verifyed Succesfully")
         
        })
        .catch(err=>{
            console.log(err);
        })
    }
    }
    const handleForget = () =>{
     const email = emailRef.current.value;
     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast("This is not an email formate");
        return;
    }
    else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            toast("📧 Please Check Mail")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    }
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <Lottie className='w-auto h-[auto] md:h-[600px]' animationData={sign}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handle_Submit} className="card-body">
                            <ToastContainer/>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label text-xs">
                                    Dont have any account? 
                                    <Link to={'/register'}>Register Here</Link>
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