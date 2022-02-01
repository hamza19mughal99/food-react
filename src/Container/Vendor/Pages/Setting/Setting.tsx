import React, { useState } from 'react';
import { Card, Col, Form, Row } from "react-bootstrap";
// import ReactQuill from 'react-quill';
// import GooglePlacesAutocomplete, { getLatLng, geocodeByAddress } from 'react-google-places-autocomplete';
// import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import {Switch} from "@material-ui/core";

const Settings = () => {

    // const [value, setValue] = useState(null);
    const [shop, setShop] = useState({});
    // const [pageLoader, setPageLoader] = useState(false);
    // const [isApiError, setIsApiError] = useState(false)
    // const [selectedLocation, setSelectedLocation] = useState(null)
    // const [markerLocation, setMarkerLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    // const token = localStorage.getItem('vendorToken');


    // const onPlaceSearch =  (val) => {
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



    // const modules = {
    //     toolbar: [
    //         [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    //         [{ 'font': [] }],
    //         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    //         ['link', 'image'],
    //         ['clean'],
    //         [{ 'align': [] }],
    //         ['code-block']
    //     ],
    // };
    // const formats = [
    //     'header',
    //     'font',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image', 'align',
    //     'code-block'
    // ];

    // useEffect(() => {
    //     axios.get('/vendor/shop', { headers: { "Authorization": `Bearer ${token}` } })
    //         .then((res) => {
    //             setShop(res.data);
    //             setSelectedLocation({
    //                 lat: res.data.location.coordinates[0],
    //                 lng: res.data.location.coordinates[1]
    //             })
    //         })
    //         .catch((err) => {
    //             setIsApiError(true)
    //         })
    // }, [])


    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // setPageLoader(true);
        // const formData = {
            // shopName: shop.shopName,
            // description: shop.description,
            // pickUp: shop.pickUp,
            // delivery: shop.delivery,
            // shopVisibility: shop.shopVisibility,
            // address: shop.address,
            // location: JSON.stringify(selectedLocation),
        // }

        // if (!shop.pickUp && !shop.delivery) {;
        //     setErrorMessage('Please select atleast one option')
        //     setPageLoader(false);
        //
        // }
        // else  {
        //     if (isValid) {
        //         axios.put('/vendor/shop', formData, { headers: { "Authorization": `Bearer ${token}` } })
        //             .then((res) => {
        //                 vendorShopSetting(addToast)
        //                 setPageLoader(false)
        //                 window.location.reload();
        //             })
        //             .catch((err) => {
        //                 setIsApiError(true)
        //             })
        //     }
        // }

    }
    const onChangeHandler = (e: { target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setShop({
            ...shop,
            [e.target.name]: value
        })
    }
    // const editorChangeHandler = (val: any) => {
    //     setShop({
    //         ...shop,
    //         description: val
    //     })
    // }

    // const getCurrentLocation = () => {
    //     setSelectedLocation(null)
    //     navigator.geolocation.getCurrentPosition(function(position) {
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

    /*const onMapClickHandler = (t, map, coord) => {*/
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

    // let loader = (
    //     <div>
    //         <p>Loading...</p>
    //     </div>
    // )


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        const { checked } = e.target
        setShop({
            ...shop,
            pickUp: checked
        })
    }

    const handleChangeDelivery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        const { checked } = e.target
        setShop({
            ...shop,
            delivery: checked
        })
    }

    return (
        <div className={'page_responsive'}>
            <div id="settings" className={'p-5'}>
                <h3 className={'text-center'}> Your Shop</h3>
                <Row className={'justify-content-center'}>
                    <Col md={8}>
                        {/*{*/}
                        {/*    shop ?*/}
                                <Form onSubmit={onSubmit}>
                                    <Card>
                                        <Card.Body>
                                            <Form.Group>
                                                <Form.Label> Shop Name </Form.Label>
                                                <Form.Control type={'text'}
                                                              name="shopName"
                                                              value={'Pizza Hut'} onChange={onChangeHandler} required />
                                            </Form.Group>
                                            {/*<Form.Group className={'py-3'}>*/}
                                            {/*    <Form.Label> Shop Description </Form.Label>*/}
                                            {/*    <ReactQuill onChange={editorChangeHandler} value={'Best Pizza'} modules={modules} formats={formats} placeholder="Leave Your Description" />*/}
                                            {/*</Form.Group>*/}
                                            <Form.Group>
                                                <Form.Label htmlFor="name">Shop Visibility</Form.Label> <br />
                                                <span style={{ fontWeight: "bold" }}> OFF </span>
                                                <Switch
                                                    checked={true}
                                                    onChange={(e) => setShop({
                                                        ...shop,
                                                        shopVisibility: e.target.checked
                                                    })}
                                                    name={'visible'}
                                                    color={'primary'}
                                                />
                                                <span style={{ fontWeight: "bold" }}> ON </span>
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Form.Label> Shop Address </Form.Label>
                                            <Form.Control type={'text'}
                                                          required
                                                          name="address" value={'Gulistan-e-Jauhar'} onChange={onChangeHandler}
                                            />
                                            <Form.Group className={'py-3'}>

                                                <div className={'d-flex justify-content-around mt-4'}>
                                                    <div className="form-check">
                                                        <input style={{ fontSize: '20px' }} onChange={(e) => handleChange(e)}

                                                               className="form-check-input mt-2"
                                                               type="checkbox"
                                                               name="pickup"
                                                               defaultChecked={true}
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
                                                               defaultChecked={false}
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
                                            {/*    <Col sm={12} className={'d-flex justify-content-between'}>*/}
                                            {/*        <div className={'w-100'}>*/}
                                            {/*            <GooglePlacesAutocomplete*/}
                                            {/*                autocompletionRequest={{*/}
                                            {/*                    bounds: [*/}
                                            {/*                        { lat: 50, lng: 50 },*/}
                                            {/*                        { lat: 100, lng: 100 }*/}
                                            {/*                    ],*/}
                                            {/*                }}*/}
                                            {/*                apiKey={process.env.REACT_APP_GOOGLE_MAP_API}*/}
                                            {/*                selectProps={{*/}
                                            {/*                    placeholder: 'Enter Location',*/}
                                            {/*                    value,*/}
                                            {/*                    onChange: (val) => onPlaceSearch(val),*/}
                                            {/*                }}*/}
                                            {/*            />*/}
                                            {/*        </div>*/}
                                            {/*        <i className="zmdi zmdi-gps-dot cur__location mt-2" style={{cursor: 'pointer'}}  onClick={getCurrentLocation} />*/}

                                            {/*    </Col>*/}

                                            {/*</Row>*/}
                                            {/*{*/}
                                            {/*    selectedLocation ?*/}
                                            {/*        <div className="map_wrapper_setting">*/}
                                            {/*            <Map google={props.google}*/}
                                            {/*                 initialCenter={selectedLocation}*/}
                                            {/*                 zoom={14}*/}
                                            {/*                 onClick={onMapClickHandler}*/}
                                            {/*            >*/}
                                            {/*                <Marker position={markerLocation}*/}
                                            {/*                        name={'Your position'} />*/}
                                            {/*            </Map>*/}
                                            {/*        </div>*/}
                                            {/*        : (*/}
                                            {/*            <div className={'text-center mt-3'}>*/}
                                            {/*                <p>Please Enter Location First</p>*/}
                                            {/*            </div>)*/}
                                            {/*}*/}
                                        </Card.Body>
                                    </Card>


                                    <div className={'text-center'}>
                                        {/*{*/}
                                        {/*    isValid ?*/}
                                        {/*        !pageLoader ?*/}
                                        {/*            <button className={'btn btn-send btn-block px-4'} type={'submit'}>Save</button>*/}
                                        {/*            : loader*/}
                                        {/*        : 	*/}
                                        <button className={'btn btn-send btn-block px-4'} disabled type={'button'}>Save</button>

                                        {/*}*/}
                                    </div>
                                </Form>
                                {/*: loader*/}
                        {/*}*/}
                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default Settings;


// GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAP_API
// })