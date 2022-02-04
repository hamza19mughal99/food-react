import React from 'react';
import { NavLink } from 'react-router-dom';
import Env from "../../../../assets/img/env.png";
import User from "../../../../assets/img/user.png";
import Lock from "../../../../assets/img/lock.png";
import Phone from "../../../../assets/img/phone.png";
// import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useForm } from "react-hook-form";
import { AuthValidation } from "../../../../Components/Validations/Validation";
import "./Register.css";
import {useNavigate} from "react-router-dom";

export interface FormInput {
    name: string,
    email: string,
    phone: string,
    password: string,
}

const Register = () => {

    const navigate = useNavigate();
    // const [value, setValue] = useState(null);
    // const [selectedLocation, setSelectedLocation] = useState(null)
    // const [markerLocation, setMarkerLocation] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

    const RegisterDataSubmit = handleSubmit((data) => {
        console.log(data)
        navigate('/')

    });


    let formButton = (
            <div className="col-md-10 my-4">
                <button type="submit" className="btn btn-send btn-block">REGISTER</button>
            </div>
    )


    // const onPlaceSearch = (val: React.SetStateAction<null>) => {
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


    // const onMapClickHandler = (t: any, map: any, coord: { latLng: any; }) => {
    //     setSelectedLocation(null)
    //     const { latLng } = coord;
    //     const lat = latLng.lat();
    //     const lng = latLng.lng();
    //     // setSelectedLocation({
    //     //     lat,
    //     //     lng
    //     // })
    //     // setMarkerLocation({
    //     //     lat,
    //     //     lng
    //     // })
    // }


    return (
        <>
            <section className=" py-5 sign-up-section sign-in">
                <div className="container">
                    <div className="row">
                        <div className="col-8 sign-card">
                            <div className="card sign-up-card rounded shadow border-0 bg-white">
                                <div className="card-body text-center">
                                    <h2> REGISTRATION </h2>

                                    <form className="mt-5" onSubmit={RegisterDataSubmit}>
                                        <div className="container form-row justify-content-center">
                                            <div className="col-md-12 mb-4">
                                                <label>Full Name</label>
                                                <img src={User} className="img-form" alt={'user'} />
                                                <input type="text"
                                                       className={errors.name ? "form-control sign_in_error" : "form-control sign_in"}
                                                       placeholder="Enter Your Name"
                                                       {...register("name", AuthValidation.name)}
                                                />
                                            </div>
                                            <p className={"error_input_message"}>{errors.name?.message}</p>

                                            <div className="col-md-12 mb-4">
                                                <label>Email</label>
                                                <img src={Env} className="img-form" alt={'env'} />
                                                <input type="text"
                                                       className={errors.email ? "form-control sign_in_error" : "form-control sign_in"}
                                                       placeholder="Enter Your Email"
                                                
                                                       {...register("email", AuthValidation.email)}
                                                />
                                            </div>
                                            <p className={"error_input_message"}>{errors.email?.message}</p>

                                            <div className="col-md-12 mb-4">
                                                <label>Phone</label>
                                                <img src={Phone} className="img-form" alt={'phone'} />
                                                <input type="text"
                                                       className={errors.phone ? "form-control sign_in_error" : "form-control sign_in"}
                                                       placeholder="Enter Your Phone Number"
                                                       {...register("phone", AuthValidation.phone)}
                                                />
                                            </div>
                                            <p className={"error_input_message"}>{errors.phone?.message}</p>

                                            {/* <div className="col-md-12 mb-4">
                                                <div className={'d-flex'}>
                                                    <div className={"w-100"}>
                                                        <GooglePlacesAutocomplete
                                                            apiKey={"AIzaSyAy5GKZXkhiHbt_J_MN__a2ylt9N6jlN3U"}

                                                            autocompletionRequest={{
                                                                bounds: [
                                                                    { lat: 50, lng: 50 },
                                                                    { lat: 100, lng: 100 }
                                                                ],
                                                                componentRestrictions: {
                                                                    country: ['uk'],
                                                                }
                                                            }}
                                                            selectProps={{
                                                                placeholder: 'Enter Location',
                                                                value,
                                                                onChange: (val) => onPlaceSearch(val),
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="mt-1">
                                                        <i className="zmdi zmdi-gps-dot cur__location" style={{ cursor: 'pointer' }} onClick={getCurrentLocation} />
                                                    </div>
                                                </div>
                                                {
                                                    selectedLocation ?
                                                        <div className={'mb-4 map_wrapper_setting'}>
                                                             <Map google={props.google}
                                                                 initialCenter={selectedLocation}
                                                                 zoom={14}
                                                                 onClick={onMapClickHandler}
                                                            />
                                                                <Marker position={markerLocation} name={'Your position'} />
                                                        </Map>
                                                        </div>
                                                        : (
                                                            <div className={'text-center mt-3'}>
                                                                <p>Please Enter Location First</p>
                                                            </div>)
                                                }
                                            </div> */}
                                            
                                            <div className="col-md-12 mb-4">
                                                <label>Password</label>
                                                <img src={Lock} className="img-form" alt={'lock'} />
                                                <input type="password"
                                                       className={errors.password ? "form-control sign_in_error" : "form-control sign_in"}
                                                       placeholder="min 8 character"
                                                       {...register("password", AuthValidation.password)}
                                                />
                                            </div>
                                            <p className={"error_input_message"}>{errors.password?.message}</p>
                                            
                                            {formButton}
                                        </div>
                                    </form>
                                    <div className={'customer__login__bottom-02 text-center p-4'}>
                                        <p>Already have an account?</p>
                                        <NavLink to={'/login'}><button className={'btn btn-send btn-block'}>Login</button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
// @ts-ignore
export default Register;


// GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAP_API
// })