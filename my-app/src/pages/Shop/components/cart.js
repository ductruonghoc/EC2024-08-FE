import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { RemoveCartItem } from '../../../store/action/cart';
const Cart = ({ cartItems, handleClose, show }) => {
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
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
          {cartItems.map((item, index) => (
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
                  onClick={() => (dispatch(RemoveCartItem(item.id)))}>X</Button>
              </div>
            </ListGroup.Item>
          ))
          }
        </ListGroup>
        <h4>Tổng cộng: {total.toLocaleString('en-EN')} VND</h4>
        <div className='row justify-content-center'>
          <Button variant="dark">Đặt hàng</Button>
        </div>
      </Offcanvas.Body>

    </Offcanvas>
  );
};

export default Cart;