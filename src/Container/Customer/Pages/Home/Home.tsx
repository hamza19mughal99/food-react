import React, { useState } from 'react'
import "./Home.css";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const [value, setValue] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null)
    const navigation = useNavigate();

    const onFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        navigation('/restaurant');

        // if (selectedLocation) {
        //     // @ts-ignore
        //     window.location.href = `/restaurant?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}`
        // }
    }

    const onPlaceSearch = (val: any) => {
        setValue(val)
        geocodeByAddress(val.label)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                    // setSelectedLocation({
                    //     lat,
                    //     lng
                    // })
                }
            );
    }


    // const getCurrentLocation = () => {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude}, ${position.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_MAP_API}`)
    //             .then((res) => {
    //                 let obj = {
    //                     label: res.data.results[0].formatted_address,
    //                     value: res.data.results[0],
    //                 }
    //                 setValue(obj)
    //                 setSelectedLocation({
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude
    //                 })
    //             })
    //
    //     });
    // }


    return (
        <>
            <div className="main-homeSection">
                <section className="banner-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="heading-text">
                                    <h1>Discover the best homeFood in UK.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="filter-section">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="card form-section-card ">
                                    <form action="" className="" onSubmit={onFormSubmit}>
                                        <div className="main-search-section">
                                            <div style={{width: "290%", border: "none"}}>
                                                <GooglePlacesAutocomplete
                                                    autocompletionRequest={{
                                                        bounds: [
                                                            { lat: 50, lng: 50 },
                                                            { lat: 100, lng: 100 }
                                                        ],
                                                    }}
                                                    apiKey={"AIzaSyAy5GKZXkhiHbt_J_MN__a2ylt9N6jlN3U"}
                                                    selectProps={{
                                                        placeholder: 'Enter Your Full Address',
                                                        value,
                                                        onChange: (val) => onPlaceSearch(val),
                                                    }}
                                                />
                                            </div>
                                            <div className=" ml-2 input-group d-flex justify-content-start">
                                                <div>
                                                    <button type="button" className="btn btn-send btn-block"> Get Current Location </button>
                                                </div>
                                                <div className="ml-2">
                                                    {
                                                        selectedLocation ?
                                                            (
                                                                <button type="submit" className={'btn btn-send btn-block'}>
                                                                    Search
                                                                </button>
                                                            )
                                                            :
                                                            <button type="submit" className={'btn btn-send btn-block'}> Search </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home;
