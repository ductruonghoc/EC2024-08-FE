import React, { useEffect, lazy } from "react";
import "../../../assets/css/orderQueue.css"
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {orderQueue} from "../../../assets/testData/orderQueue";
import { SetReceipt } from "../../../store/action/receipt";

const Receipt = lazy(()=>import("../../../components/receipt.js"));
const ReceiptQueue = () => {
    const receipts = useSelector(state => state.receipt?.item)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SetReceipt(orderQueue))
    }, [dispatch])
    return (
        <Container>
            <h1>Đơn hàng khách đặt</h1>
            <Row  className="container-fluid d-flex justify-content-center">
                <div className="col-11 d-flex flex-column align-items-center gap-3">
                    {receipts?.map(receipt => (
                        <Receipt key={receipt.id} receipt={receipt} />
                    ))}
                </div>
            </Row>
        </Container>
    );
}

export default ReceiptQueue;