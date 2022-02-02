import React, { useState } from 'react';
import { Card, Col, Form, Row } from "react-bootstrap";
// import 'react-dropzone-component/styles/filepicker.css';
// import 'dropzone/dist/min/dropzone.min.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
// import GooglePlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-google-places-autocomplete';

const ShopCreate = () => {

    const [description, setDescription] = useState('');
    // const [selectedLocation, setSelectedLocation] = useState(null)
    // const [markerLocation, setMarkerLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    let [deliveryStatus, setDeliveryStatus] = useState({
        delivery: false,
        pickUp: false
    })

    // const getCurrentLocation = () => {
    //     setSelectedLocation(null)
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         setSelectedLocation({
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         })
    //         setMarkerLocation({
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         })
    //     });
    // }

    // const onPlaceSearch = (val) => {
    //     setSelectedLocation(null)
    //     setValue(val);
    //     geocodeByAddress(val.label)
    //         .then(results => getLatLng(results[0]))
    //         .then(({ lat, lng }) => {
    //                 setSelectedLocation({
    //                     lat,
    //                     lng
    //                 })
    //                 setMarkerLocation({
    //                     lat,
    //                     lng
    //                 })
    //             }
    //         );
    // }


    // const onMapClickHandler = (t, map, coord) => {
    //     setSelectedLocation(null)
    //     const { latLng } = coord;
    //     const lat = latLng.lat();
    //     const lng = latLng.lng();
    //     setSelectedLocation({
    //         lat,
    //         lng
    //     })
    //     setMarkerLocation({
    //         lat,
    //         lng
    //     })
    // }


    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean'],
            [{ 'align': [] }],
            ['code-block']
        ],
    };
    const formats = [
        'header',
        'font',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'align',
        'code-block'
    ];


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        const { checked } = e.target
        setDeliveryStatus({
            ...deliveryStatus,
            pickUp: checked
        })
    }

    const handleChangeDelivery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        const { checked } = e.target
        setDeliveryStatus({
            ...deliveryStatus,
            delivery: checked
        })
    }


    const editorChangeHandler = (val: React.SetStateAction<string>) => {
        setDescription(val);
    }
    const onSubmit = (data: any) => {
        // const formData = new FormData();
        // formData.append('shopName', data.shopName);
        // formData.append('description', description);
        // formData.append('pickUp', deliveryStatus.pickUp);
        // formData.append('delivery', deliveryStatus.delivery);
        // formData.append('address', data.address);
        // formData.append('location', JSON.stringify(selectedLocation));
        // formData.append('shopImage', data.shopImage[0]);
        // formData.append('shopBannerImage', data.shopBannerImage[0]);



        // if (!deliveryStatus.pickUp && !deliveryStatus.delivery) {;
        //     setErrorMessage('Please select atleast one option')
        //     setLoader(false);
        //
        // } else  {
        //     axios.post('/vendor/shop', formData, { headers: { "Authorization": `Bearer ${token}` } })
        //         .then((res) => {
        //             localStorage.setItem('isProfileSetup', res.data.profileSetup);
        //             window.location.href = '/vendor/dashboard/'
        //             setLoader(false)
        //         }).catch((err) => {
        //         setIsApiError(true)
        //         setLoader(false)
        //     })
        // }
    };

    return (
        <>
            <div id="settings" className={'p-5'}>
                <h3 className={'text-center'}>Create Your Shop</h3>
                <Row className={'justify-content-center'}>
                    <Col md={8}>
                        <Form onSubmit={onSubmit}>
                            <Card>
                                <Card.Body>
                                    <Form.Group>
                                        <Form.Label> Shop Name </Form.Label>
                                        <Form.Control type={'text'}/>
                                    </Form.Group>
                                    <Form.Group className={'py-3'}>
                                        <Form.Label> Shop Description </Form.Label>
                                        <ReactQuill onChange={editorChangeHandler} value={description} modules={modules} formats={formats} placeholder="Leave Your Description" />
                                    </Form.Group>
                                    <Card className={'my-4 p-4'}>
                                        <Form.Group className={'py-3'}>
                                            <Form.Label> Shop Address </Form.Label>
                                            <Form.Control type={'text'}/>
                                        </Form.Group>
                                        <Form.Group className={'py-3'}>
                                            <div className={'d-flex justify-content-around mt-4'}>
                                                <div className="form-check">
                                                    <input style={{ fontSize: '20px' }} onChange={(e) => handleChange(e)}
                                                           className="form-check-input mt-2"
                                                           type="checkbox"
                                                           name="pickup"
                                                           defaultChecked={deliveryStatus.pickUp}
                                                           id="pickup" />
                                                    <label style={{ fontSize: '20px', color: "#424770" }} className="form-check-label" form="pickup">
                                                        PickUp
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input style={{ fontSize: '20px' }} onChange={(e) => handleChangeDelivery(e)}
                                                           className="form-check-input mt-2"
                                                           type="checkbox"
                                                           name="delivery"
                                                           defaultChecked={deliveryStatus.delivery}
                                                           id="delivery" />
                                                    <label style={{ fontSize: '20px', color: "#424770" }} className="form-check-label" form="delivery">
                                                        Delivery
                                                    </label>
                                                </div>
                                            </div>
                                            <p style={{
                                                color: 'red'
                                            }} className={'text-center'}>{ errorMessage }</p>
                                        </Form.Group>
                                        {/*<Row className={'align-items-center justify-content-center mt-4'}>*/}
                                        {/*    <Col sm={8}>*/}
                                        {/*        <GooglePlacesAutocomplete*/}
                                        {/*            apiKey={process.env.REACT_APP_GOOGLE_MAP_API}*/}
                                        {/*            autocompletionRequest={{*/}
                                        {/*                bounds: [*/}
                                        {/*                    { lat: 50, lng: 50 },*/}
                                        {/*                    { lat: 100, lng: 100 }*/}
                                        {/*                ],*/}
                                        {/*                componentRestrictions: {*/}
                                        {/*                    country: ['uk'],*/}
                                        {/*                }*/}
                                        {/*            }}*/}

                                        {/*            selectProps={{*/}
                                        {/*                placeholder: 'Enter Location',*/}
                                        {/*                value,*/}
                                        {/*                onChange: (val) => onPlaceSearch(val),*/}
                                        {/*            }}*/}
                                        {/*        />*/}
                                        {/*    </Col>*/}
                                        {/*    <Col sm={1} className={'mt-1'}>*/}
                                        {/*        <i className="zmdi zmdi-gps-dot cur__location" style={{ cursor: 'pointer' }} onClick={getCurrentLocation} />*/}
                                        {/*    </Col>*/}
                                        {/*</Row>*/}

                                        {/*{*/}
                                        {/*    selectedLocation ?*/}
                                        {/*        <div className={'mb-4 map_wrapper_setting'}>*/}
                                        {/*            <Map google={props.google}*/}
                                        {/*                 initialCenter={selectedLocation}*/}
                                        {/*                 zoom={14}*/}
                                        {/*                 onClick={onMapClickHandler}*/}
                                        {/*            >*/}
                                        {/*                <Marker position={markerLocation} name={'Your position'} />*/}
                                        {/*            </Map>*/}
                                        {/*        </div>*/}
                                        {/*        : (*/}
                                        {/*            <div className={'text-center mt-3'}>*/}
                                        {/*                <p>Please Enter Location First</p>*/}
                                        {/*            </div>)*/}
                                        {/*}*/}
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card className={'my-4'}>
                                <Card.Body>
                                    <p className={'text-center'}>Gallery</p>
                                    <Form.Group className={'py-3'}>
                                        <label htmlFor="exampleFormControlFile1">Shop Main Image</label>
                                        <input type="file"
                                               required
                                               accept=".png, .jpg, .jpeg"
                                               className="form-control-file" />
                                    </Form.Group>
                                    <Form.Group className={'py-3'}>
                                        <label htmlFor="exampleFormControlFile1">Shop Banner Image</label>
                                        <input type="file"
                                               required
                                               accept=".png, .jpg, .jpeg"
                                               className="form-control-file" />
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                            <div className={'text-center'}>
                                <button className={'btn btn-send btn-block px-4'} type={'submit'}>Save</button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default ShopCreate;

// GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAP_API
// })