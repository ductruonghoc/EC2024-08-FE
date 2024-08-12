import React, { useEffect } from "react";

import "../../../assets/css/orderQueue.css"

import { Container, Row } from 'react-bootstrap';
import Receipt from "../../../components/receipt";
import { useDispatch, useSelector } from "react-redux";
import {orderQueue} from "../../../assets/testData/orderQueue";
import { SetReceipt } from "../../../store/action/receipt";
const ReceiptQueue = () => {
    const receipts = useSelector(state => state.receipt?.item)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SetReceipt(orderQueue))
    }, [dispatch])
    return (
        <Container>
            <Row>
                <div className="d-flex flex-column align-items-center gap-3">
                    {receipts?.map(receipt => (
                        <Receipt key={receipt.id} receipt={receipt} />
                    ))}
                </div>
            </Row>
        </Container>
    );
}

export default ReceiptQueue;