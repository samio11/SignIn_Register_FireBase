import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
               <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;