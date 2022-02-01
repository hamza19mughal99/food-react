import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import PersonalDetails from "./PersonalDetails/PersonalDetails";

const AddToCart = () => {
    return (
        <React.Fragment>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <PersonalDetails />
                    </Col>

                    <Col md={4}>

                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    );
};

export default AddToCart;
