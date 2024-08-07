import React from 'react';
import { LoginForm, BranchOnLogin } from '../pages/Login';

const LoginLayout = () => {
    return <div className='container-fluid d-flex flex-column align-items-center'>
        <BranchOnLogin />
        <LoginForm />
    </div>;
}

export default LoginLayout;