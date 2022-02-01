import React, { useState } from "react";
import "./RestaurantView.css";
import Menu from "../Menu/Menu";
// import { Modal } from "react-bootstrap";
import { FaMapMarkerAlt } from 'react-icons/fa';
// import RatingStar from "../../../../lib/customer/RatingStar/RatingStar";
// import ApiError from "../../../../lib/ApiError/ApiError"
// import Loader from "../../../../lib/customer/Loader/Loader";
// import {NavLink} from "react-router-dom";
import MainImg from "../../../../../assets/img/res2.png";

const RestaurantView = () => {

    // const [allServices, setAllServices] = useState(null)
    // const [isApiError, setIsApiError] = useState(false)
    // const [isMsgError, setIsMsgError] = useState(null)
    // const [category, setCategory] = useState([])
    // const [isOrdered, setIsOrdered] = useState(false)
    // const [allReviews, setAllReviews] = useState([])
    const [show, setShow] = useState(false)


    // const [showLocationError, setShowLocationError] = useState(false);
    // const customerToken = localStorage.getItem('token')


    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition( (position) => {
    //         axios('/get-current-location/' + storeSlug)
    //             .then((res) => {
    //                 const response = res.data
    //                 function arePointsNear(checkPoint: { lat: any; lng: any; }, centerPoint: { lat: any; lng: any; }, km: number) {
    //                     const ky = 40000 / 360;
    //                     const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    //                     const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    //                     const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    //                     return Math.sqrt(dx * dx + dy * dy) <= km;
    //                 }
    //
    //                 const currentLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
    //                 const shopLocation = { lat: response.location[0], lng: response.location[1]};
    //
    //                 const n = arePointsNear(currentLocation, shopLocation, 10);
    //                 if (!(n && response.pickUp && response.shopVisibility)) {
    //                     setShowLocationError(true)
    //                 }
    //
    //             })
    //     } , (error) => {
    //         setShowLocationError(true)
    //     } )
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // useEffect(() => {
    //     axios.get('/reviews/' + storeSlug)
    //         .then((res) => {
    //             setAllReviews(res.data.reviews);
    //         })
    //
    //     if (localStorage.getItem('redirect_to')) {
    //         localStorage.removeItem(localStorage.getItem('redirect_to'))
    //     }
    //     if (customerToken) {
    //         axios.get('/already-ordered/' + storeSlug, { headers: { "Authorization": `Bearer ${customerToken}` } })
    //             .then((res) => {
    //                 setIsOrdered(res.data.isOrdered)
    //             })
    //     }
    //     else {
    //         setIsOrdered(true)
    //     }
    //     props.getShop(storeSlug);
    //
    //     axios.get(`/shop/${storeSlug}`)
    //         .then((res) => {
    //             setAllServices(res.data.product)
    //         })
    //
    //         .catch((err) => {
    //             setIsApiError(true)
    //             setIsMsgError(err.message)
    //         })
    //
    //     axios.get(`/category/${storeSlug}`)
    //         .then((res) => {
    //             setCategory(res.data)
    //         })
    //     window.scrollTo(0, 0)
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let products = <Menu />;
    // if (!allServices) {
    //     products = <Loader loaderClass={'text-center'} />
    // }
    //
    // if (allServices && allServices.length === 0) {
    //     products = (
    //         <div className={'text-center'}>
    //             <h5 style={{ fontWeight: "bold" }}> No Product Found </h5>
    //         </div>
    //     )
    // }

    // if (allServices && allServices.length > 0) {
    //     products = <Menu/>
    // }

    // let RestaurantView = (
    //     <div style={{ height: '100vh' }} className={'d-flex justify-content-center'}>
    //         <Loader loaderClass={'text-center mt-5'} />
    //     </div>
    // )


    const reviewModalHandler = () => {
        setShow(!show)
    }
    // const handleClose = () => setShow(!show);

    // const locationModal = (
    //     <Modal show={showLocationError} size={'md'} className={'h-100'} style={{ borderRadius: "15px" }} >
    //         <Modal.Body>
    //             <div className={'text-center'}>
    //                 <h5>This shop is not available in your area</h5>
    //                 <NavLink to={'/'}> <button className={'btn-send'} >Go Back to Search</button></NavLink>
    //             </div>
    //         </Modal.Body>
    //     </Modal>
    // )

    // const modal = (
    //     <Modal show={show} size={'lg'} className={'h-100 w-100'}>
    //         <Modal.Body>
    //             <div className="d-flex justify-content-between align-items-center">
    //                 <p style={{ fontSize: "20px" }}> Reviews </p>
    //                 <p style={{ cursor: "pointer", fontSize: "20px" }} onClick={handleClose} title="Close Staff">X</p>
    //             </div>
    //             <hr />
    //             {
    //                 allReviews.map((reviews) => (
    //                     <React.Fragment>
    //                         <div key={allReviews} className={'container'}>
    //                             <div className="d-flex  justify-content-between">
    //                                 <div>
    //                                     <p>{reviews.customerId.name}</p>
    //                                 </div>
    //                                 <div>
    //                                     <RatingStar value={parseInt(reviews.rating)} />
    //                                 </div>
    //                             </div>
    //                             <p>{reviews.comment}</p>
    //                         </div>
    //                         <hr />
    //                     </React.Fragment>
    //                 ))
    //             }
    //
    //         </Modal.Body>
    //     </Modal>
    // )

    // if (!props.loading && props.shop && props.shop.shopBannerImage) {

        let RestaurantView = (
            <div className={'container w-100 shadow res_div'}>
                <img className={'res-img'} src={MainImg} alt="img" />
                <div className={'mt-3'}>
                    <h3 style={{ fontWeight: "700" }}> Pizza Hut </h3>
                    <div className="bar-view1"/>
                    <div className="bar-view2"/>
                </div>
                <div className={'d-flex'}>
                    {/*<div>*/}
                    {/*    <RatingStar  value={parseInt(props.shop.avgRating)} />*/}
                    {/*</div>*/}
                    <div className={'ml-2 mt-1 review-tag'}>
                        <p onClick={reviewModalHandler}> Check Reviews </p>
                    </div>
                </div>
                <div className={'d-flex'}>
                    <div >
                        <span className="map-alt mt-3"><FaMapMarkerAlt /> </span>
                    </div>
                    <div className={'ml-2 mt-2'}>
                        <p> Gulshan-e-Maymar </p>
                    </div>
                </div>
                <p className={'text-left light'}>
                    <td dangerouslySetInnerHTML={{ __html: "Best Shop In Town" }} />
                </p>
                <div className="mt-4">
                    {products}
                </div>
            </div>
        )
    // }

    return (
        <>
            {/*{modal}*/}
            {/*{ locationModal }*/}
            {/*<ApiError show={isApiError} error={isMsgError} />*/}
            {RestaurantView}
        </>
    )
}
export default RestaurantView;
