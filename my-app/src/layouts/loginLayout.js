import React from 'react';
import { LoginForm, BranchOnLogin } from '../pages/Login';
import { useNavigate } from 'react-router-dom';

const LoginLayout = () => {
    const navigate = useNavigate();
    return <div className='container-fluid d-flex flex-column align-items-center position-relative'>
        <div className="position-absolute top-0 end-0 p-3 z-1">
            <button 
                className='btn btn-link btn-lg'
                style={{color: "#c6b0c6"}}
                onClick={() => navigate("Shop")}>
                Tiếp tục mua sắm {`>`}
            </button>
        </div>
        <BranchOnLogin />
        <LoginForm />
    </div>;
}

export default LoginLayout;