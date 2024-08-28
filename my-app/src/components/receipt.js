import React from 'react';
import { Col, Card, Form, ListGroup } from 'react-bootstrap';
import { DoneReceipt } from '../store/action/receipt';
import { useDispatch } from 'react-redux';
const Receipt = ({ receipt }) => {
    const dispatch = useDispatch();
    const Done = () => {
        //Set status to done -> update in be then remove from reducer
        dispatch(DoneReceipt(receipt.id));
    }
    return (
        <Col md={12}>
            <Card bg='dark' text='light' className='w-100'>
                <Card.Header>
                    <div className='container d-inline-flex justify-content-between'>
                        Đơn hàng#{receipt.id}
                        <Form.Check // prettier-ignore
                            type='checkbox'
                            label='Done'
                            onChange={Done}
                        />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Giao ngày: {receipt.date}</Card.Title>
                    <Card.Text>Ngày: {receipt.date}</Card.Text>
                    <Card.Text className='row'>
                        <span className='h6 col-8'>Tổng cộng: </span>
                        <span className='h6 col-2'>
                            {receipt.amount.toLocaleString('en-EN')} VND
                        </span>
                    </Card.Text>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Danh sách mặt hàng</h3>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <div className='row'>
                                <h6 className='col-4 fs-6'>
                                    Tên
                                </h6>
                                <h6 className='col-2 fs-6'>
                                    Số lượng
                                </h6>
                                <h6 className='col-2 fs-6'>
                                    Đơn giá
                                </h6>
                                <h6 className='col-2 fs-6'>
                                    Thành tiền
                                </h6>
                            </div>
                        </ListGroup.Item>
                        {receipt.item.map((i, idx) => {
                            return (<ListGroup.Item key={idx}>
                                <div className='row'>
                                    <p className='col-4 fs-6'>
                                        {i.name}
                                    </p>
                                    <p className='col-2 fs-6'>
                                        {i.quantity}
                                    </p>
                                    <p className='col-2 fs-6'>
                                        {i.price.toLocaleString('en-EN')} VND
                                    </p>
                                    <p className='col-2 fs-6'>
                                        {(i.quantity * i.price).toLocaleString('en-EN')} VND
                                    </p>
                                </div>
                            </ListGroup.Item>);
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Receipt;