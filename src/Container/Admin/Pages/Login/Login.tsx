import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Lock from "../../../../assets/img/lock.png";
import Env from "../../../../assets/img/env.png";
import { useForm } from "react-hook-form";
import { AuthValidation } from "../../../../Components/Validations/Validation";

export interface FormInput {
    email: string,
    password: string,
}

const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();

    const loginDataSubmit = handleSubmit((data) => {
        console.log(data)
        navigate('/admin/dashboard')

    });


    let formButton = (
            <div className="col-md-10 my-4">
                <button type={'submit'} className="btn btn-send btn-block">LOGIN</button>
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
                                    <h2 style={{
                                        fontWeight: "bold",
                                        fontSize: "23px"
                                    }}> ADMIN </h2>

                                    <form className="mt-5" onSubmit={loginDataSubmit}>
                                        <div className="container form-row justify-content-center">
                                            <div className="col-md-12 mb-4">
                                                <label>Email</label>
                                                <img src={Env} className="img-form" alt={'env'} />
                                                <input type="email"
                                                       className={errors.email ? "form-control sign_in_error" : "form-control sign_in"}
                                                       placeholder="Enter Your Email"
                                                       {...register("email", AuthValidation.email)}
                                                />
                                            </div>
                                            <p className={"error_input_message"}>{errors.email?.message}</p>

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