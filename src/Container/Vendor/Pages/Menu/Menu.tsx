import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import BurgerImg1 from "../../../../assets/img/burger1.jpg";
import BurgerImg2 from "../../../../assets/img/burger2.jpg";
import {useNavigate} from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    const navigate = useNavigate();


    const createMenuHandler = () =>{
        navigate('/vendor/create-menu')
    }

    const editMenuHandler = () => {
        navigate('/vendor/edit-menu')
    }

    const deleteMenuHandler = () => {

        confirmAlert({
            message: 'Are you sure you want to delete this Menu?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => console.log('Click yes')
                },
                {
                    label: 'No',
                    onClick: () => console.log('Click No')
                }
            ]
        });
    }


    return (
        <div className={'page_responsive'}>
            <div className={'d-flex justify-content-end'}>
                <button className={'btn-send px-4 mr-2'} onClick={createMenuHandler}>Create Menu</button>
            </div>

            <div className={'main_menu'}>
                <Container fluid>
                    <Row>
                        <Col md={5} className={'mr-3'}>
                            <Row className={'shadow border-0 bg-white mt-2 mb-4'}>
                                <Col md={7}>
                                    <div className="mt-2">
                                        <h5>Zinger Burger</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>£ 5.00 </p>
                                            <p>Halal</p>
                                            <p>00:12</p>
                                        </div>
                                        <button className={' btn-send px-3 mr-1'} onClick={editMenuHandler}>
                                            EDIT </button>
                                        <button className={' btn-send px-3'} onClick={deleteMenuHandler}> DELETE </button>
                                    </div>
                                </Col>
                                <Col md={5} >
                                    <div className={'vendor_menu'}>
                                        <img alt={'img'} src={BurgerImg1} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={5}>
                            <Row className={'shadow border-0 bg-white mt-2 mb-4'}>
                                <Col md={7}>
                                    <div className="mt-2">
                                        <h5>Zinger Burger</h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>£ 5.00 </p>
                                            <p>Halal</p>
                                            <p>00:12</p>
                                        </div>
                                        <button className={' btn-send px-3 mr-1'} onClick={editMenuHandler}>
                                            EDIT </button>
                                        <button className={' btn-send px-3'} onClick={deleteMenuHandler}> DELETE </button>
                                    </div>
                                </Col>
                                <Col md={5} >
                                    <div className={'vendor_menu'}>
                                        <img alt={'img'} src={BurgerImg2} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Menu;