import React, {ReactElement, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Env from "../../../../assets/img/env.png";
import User from "../../../../assets/img/user.png";
import Lock from "../../../../assets/img/lock.png";
import Phone from "../../../../assets/img/phone.png";
// import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import "./Register.css";
import {useNavigate} from "react-router-dom";
import {Spinner} from "react-bootstrap";

export interface FormInput {
    name: string,
    email: string,
    phone: string,
    password: string,
}

const Register = () => {

    const emptyInput: FormInput = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }

    const navigate = useNavigate();
    const [value, setValue] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null)
    // const [markerLocation, setMarkerLocation] = useState(null);

    const [registrationData, setRegistrationData] = useState({...emptyInput})
    const [errorData, setErrorData] = useState({...emptyInput})
    const [error, setError] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false);

    let formButton: ReactElement = (
        <>
            <div className="col-md-10 my-4">
                <button type="submit" className="btn btn-send btn-block">REGISTER</button>
            </div>
        </>
    )

    if (loader) {
        formButton = (
            <div className="text-center">
                <Spinner animation={"border"} style={{
                    color: '#FF4200'
                }}/>
            </div>
        )
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setError('');
        setErrorData({
            ...errorData,
            [name]: ''
        })

        setRegistrationData({
            ...registrationData,
            [name]: value
        })
    }

    // @ts-ignore
    const validate = (): boolean => {

        let errors: FormInput = {...emptyInput};
        let formIsValid = true;

        if(!registrationData['email']){
            formIsValid = false;
            errors['email'] = "Cannot be empty"
        }

        else if (typeof registrationData["email"] !== "undefined") {
            let lastAtPos = registrationData["email"].lastIndexOf("@");
            let lastDotPos = registrationData["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    registrationData["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    registrationData["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if(!registrationData['password']){
            formIsValid = false;
            errors['password'] = "Cannot be empty"
        }

        if(registrationData['password'].length < 8) {
            formIsValid = false;
            errors["password"] = "Password must be at least 8 characters";
        }


        if (!registrationData["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        else if (typeof registrationData["name"] !== "undefined") {
            if (!registrationData["name"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if (!registrationData["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        else if (typeof registrationData["phone"] !== "undefined") {
            if (!registrationData["phone"].match(/\d/g)) {
                formIsValid = false;
                errors["phone"] = "Wrong Format";
            }
        }

        setErrorData({...errors});
        return formIsValid

    }

    const registrationDataHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setLoader(true);

        const formInput = {
            name: registrationData.name,
            email: registrationData.email,
            phone: registrationData.phone,
            password: registrationData.password
        }

        setError('');
        if(validate()) {
            console.log(formInput)
            navigate('/')

        }
        else{
            setLoader(false);
        }
    }



    const onPlaceSearch = (val: React.SetStateAction<null>) => {
        setSelectedLocation(null)
        setValue(val);
        // geocodeByAddress(val.label)
        //     .then(results => getLatLng(results[0]))
        //     .then(({ lat, lng }) => {
        //             setSelectedLocation({
        //                 lat,
        //                 lng
        //             })
        //             setMarkerLocation({
        //                 lat,
        //                 lng
        //             })
        //         }
        //     );
    }

    const getCurrentLocation = () => {
        setSelectedLocation(null)
        // navigator.geolocation.getCurrentPosition(function (position) {
        //     setSelectedLocation({
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //     })
        //     setMarkerLocation({
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //     })
        // });
    }


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



    const errorElement = (msg: string | File) => {
        return <p className={'m-0 p-0 error'}>{msg}</p>
    }

    return (
        <>
            <section className=" py-5 sign-up-section sign-in">
                <div className="container">
                    <div className="row">
                        <div className="col-8 sign-card">
                            <div className="card sign-up-card rounded shadow border-0 bg-white">
                                <div className="card-body text-center">
                                    <h2> REGISTRATION </h2>

                                    <h5 className={'error text-center'}>{error}</h5>
                                    <form className="mt-5" onSubmit={registrationDataHandler}>
                                        <div className="container form-row justify-content-center">
                                            <div className="col-md-12 mb-4">
                                                <label>Full Name</label>
                                                <img src={User} className="img-form" alt={'user'} />
                                                <input type="text"
                                                       className={errorData['name'] ? "form-control sign_in_error" : "form-control sign_in" }
                                                       placeholder="Enter Your Name"
                                                       name='name'
                                                       onChange={onChangeHandler}
                                                />
                                            </div>
                                            {errorElement(errorData.name)}
                                            <div className="col-md-12 mb-4">
                                                <label>Email</label>
                                                <img src={Env} className="img-form" alt={'env'} />
                                                <input type="text"
                                                       className={errorData['email'] ? "form-control sign_in_error" : "form-control sign_in" }
                                                       placeholder="Enter Your Email"
                                                       name='email'
                                                       onChange={onChangeHandler}
                                                />
                                            </div>
                                            {errorElement(errorData.email)}
                                            <div className="col-md-12 mb-4">
                                                <label>Phone</label>
                                                <img src={Phone} className="img-form" alt={'phone'} />
                                                <input type="text"
                                                       className={errorData['phone'] ? "form-control sign_in_error" : "form-control sign_in" }
                                                       placeholder="Enter Your Phone Number"
                                                       name='phone'
                                                       onChange={onChangeHandler}
                                                />
                                            </div>
                                            {errorElement(errorData.phone)}
                                            <div className="col-md-12 mb-4">
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
                                                            {/*<Map google={props.google}*/}
                                                            {/*     initialCenter={selectedLocation}*/}
                                                            {/*     zoom={14}*/}
                                                            {/*     onClick={onMapClickHandler}*/}
                                                            {/*>*/}
                                                            {/*    <Marker position={markerLocation} name={'Your position'} />*/}
                                                            {/*</Map>*/}
                                                        </div>
                                                        : (
                                                            <div className={'text-center mt-3'}>
                                                                <p>Please Enter Location First</p>
                                                            </div>)
                                                }
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label>Password</label>
                                                <img src={Lock} className="img-form" alt={'lock'} />
                                                <input type="password"
                                                       className={errorData['password'] ? "form-control sign_in_error" : "form-control sign_in" }
                                                       name='password'
                                                       placeholder="min 8 character"
                                                       onChange={onChangeHandler}
                                                />
                                            </div>
                                            {errorElement(errorData.password)}
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