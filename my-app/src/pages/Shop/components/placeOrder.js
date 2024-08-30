import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveCartItem } from '../../../store/action/cart';

const PlaceOrderComponent = () => {
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector(state => state.cart);
    const dispatch=useDispatch();
    useEffect(() => {
        const newTotalPrice = cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [cart, setTotalPrice]); // Function to calculate total price

    const handlePlaceOrder = () => {
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="tel" placeholder="Nhập số điện thoại" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phương thức đặt hàng: COD</Form.Label>
                        </Form.Group>
                        <Button variant="dark" onClick={handlePlaceOrder}>Đặt hàng</Button>
                    </Form>
                </Col>
                <Col md={4}>
                    <strong>Kiểm tra các mặt hàng của bạn tại đây</strong>
                    <ListGroup className='mh-75'>
                        <ListGroup.Item >
                            <div className='row'>
                                <h6 className='col-4 fs-6'>
                                    Tên
                                </h6>
                                <h6 className='col-3 fs-6'>
                                    Số lượng
                                </h6>
                                <h6 className='col-3 fs-6'>
                                    Đơn giá
                                </h6>
                            </div>
                        </ListGroup.Item>
                        {cart?.items.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <div className='row'>
                                    <h6 className='col-4 fs-6'>
                                        {item.name}
                                    </h6>
                                    <h6 className='col-3 fs-6'>
                                        {item.quantity}
                                    </h6>
                                    <h6 className='col-3 fs-6'>
                                        {item.price.toLocaleString('en-EN')}
                                    </h6>
                                    <Button
                                        className='col-1 h-25 m-0 p-0 d-flex justify-content-center align-items-center'
                                        variant='danger'
                                        onClick={() => (dispatch(RemoveCartItem(item.cartId)))}>X</Button>
                                </div>
                            </ListGroup.Item>
                        ))
                        }
                    </ListGroup>
                    <p>Tổng giá: {totalPrice.toLocaleString()}</p>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default PlaceOrderComponent;