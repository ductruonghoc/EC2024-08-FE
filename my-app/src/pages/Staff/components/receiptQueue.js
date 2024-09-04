import React, { useEffect, lazy, Suspense } from "react";
import "../../../assets/css/orderQueue.css"
import { Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { SetReceipt } from "../../../store/action/receipt";
import fetching from "../../../services/";
import nothing from "../../../assets/img/2096.jpg"

const Receipt = lazy(() => import("../../../components/receipt.js"));
const ReceiptQueue = () => {
    const staff = useSelector(state => state.clientInfo);
    const receipts = useSelector(state => state.receipt?.item)
    const dispatch = useDispatch();
    useEffect(() => {
        const staffId = staff.userId;
        const option = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ staffId: staffId })
        };
        fetching('api/orders/undone', option).then(result => {
            const orderQueue = [];
            for (const it in result) {
                orderQueue.push(result[it]);
            }
            dispatch(SetReceipt(orderQueue));
        }
        ).catch(() => { });
    }, [dispatch, staff]);

    return (
        <Container>
            <h1>Đơn hàng khách đặt</h1>
            <Row className="container-fluid d-flex justify-content-center">
                <Suspense fallback={<Spinner />}>
                    <div className="col-11 d-flex flex-column align-items-center gap-3">
                        {
                            (receipts && receipts?.length > 0) ?
                                receipts?.map(receipt => (
                                    <Receipt key={receipt.id} receipt={receipt} />
                                )) :
                                <>
                                    <img src={nothing} alt="nothing" className="img-fluid" />
                                    <div className="fw-bold p-5">There aren't nothing</div>
                                </>
                        }
                    </div>
                </Suspense>
            </Row>
        </Container>
    );
}

export default ReceiptQueue;