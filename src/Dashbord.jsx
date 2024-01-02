import React from 'react';
import busy from './busy.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex justify-center items-center'>
                <div className='flex-1 text-center'>
                    <h3 className='text-center'> This is main DashBord</h3>
                </div>
                <div className='flex-1'>
                    <Link className='btn btn-outline' to={'/'}>Bye! Home</Link>
                </div>
            </div>
            <div>
                <Lottie className='w-auto h-[500px]' animationData={busy}></Lottie>
                <p className='text-center text-3xl md:text-xl'>Authore Will Update it Later</p>
            </div>
        </div>
    );
};

export default Dashbord;