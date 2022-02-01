import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Img from "../../../../../assets/img/logo.png";
import { FiShoppingCart } from 'react-icons/fi';
import {Tab, Tabs, Row, Col, Container, Modal} from "react-bootstrap";
import "./Menu.css";

const Menu = () => {

    const [key, setKey] = useState<string>('All');
    const [show, setShow] = useState<Boolean>(false);

    let checkoutBtn = (
        <NavLink to="/add-to-cart">
            <button className={'checkout_btn'} >Go To Checkout
                <FiShoppingCart className={'cart_icon'} />
                <span className={'disable-counter'}>0</span>
            </button>
        </NavLink>
    )

    const AllergyModal = (
        // @ts-ignore
        <Modal show={show} >
            <Modal.Body>
                <div className="modal_div">
                    <h4> Allergy Information </h4>
                    <p onClick={() => setShow(false)}> X </p>
                </div>
                <div>
                    lorem
                </div>
            </Modal.Body>
        </Modal>
    )

    return (
        <React.Fragment>
            {AllergyModal}

        <div className={'checkoutBtn'}>
            {checkoutBtn}
        </div>
        <hr />
            <h3 className={'text-center'}>Menu</h3>
            <div className={'tabs_section'}>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => {
                        if (k) {
                            setKey(k)
                        }
                    }}
                    className="mb-3 tabs"
                >
                    <Tab eventKey="All" title="All" className={'w-100'}>
                        <Container>
                            <Row>
                                <Col md={6} className={'mt-5'}>
                                    <Row className="column-change mr-1">
                                        <Col md={7}>
                                            <div className="mt-2">
                                                <div className="d-flex justify-content-between">
                                                    <h5>Zinger Burger</h5>
                                                    <p style={{ backgroundColor: "#fafafa" }} > Halal </p>
                                                    <p style={{ backgroundColor: "#fafafa" }}>3:00</p>

                                                </div>
                                                <hr />
                                                <p className={'mt-3'}>£ 20</p>
                                                <div className={'d-flex'}>
                                                    <div>
                                                        <button className={' btn-send '}>ADD TO CART</button>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className={' btn-send ml-2'}
                                                            onClick={() => setShow(true)}
                                                        >
                                                            ALLERGY INFO.
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={5} >
                                            <div className={'menu_img'}>
                                                <img className="pt-3" alt={'img'} style={{ width: "100%" }} src={Img} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>

                    <Tab eventKey="Cookies" title="Cookies" className={'w-100'}>

                    </Tab>

                    <Tab eventKey="FastFood" title="FastFood" className={'w-100'}>

                    </Tab>

                    <Tab eventKey="BBQ" title="BBQ" className={'w-100'}>

                    </Tab>


                </Tabs>
            </div>


        </React.Fragment>
    );
};

export default Menu;
