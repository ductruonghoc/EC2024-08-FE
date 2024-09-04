import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Modal, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RemoveCartItem } from '../../../store/action/cart';
import "../../../assets/css/animation.css"
import { NavLink, useNavigate } from 'react-router-dom';
import fetching from '../../../services';

const PlaceOrderComponent = () => {
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [usernameBlank, SetUsernameBlank] = useState(false);
    const [phoneNumberBlank, setPhoneNumberBlank] = useState(false);
    const [addressBlank, setAddressBlank] = useState(false);
    const [modalShow, SetModalShow] = useState(false)
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [timeOutNavigate, setTimeOutNavigate] = useState(0);
    const [timeOutCountDown, setTimeOutCountDown] = useState(0);
    const [countDown, setCountdown] = useState(5);
    const [navigateSchedule, setNavigateShedule] = useState(false);
    const navigate = useNavigate();
    const client = useSelector(state => state.clientInfo);
    //const [order, setOrder] = useState({
    //     username: undefined,
    //     phoneNumber: undefined,
    //     address: undefined,
    //     items: undefined
    // });
    const ClearTimeOut = useCallback(() => {
        clearTimeout(timeOutNavigate);
        clearTimeout(timeOutCountDown);
    }, [timeOutNavigate, timeOutCountDown])
    useEffect(() => {
        const newTotalPrice = cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [cart, setTotalPrice]); // Function to calculate total price
    const CountDown = (num) => {
        if (num === 0) //Terminate point
            return;
        setCountdown(num);
        return setTimeOutCountDown(setTimeout(() => CountDown(num - 1), 1000));
    }
    const HandlePlaceOrder = () => {
        //State saving local
        const msgBody = {
            items: cart.items
        }
        const option = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${client?.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(msgBody)
        }
        fetching("api/orders/add-orders", option).then(() => {
            CountDown(countDown);
            setNavigateShedule(true);
            setTimeOutNavigate(setTimeout(() => ClearTimeOut() || navigate("/Shop"), 5001));
        }).catch(error => console.log(error));
    };

    // useEffect(() => {
    //     setOrder(
    //         {
    //             date: new Date().toISOString(),
    //             username: username,
    //             phoneNumber: phoneNumber,
    //             address: address,
    //             items: cart.items
    //         }
    //     )
    // }, [address, username, phoneNumber, cart, setOrder]);

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        {
                            client?.token === undefined &&
                            <div className='text-bg-warning p-3'>
                                Xin hãy đăng nhập để đặt hàng.
                                <NavLink
                                    to="/">Đăng nhập</NavLink>
                            </div>
                        }
                        <Form>
                            <Form.Group controlId="formUsername">
                                {
                                    usernameBlank &&
                                    username.length === 0 &&
                                    <Form.Label
                                        className='text-danger'>
                                        Không được để trống!
                                    </Form.Label>
                                }
                                <br />
                                <Form.Label
                                    className='fw-bold'>
                                    Tên
                                </Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Nhập tên người nhận"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    onBlur={() => SetUsernameBlank(username.length === 0)}
                                    required />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                {
                                    addressBlank &&
                                    address.length === 0 &&
                                    <Form.Label
                                        className='text-danger'>
                                        Không được để trống!
                                    </Form.Label>
                                }
                                <br />
                                <Form.Label
                                    className='fw-bold'>Địa chỉ</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập địa chỉ"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    onBlur={() => setAddressBlank(address.length === 0)}
                                    required />
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber">
                                {
                                    phoneNumberBlank &&
                                    phoneNumber.length === 0 &&
                                    <Form.Label
                                        className='text-danger'>
                                        Không được để trống!
                                    </Form.Label>
                                }
                                <br />
                                <Form.Label
                                    className='fw-bold'>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Nhập số điện thoại"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    onBlur={() => setPhoneNumberBlank(phoneNumber.length === 0)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phương thức đặt hàng: COD</Form.Label>
                            </Form.Group>
                            <Button
                                variant="dark"
                                onClick={() => SetModalShow(true)}
                                disabled={username.length === 0 || address.length === 0 || phoneNumber.length === 0 || totalPrice === 0}>Đặt hàng</Button>
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
            <Modal
                show={modalShow}>
                <Modal.Header>
                    <Modal.Title>
                        {
                            navigateSchedule ? "Hẹn gặp lại" : "Xác nhận đặt hàng"
                        }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ backgroundColor: "#ecd75a" }}
                    className='d-flex flex-column align-items-center overflow-hidden'>
                    {
                        !navigateSchedule &&
                        <strong className='h3'>
                            Bạn đồng ý đặt đơn hàng này chứ?
                        </strong>
                    }
                    {
                        navigateSchedule &&
                        <>
                            <div
                                className='h1 text-center'>
                                Xin cám ơn
                                <br />
                                bạn đã ủng hộ!
                            </div>
                            <div
                                className='duck-family' />
                            <Button
                                variant='warning'
                                className='d-flex align-items-center'
                                onClick={() => ClearTimeOut() || navigate("/Shop")}>
                                <Spinner />
                                Tiếp tục mua sắm sau {countDown} s
                            </Button>
                        </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => SetModalShow(false)}>
                        Đóng
                    </Button>
                    <Button
                        variant="dark"
                        onClick={HandlePlaceOrder}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PlaceOrderComponent;