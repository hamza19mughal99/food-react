import React from 'react';
import { FaCheck } from 'react-icons/fa';
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import {Container, Row, Col} from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {

    const columns = [{
        name: "ID",
        options: {
            display: false,
        }
    },
        'ShopName',
        'VendorEmail',
        'ShopAddress',
        'Status'
    ];

    const VendorData = [
        { id: 1, shopName: 'Pizza Hut', email: "hamza@gmail.com", shopAdd: "R-120", status: 'Active'},
        { id: 2, shopName: 'Burger Lab', email: "obaid@gmail.com", shopAdd: "R-120", status: 'Active'},
    ]

    let tableData = VendorData.map((val) => {
        return Object.values({
            id: val.id,
            shopName: val.shopName,
            email: val.email,
            shopAdd: val.shopAdd,
            status: val.status
        })
    })

    return (
        <div className={'page_responsive'}>
            <Container fluid>
                <Row>
                    <Col md={7}>
                        <MuiDataTable title="Vendor List" data={tableData} columns={columns} />
                    </Col>

                    <Col md={4}>
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
export default Dashboard;
