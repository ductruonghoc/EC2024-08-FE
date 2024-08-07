import React from 'react';
import { Col, Card, Form, ListGroup } from 'react-bootstrap';

const Receipt = ({ receipt }) => {
    return (
        <Col md={7}>
            <Card bg='dark' text='light'>
                <Card.Header>
                    <div className='container d-inline-flex justify-content-between'>
                        Đơn hàng#{receipt.id}
                        <Form.Check // prettier-ignore
                            type='checkbox'
                            label='Done'
                        />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Giao ngày: {receipt.date}</Card.Title>
                    <Card.Text>Ngày: {receipt.date}</Card.Text>
                    <ListGroup>
                        {
                            receipt.item
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        }
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Receipt;