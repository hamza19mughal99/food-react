import React from 'react';
import {vendorSideBarItems} from "./routes";
import SideBar from '../../../components/Sidebar/Sidebar';
import * as AiIcons from "react-icons/ai";
import {Navigate} from "react-router-dom";
import {IUser} from "../../../interface";
import jwt from "jwt-decode"

const NavBar = () => {

    const token = localStorage.getItem("token");

    const shop =  [
        {
            path: '/vendor/shop',
            icon: <AiIcons.AiFillDashboard/>,
            title: 'Create Shop',
            isSubNav: false,
        }
    ]

    if (!token) {
        return <Navigate to={'/'}/>
    }

    const decode: { user: IUser } = jwt(token);

    if (!decode.user.profileSetup) {
        return <SideBar sideBarItems={shop}/>
    }

    return <SideBar sideBarItems={vendorSideBarItems}/>
};

export default NavBar;
