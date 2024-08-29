import React, { useEffect, useState } from 'react';
import { Button, Form, Alert, AlertHeading } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import "../../../assets/css/button.css";
import { SetClient } from '../../../store/action/client_info';
import { useNavigate } from 'react-router-dom';
import fetching from '../../../services/api/fetch';


const LoginForm = () => {
    //State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(undefined);
    const [falseCredentials, setFalseCredentials] = useState(false);
    const [tokenExpired, setTokenExpired] = useState(false);
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
            "http://localhost:3001/api/user/login",
            option
        ).then(result => setToken(result.token)) //Set receving token
            .catch(error => {
                setFalseCredentials(error);
            });
        // localStorage.setItem('client', JSON.stringify(client))
        // dispatch(SetClient(client))
    };
    useEffect(() => {
        if (token === undefined) {
            return;//Basecase
        }
        const option = {
            headers: {
                Authorization: `Bearer ${token}`
            }, //tell the object content form
        };
        fetching(
            "http://localhost:3001/api/user/profile",
            option
        ).then(result =>
            dispatch(SetClient(result)) &&
            localStorage.setItem('AuthToken', token)) //Set receving token
            .catch(error => {
                localStorage.removeItem('AuthToken');
                setTokenExpired(error);
            });

    }, [token, tokenExpired, dispatch])//Token handler
    useEffect(() => {
        const client = JSON.parse(localStorage.getItem('client'))
        if (client) {
            dispatch(SetClient(client))
        }
    }, [dispatch])//Check in the cache
    useEffect(() => {
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
    }, [client, navigate])//Listen to account state change and navigate to its

    return (
        <div className='col-4'>
            {tokenExpired &&
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
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;