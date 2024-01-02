import React from 'react';
import register from './Register.json'
import Lottie from 'lottie-react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from './Base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.term.checked;
        console.log(name, email, password);

        //Checking
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast("This is not an email formate");
            return;
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            toast("Please Fill the Password correctedly");
            return;
        }
        else if (!check) {
            toast("Please Accept Terms and Condition")
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    updateProfile(result.user, {
                        displayName: name
                    })
                    console.log(result.user);
                    toast("🧍‍♂️Person Added Succesfully")
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <div className='max-w-screen-xl mx-auto h-[90vh]'>
            <div className='h-auto md:h-[50%]'>
                <Lottie className='w-auto h-[100%]' animationData={register}></Lottie>
            </div>
            <div className='h-auto md:h-[50%] flex justify-center items-center'>
                <div className='w-full md:w-[60%]'>
                    <form onSubmit={handleSubmit} className='shadow-xl'>
                        <ToastContainer />
                        <div>
                            <input type="text" className='w-[70%] p-2 mb-2' name="name" placeholder='Enter Name' id="" required />
                        </div>
                        <div>
                            <input type="email" className='w-[70%] p-2 mb-2' name="email" placeholder='Enter Email' id="" required />
                        </div>
                        <div>
                            <input type="password" className='w-[70%] p-2 mb-2' name="password" placeholder='Enter Password' id="" required />
                        </div>
                        <div className='w-[70%] p-2 mb-2'>
                            <input type="checkbox" name="term" id="" />
                            <label htmlFor="term">Allow our Terms and Condition</label>
                        </div>
                        <div className='p-2 mb-2 text-xs flex justify-between'>
                            <p>Already Have account</p>
                            <Link to={'/'}>Sign In</Link>
                        </div>
                        <div className='mb-4 text-center'>
                            <input className='btn btn-outline' type="submit" value="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;