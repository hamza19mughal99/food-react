import React from 'react'
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../../../../assets/img/logo.png";

const Nav = (props) => {

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    // const isProfileSetup = localStorage.getItem('isProfileSetup');
    // const adminToken = localStorage.getItem('adminToken');
    // const vendorToken = localStorage.getItem('vendorToken');
    //
    // const shopLogout = () => {
    //     localStorage.clear()
    //     window.location.reload()
    // }

    // let create_shop;
    // if (isProfileSetup === 'false' && props.isVendorAuth) {
    //     create_shop = (
    //         <>
    //             <NavLink to={'/create-shop'}> <button style={{ fontWeight: "bold" }} className={'btn btn-main'}> Create Shop </button></NavLink>
    //             <button onClick={() => shopLogout()} style={{ fontWeight: "bold" }} className={'btn btn-main'}>Log Out</button>
    //         </>
    //     )
    // }
    //
    // let authBtn;
    // if (!adminToken && isProfileSetup && props.isVendorAuth === "false") {
    //     authBtn = (
    //         <>
    //             <NavLink to={'/login'}><button style={{ fontWeight: "bold" }} className={'btn btn-main'}> Customer login/signup </button> </NavLink>
    //         </>
    //     )
    // }
    // else if (!props.isVendorAuth && !adminToken) {
    //     authBtn = (
    //         <>
    //             <NavLink to={'/login'}> <button style={{ fontWeight: "bold" }} className={'btn btn-main'}>  Customer login/signup </button></NavLink>
    //         </>
    //     )
    // }


    // let vendorAuthBtnDash;


    // if (!props.isAuth) {
    //     if (!props.isVendorAuth && !adminToken) {
    //         vendorAuthBtnDash = (
    //             <NavLink to={'/vendor/login'}> <button style={{ fontWeight: "bold" }} className={'btn btn-main'}> Partner login/signup </button> </NavLink>
    //         )
    //     } else if (adminToken) {
    //         vendorAuthBtnDash = (
    //             <button style={{ fontWeight: "bold" }} className={'btn btn-main'} onClick={() => { window.location.href = "/admin/dashboard" }}>Go to admin dashboard</button>
    //         )
    //     } else if (isProfileSetup && vendorToken) {
    //         vendorAuthBtnDash = (
    //             <button style={{ fontWeight: "bold" }} className={'btn btn-main'} onClick={() => {
    //                 window.location.href = '/vendor/Dashboard'
    //             }}>Go to Dashboard</button>
    //         )
    //     }
    // }

    // if (props.isAuth) {
    //     authBtn = (
    //         <>
    //             <button style={{ fontWeight: "bold" }} onClick={() => props.logOut()} className={'btn btn-main'}>Log Out</button>
    //             <NavLink to={'/orders'}><button style={{ fontWeight: "bold" }} className={'btn btn-main'}> My Orders </button> </NavLink>
    //             <NavLink to={'/myProfile'}><button style={{ fontWeight: "bold" }} className={'btn btn-main'}> Settings </button> </NavLink>
    //         </>
    //     )
    // }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-5 mb-3">
                                        <div id="myNav" className="overlay">
                                            <a href=".." className="closeBtn" onClick={closeNav}><AiOutlineCloseCircle style={{ fontSize: "30px" }} /></a>
                                            <div className="overlay-content">
                                                <NavLink to="/" onClick={closeNav}><li>Home</li> </NavLink>
                                                <NavLink to="/about" onClick={closeNav}><li>About</li> </NavLink>
                                                <NavLink to="/policies" onClick={closeNav}><li>Policies</li> </NavLink>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '30px', cursor: 'pointer', color: "#FF4200" }} onClick={openNav}><GiHamburgerMenu /></span>
                                </div>
                                <div style={{ justifyContent: "space-around" }} className="col-md-6 mt-5 mb-3 d-flex ">
                                    <NavLink to={'/login'}><button style={{ fontWeight: "bold" }} className={'btn btn-main'}> Customer login/signup </button> </NavLink>
                                    <NavLink to={'/vendor/login'}> <button style={{ fontWeight: "bold" }} className={'btn btn-main'}> Partner login/signup </button> </NavLink>
                                    {/*{create_shop}*/}
                                    {/*{vendorAuthBtnDash}*/}
                                    {/*{authBtn}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 logo-sec text-center">
                        <NavLink to="/" className="navbar-brand active">
                            <img src={Logo} className="img-fluid" alt="logo" /> </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav;
