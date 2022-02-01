import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
// import { connect } from "react-redux";
// import { fetchShops } from "../../../../Store/customer/actions/index";
// import Loader from "../../../../lib/customer/Loader/Loader";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import InfoWindowEx from "../../../../lib/customer/InfoWindow/InfoWindow";
// import RatingStar from "../../../../lib/customer/RatingStar/RatingStar";
import ResImg from "../../../../../assets/img/res2.png"
import './Restaurant.css';

const Restaurant = () => {

    // const [selectedLocation, setSelectedLocation] = useState(null);
    // const [marker, setMarker] = useState({});
    // const [selectedShop, setSelectedShop] = useState(null);
    // const [infoShow, setInfoShow] = useState(false);


    // useEffect(() => {
    //     const latitudeQueryString = new URLSearchParams(props.location.search).get('latitude')
    //     const longitudeQueryString = new URLSearchParams(props.location.search).get('longitude')
    //     setSelectedLocation({
    //         lat: latitudeQueryString,
    //         lng: longitudeQueryString
    //     })
    //     props.getAllStore(latitudeQueryString, longitudeQueryString);
    //     window.scrollTo(0, 0)
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps


    // const onMarkerClick = (props, marker, shop) => {
    //     setSelectedShop(shop)
    //     setMarker(marker)
    //     setInfoShow(true);
    // }


    // let restaurant = (
    //     <div className={'text-center'}>
    //         <Loader />
    //     </div>
    // )

    // let restaurant;
    //
    // if (props.shops && props.shops.length === 0) {
    //     restaurant = (
    //         <div style={{ height: '100vh' }} className="col-md-12 col-lg-4" >
    //             <p className={'text-center mt-5'}>No Restaurant Found</p>
    //         </div>
    //     )
    // }
    //
    // let iconColor = { color: '#ff4200' }
    //
    // if (props.shops && props.shops.length > 0) {
    //     restaurant = (
    //         <div className="row ">
    //             {
    //                 props.shops.map((shop) => {
    //                     return (
    //                         <div className="col-md-6 col-lg-4 shop_cart mb-5 ">
    //                             <img src={shop.shopImage.avatar} alt={'pro-img'} />
    //                             <div className="pro-head">
    //                                 <div>
    //                                     <h3 className="text-left">{shop.shopName}</h3>
    //                                     <RatingStar value={parseInt(shop.avgRating)} />
    //                                     <FaMapMarkerAlt style={iconColor} />
    //                                     <span>{shop.address}</span>
    //                                     <hr />
    //                                 </div>
    //                                 <NavLink to={`/shop/${shop.slug}`}><button className={'btn btn-visit'}>Visit</button></NavLink>
    //                             </div>
    //                         </div>
    //                     )
    //                 })}
    //         </div>
    //
    //     )
    // }

    // const onInfoWindowClose = () => {
    //     setMarker(null);
    //     setInfoShow(false)
    // };

    return (
        <React.Fragment>
            {/*{*/}
            {/*    selectedLocation ?*/}
            {/*        <div className="map_wrapper">*/}
            {/*            <Map google={props.google}*/}
            {/*                 initialCenter={selectedLocation}*/}
            {/*                 zoom={14}*/}
            {/*            >*/}
            {/*                {*/}
            {/*                    props.shops ?*/}
            {/*                        props.shops.map((shop) => (*/}
            {/*                            <Marker*/}
            {/*                                onClick={(props, marker) => onMarkerClick(props, marker, shop)}*/}
            {/*                                position={{*/}
            {/*                                    lat: shop.location.coordinates[0],*/}
            {/*                                    lng: shop.location.coordinates[1]*/}
            {/*                                }}*/}
            {/*                                name={'Your position'} />*/}
            {/*                        ))*/}

            {/*                        : null*/}
            {/*                }*/}
            {/*                <Marker*/}
            {/*                    icon={{*/}
            {/*                        url: 'data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iZnVsbCIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciBpZD0iYSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KICAgICAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9Ii41IiBzdGREZXZpYXRpb249Ii45IiBmbG9vZC1jb2xvcj0iIzkzOTM5OCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iOCIgZmlsbD0iIzk0YzdmZiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZnJvbT0iMTEiIHRvPSI0MCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjQzIiBjeT0iNDMiIHI9IjgiIGZpbGw9IiNmZmYiIGZpbHRlcj0idXJsKCNhKSIvPgogICAgPGNpcmNsZSBjeD0iNDMiIGN5PSI0MyIgcj0iNSIgZmlsbD0iIzAxN2FmZiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgdmFsdWVzPSI1OzYuNTs1IiBiZWdpbj0iMHMiIGR1cj0iNC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K',*/}
            {/*                    }}*/}
            {/*                    position={*/}
            {/*                        selectedLocation*/}
            {/*                    }*/}
            {/*                    name={'Your position'} />*/}
            {/*                {*/}
            {/*                    selectedShop ?*/}
            {/*                        <InfoWindowEx*/}
            {/*                            marker={marker}*/}
            {/*                            onClose={onInfoWindowClose}*/}
            {/*                            visible={infoShow}*/}
            {/*                            options={{ maxWidth: 200, maxHeight: 500 }}*/}
            {/*                        >*/}
            {/*                            <div>*/}
            {/*                                <img alt={'shop'}*/}
            {/*                                     src={selectedShop.shopImage.avatar}*/}
            {/*                                     className={'img-fluid w-100'}*/}
            {/*                                />*/}
            {/*                                <p className={'bold p-0 m-0'} style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/shop/' + selectedShop._id}>{selectedShop.shopName}</p>*/}
            {/*                            </div>*/}
            {/*                        </InfoWindowEx>*/}
            {/*                        : null*/}
            {/*                }*/}
            {/*            </Map>*/}
            {/*        </div>*/}
            {/*        : null*/}
            {/*}*/}
            <div className={'shops'} >
                <section className="py-5 restaurant-section">
                    <h1 className='text-center'> All Restaurants </h1>
                    <div className={"bar-three"}/>
                    <div className={"bar-four"}/>
                    <div className='container'>
                        <div className="row justify-content-center">
                                {/*-------------1--------------*/}
                                <div className="col-md-4 col-lg-4 shop_cart mb-5 ">
                                    <img src={ResImg} alt={'pro-img'} />
                                    <div className="pro-head">
                                        <div>
                                            <h3 className="text-left">Pizza Hut</h3>
                                            {/*<RatingStar value={parseInt(shop.avgRating)} />*/}
                                            <FaMapMarkerAlt style={{color: "#ff4200"}} />
                                            <span>Gulshan-e-Maymar</span>
                                            <hr />
                                        </div>
                                        <NavLink to={`/shop`}><button className={'btn btn-visit'}>Visit</button></NavLink>
                                    </div>
                                </div>
                                {/*----------------2-------------------*/}
                                <div className="col-md-4 col-lg-4 shop_cart mb-5 ">
                                    <img src={ResImg} alt={'pro-img'} />
                                    <div className="pro-head">
                                        <div>
                                            <h3 className="text-left">Pizza Hut</h3>
                                            {/*<RatingStar value={parseInt(shop.avgRating)} />*/}
                                            <FaMapMarkerAlt style={{color: "#ff4200"}} />
                                            <span>Gulshan-e-Maymar</span>
                                            <hr />
                                        </div>
                                        <NavLink to={`/shop`}><button className={'btn btn-visit'}>Visit</button></NavLink>
                                    </div>
                                </div>

                            {/*----------------2-------------------*/}
                            <div className="col-md-4 col-lg-4 shop_cart mb-5 ">
                                <img src={ResImg} alt={'pro-img'} />
                                <div className="pro-head">
                                    <div>
                                        <h3 className="text-left">Pizza Hut</h3>
                                        {/*<RatingStar value={parseInt(shop.avgRating)} />*/}
                                        <FaMapMarkerAlt style={{color: "#ff4200"}} />
                                        <span>Gulshan-e-Maymar</span>
                                        <hr />
                                    </div>
                                    <NavLink to={`/shop`}><button className={'btn btn-visit'}>Visit</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </React.Fragment>
    )
}
export default (Restaurant);

// GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAP_API
// })