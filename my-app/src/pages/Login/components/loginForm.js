import React, { useEffect, useState } from 'react';
import { Button, Form, Alert, AlertHeading } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import "../../../assets/css/button.css";
import { SetClient } from '../../../store/action/client_info';
import { useNavigate } from 'react-router-dom';
import fetching from '../../../services';


const LoginForm = () => {
    //State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState("");
    const [falseCredentials, setFalseCredentials] = useState(false);
    const [tokenExpired, setTokenExpired] = useState(0);
    //Redux dispatch
    const dispatch = useDispatch();
    //Redux store props state
    const client = useSelector(state => state.clientInfo);
    //Route navigate
    const navigate = useNavigate()

    const HandleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const client = {
            "email": username,
            "password": password,
        }
        const option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, //tell the object content form
            body: JSON.stringify(client)
        };
        fetching(
            "api/user/login",
            option
        ).then(result => setToken(result.token) ||
            localStorage.setItem('AuthToken', result.token)) //Set receving token
            .catch(error => {
                setFalseCredentials(error);
            });
        // localStorage.setItem('client', JSON.stringify(client))
        // dispatch(SetClient(client))
    };
    useEffect(() => {
        if (token.length === 0) {
            return;//Basecase
        }
        const option = {
            headers: {
                Authorization: `Bearer ${token}`
            }, //tell the object content form
        };
        fetching(
            "api/user/profile",
            option
        ).then(result => dispatch(SetClient({ ...result, token: token }))) //Set receving profile
            .catch(error => {
                localStorage.removeItem('AuthToken');
                setTokenExpired(error);
            });
    }, [token, setTokenExpired, dispatch])//Token handler
    useEffect(() => {
        const cacheToken = localStorage.getItem('AuthToken');
        if (cacheToken !== null) {
            setToken(cacheToken);
        }
    }, [setToken])//Check in the cache
    useEffect(() => {
        if (token.length !== 0) {
            switch (client.role) {
                case "user":
                    navigate("/Shop")
                    break;
                case "staff":
                    navigate("/Staff")
                    break;
                case "admin":
                    navigate("/Manager")
                    break;
                default:
                    break;
            }
        }
    }, [client, navigate, token])//Listen to account state change and navigate to its

    return (
        <div className='col-4'>
            {tokenExpired === 0 &&

                <Alert>
                    <AlertHeading variant="warning">
                        Phiên đăng nhập hết hạn
                    </AlertHeading>
                </Alert>}
            <Form onSubmit={HandleSubmit} className='d-flex flex-column align-items-center'>
                {
                    falseCredentials &&
                    <Form.Group controlId="formBasicEmail" className='mb-3 col-12 d-flex justify-content-center'>
                        <Form.Label className='h4 text-danger'>Sai Email/ password</Form.Label>
                    </Form.Group>
                }
                <Form.Group controlId="formBasicEmail" className='mb-3 col-12'>
                    <Form.Label className='h3'>Email</Form.Label>
                    <Form.Control className='form-control-lg p-2 focus-ring shadow-none' type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className='mb-3 col-12'>
                    <Form.Label className='h3'>Password</Form.Label>
                    <Form.Control className='form-control-lg p-2 focus-ring shadow-none' type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" className="btn btn-pink btn-lg p-2 shadow-none" type="submit">
                    Đăng nhập
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;