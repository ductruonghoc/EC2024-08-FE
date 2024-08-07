import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import "../../../assets/css/button.css";
import { SetClient } from '../../../store/action/client_info';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const HandleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const client = {
            account: username,
            password: password,
            name: "Đức",
            role: 2
        }
        localStorage.setItem('client', JSON.stringify(client))
        dispatch(SetClient(client))
    };
    useEffect(() => {
        const client = JSON.parse(localStorage.getItem('client'))
        if (client)
        {
            dispatch(SetClient(client))
        }
    }, [dispatch])//Check in the cache
    const client = useSelector(state => state.clientInfo)

    useEffect(() => {
        if(client.role === 3)
        {
            navigate("/Shop")
        }
        else if (client.role === 2)
        {
            navigate("/Staff")
        }
    },[client, navigate])//Listen to account state change and navigate to its

    return (
        <div className='col-4'>
            <Form onSubmit={HandleSubmit} className='d-flex flex-column align-items-center'>
                <Form.Group controlId="formBasicEmail" className='mb-3 col-12'>
                    <Form.Label className='h3'>Username</Form.Label>
                    <Form.Control className='form-control-lg p-2 focus-ring shadow-none' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
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