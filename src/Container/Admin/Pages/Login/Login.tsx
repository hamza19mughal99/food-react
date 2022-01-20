import React, { useState } from 'react';
import './Login.css';
import {Spinner} from "react-bootstrap"
import Lock from "../../../../assets/img/lock.png";
import Env from "../../../../assets/img/env.png";

export interface FormInput {
    email: string,
    password: string,
}

const Login = () => {

    const emptyInput: FormInput = {
        email: '',
        password: '',
    }

    const [loginData, setLoginData] = useState({...emptyInput})
    const [loader, setLoader] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const [errorData, setErrorData] = useState({...emptyInput})

    const onChangeHandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;

        setError('');
        setErrorData({
            ...errorData,
            [name]: ''
        })

        setLoginData({
            ...loginData,
            [name]: value
        })

    }

    // @ts-ignore
    const validate = (): boolean => {

        let errors: FormInput = {...emptyInput};
        let formIsValid = true;

        if(!loginData['email']){
            formIsValid = false;
            errors['email'] = "Cannot be empty"
        }

        else if (typeof loginData["email"] !== "undefined") {
            let lastAtPos = loginData["email"].lastIndexOf("@");
            let lastDotPos = loginData["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    loginData["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    loginData["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if(!loginData['password']){
            formIsValid = false;
            errors['password'] = "Cannot be empty"
        }

        else if(loginData['password'].length < 8) {
            formIsValid = false;
            errors["password"] = "Password must be at least 8 characters";
        }

        setErrorData({...errors});
        return formIsValid

    }

    const loginDataHandler = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoader(true);

        const formData = {
            email: loginData.email,
            password: loginData.password
        }

        if(validate()){
            console.log(formData)
        }
        else{
            setLoader(false);
        }
    }

    let formButton = (
        <>
            <div className="col-md-10 my-4">
                <button type={'submit'} className="btn btn-send btn-block">LOGIN</button>
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
                                    <h2 style={{
                                        fontWeight: "bold",
                                        fontSize: "23px"
                                    }}> ADMIN </h2>
                                    <h5 className={'error text-center'}>{error}</h5>
                                    <form className="mt-5" onSubmit={loginDataHandler}>
                                        <div className="container form-row justify-content-center">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Login;
