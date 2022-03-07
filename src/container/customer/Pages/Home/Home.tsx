import React, { useState } from 'react'
import "./Home.css";
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import {useNavigate} from "react-router-dom";
import {autocompletionRequest} from "../../../../lib/helper";
import {ICoordinates} from "../../../../interface";
import axios from "axios";

const Home = () => {

    const [googlePlace, setGooglePlace] = useState<any>(null);
    const [selectedLocation, setSelectedLocation] = useState<ICoordinates | null>(null)
    const navigation = useNavigate();

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedLocation) {
            navigation(`/shops?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}`);
        }
    }

    const onPlaceSearch = (val: any) => {
        setGooglePlace(val)
        geocodeByAddress(val.label)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                    setSelectedLocation({
                        lat,
                        lng
                    })
                }
            );
    }

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(function ({coords: {latitude, longitude}}) {
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude}, ${longitude}&key=${process.env.REACT_APP_GOOGLE_MAP_API}`)
                .then((res) => {
                    let googleOption = {
                        label: res.data.results[0].formatted_address,
                        value: res.data.results[0],
                    }
                    setGooglePlace(googleOption)
                    setSelectedLocation({
                        lat: latitude,
                        lng: longitude
                    })
                })

        });
    }

    return (
        <div>
            <section>
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
                                        <div className="main_home_search">
                                            <GooglePlacesAutocomplete
                                                autocompletionRequest={autocompletionRequest}
                                                apiKey={process.env.REACT_APP_GOOGLE_MAP_API}
                                                selectProps={{
                                                    placeholder: 'Enter Your Full Address',
                                                    value: googlePlace,
                                                    onChange: (val) => onPlaceSearch(val),
                                                }}
                                            />
                                        </div>
                                        <div className=" ml-2 input-group d-flex justify-content-start">
                                            <div>
                                                <button type="button" onClick={getCurrentLocation} className="btn btn-send btn-block"> Get Current Location </button>
                                            </div>
                                            <div className="ml-2">
                                                <button type="submit" disabled={!selectedLocation} className={'btn btn-send btn-block'}>
                                                    Search
                                                </button>
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
    )
}
export default Home;
