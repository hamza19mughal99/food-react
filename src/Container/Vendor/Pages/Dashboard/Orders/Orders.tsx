import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MuiDataTable from "../../../../../Components/MuiDataTable/MuiDataTable";
import CountUp from 'react-countup';
import { FaShoppingCart } from 'react-icons/fa';
import {FaCheck} from "react-icons/fa";

const Orders = () => {

    const columns = [
        "Order No.",
        'Customer Name',
        'Customer Email',
        'Phone',
        'Status'
    ];

    const VendorData = [
        { id: 1, customerName: 'Hamza Mughal', customerEmail: "hamza@gmail.com", mobileNumber: "03492496204", status: 'Successful'},
    ]

    let tableData = VendorData.map((val) => {
        return Object.values({
            id: val.id,
            customerName: val.customerName,
            customerEmail: val.customerEmail,
            mobileNumber: val.mobileNumber,
            status: val.status
        })
    })

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={8}>
                        <MuiDataTable title="Order List" data={tableData} columns={columns} />
                    </Col>

                    <Col md={4}>
                        <div className="d-flex w-100 dashboard_card justify-content-between align-items-center">
                            <div className={'card_title'}>
                                <h5>Today Orders</h5>
                                <p className={'value'}> <CountUp end={4} duration={1}/></p>
                            </div>
                            <div>
                                <FaShoppingCart className='pl-4 dashboard_icon' />
                            </div>
                        </div>

                        <div className={'dashboard active_main'}>
                            <p><FaCheck /> ACTIVE</p>
                            <p>2</p>
                        </div>

                        <div className={'dashboard in_active_main mt-3'}>
                            <p><FaCheck /> IN-ACTIVE</p>
                            <p>3</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Orders;