import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../../pages/Shared/Navigationbar/Navigationbar';

const LoginLayOut = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOut;