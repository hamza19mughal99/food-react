import React from 'react';
import { Card, Col, Form, Row } from "react-bootstrap";
import GalleryImg from "../../../../assets/img/res1.jpg";
import BannerImg from "../../../../assets/img/res2.jpg"

const Gallery = () => {

    let gallery = (
        <div className={'progress__bar'}>
            Loading....
        </div>
    )
    let mainImage = <p>Loading...</p>
    let bannerImage = <p>Loading....</p>


    bannerImage = (
            <div className={'text-center'}>
                <img alt={'shopBanner'} className={'img-fluid p-4'} src={GalleryImg} />
            </div>
        )


    mainImage = (
            <div className={'text-center'}>
                <img alt={'shopMain'} className={'img-fluid p-4'} src={BannerImg} />
            </div>
        )

        gallery = (
            <>
                <Card>
                    <Card.Header><h2>Restaurant Banner Image</h2></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <div className={'form-row align-items-center'}>
                                        <Col md={10}>
                                            <div className="input-group main__img_input">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Shop Banner Image</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" required className="custom-file-input" id="inputGroupFile01" />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">{'Banner'}</label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <div className={'text-center'}>
                                                <button type={'submit'} className={'btn btn-send btn-block px-4'}>Upload</button>
                                            </div>
                                        </Col>
                                    </div>
                                </Form>
                            </Col>
                            <Col md={12}>
                                {bannerImage}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className={'my-4'}>
                    <Card.Header> <h2>Shop Main Image</h2> </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <Form>
                                    <div className={'form-row align-items-center'}>
                                        <Col md={10}>
                                            <div className="input-group main__img_input">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">Shop Main Image</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" required className="custom-file-input" id="inputGroupFile01" />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">{'Gallery'}</label>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={2}>
                                            <div className={'text-center'}>
                                                <button type={'submit'} className={'btn btn-send btn-block px-4'}>Upload</button>
                                            </div>
                                        </Col>
                                    </div>
                                </Form>
                            </Col>
                            <Col md={12}>
                                {mainImage}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </>
        )

    return (
        <div className={'page_responsive'}>
            {gallery}
        </div>
    );
};
export default Gallery;
