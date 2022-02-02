import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import CountUp from 'react-countup';
import { FaShoppingCart } from 'react-icons/fa';
import "./Sales.css";

const Sales = () => {

    const cardStats = [
        {
            title: 'Daily Sales',
            value: 2000,
            icon: <FaShoppingCart className='pl-4 dashboard_icon'/>
        },
        {
            title: 'Weekly Sales',
            value: 10000,
            icon: <FaShoppingCart className='pl-4 dashboard_icon'/>
        },
        {
            title: 'Monthly Sales',
            value: 21000,
            icon: <FaShoppingCart className='pl-4 dashboard_icon'/>
        }
    ]

    return (
        <Container fluid>
            <Row className={'mt-4'}>
                {
                    cardStats.map((item, index) => (
                        <Col md={4} key={index}>
                        <div className="d-flex w-100 dashboard_card mt-4 justify-content-between align-items-center">
                            <div className={'card_title'}>
                                <p>{ item.title }</p>
                                <p className={'value'}> <CountUp end={ item.value } duration={1}/></p>
                            </div>
                            <div>
                                { item.icon }
                            </div>
                        </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Sales;
