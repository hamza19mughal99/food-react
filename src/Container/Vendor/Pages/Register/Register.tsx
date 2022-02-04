import React from 'react';
import { NavLink } from 'react-router-dom';
import Env from "../../../../assets/img/env.png";
import User from "../../../../assets/img/user.png";
import Lock from "../../../../assets/img/lock.png";
import Phone from "../../../../assets/img/phone.png";
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthValidation } from "../../../../Components/Validations/Validation";
import "./Register.css";

export interface FormInput {
    name: string,
    email: string,
    phone: string,
    password: string,
}

const Register = () => {

    const navigate = useNavigate();
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
                                        <NavLink to={'/vendor/login'}><button className={'btn btn-send btn-block'}>Login</button></NavLink>
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

export default Register;

