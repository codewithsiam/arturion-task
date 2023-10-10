import React from 'react';
import errorImage from "../../assets/Images/error-image.png"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='h-max w-max md:h-[400px] md:w-[550px] mx-auto my-auto' src={errorImage} alt="" />
            <p className='mt-[20px] mb-[40px] font-semibold'>Your visited page not found. You may go home page.</p>
            <Link to='/' className='art-bg-primary rounded-md py-[16px] px-[48px] text-white font-medium text-[16px]'>Back to home page</Link>
        </div>
    );
};

export default ErrorPage;