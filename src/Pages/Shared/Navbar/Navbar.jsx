import React from 'react';
import Menu from './NavComponent/Menu';
import logo from "../../../assets/logo.png";
import RightIcons from './NavComponent/RightIcons';
import SearchBox from './NavComponent/SearchBox';

const Navbar = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <img className='h-[102px] w-[234px] mr-[110px]' src={logo} alt="" />
            <SearchBox />
            <Menu />
            <RightIcons />
        </div>
    );
};

export default Navbar;