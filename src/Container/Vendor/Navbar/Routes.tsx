import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";


import Dashboard from "../Pages/Dashboard/Dashboard";

import Category from "../Pages/Category/Category";
import EditCategory from "../Pages/Category/EditCategory/EditCategory";
import CreateCategory from "../Pages/Category/CreateCategory/CreateCategory"

import Gallery from "../Pages/Gallery/Gallery";

import Menu from "../Pages/Menu/Menu";
import CreateMenu from "../Pages/Menu/CreateMenu/CreateMenu";
import EditMenu from "../Pages/Menu/EditMenu/EditMenu";

import Order from "../Pages/Order/Order";
import Reviews from "../Pages/Reviews/Reviews";
import Setting from "../Pages/Setting/Setting";

export interface RoutesLink {
    component: JSX.Element,
    path: string,
}

export interface SideBarVendorRoutes {
    icon: JSX.Element,
    path?: string,
    title: string,
    isSubNav?: boolean,
    subNav?: {
        path: string,
        title: string
    }[]
}

export const vendorRoutes: RoutesLink[] = [
    {
        path: '/vendor/dashboard',
        component: <Dashboard />,
    },
    {
        path: '/vendor/category',
        component: <Category />,
    },
    {
        path: '/vendor/edit-category',
        component: <EditCategory />,
    },
    {
        path: '/vendor/create-category',
        component: <CreateCategory />,
    },
    {
        path: '/vendor/gallery',
        component: <Gallery />,
    },
    {
        path: '/vendor/menu',
        component: <Menu />,
    },
    {
        path: '/vendor/create-menu',
        component: <CreateMenu />,
    },
    {
        path: '/vendor/edit-menu',
        component: <EditMenu />,
    },
    {
        path: '/vendor/order',
        component: <Order />,
    },
    {
        path: '/vendor/reviews',
        component: <Reviews />,
    },
    {
        path: '/vendor/setting',
        component: <Setting />,
    },
]

export const vendorSideBarItems: SideBarVendorRoutes[] = [
    {
        path: '/vendor/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        title: 'Dashboard',
        isSubNav: false,
    },
    {
        path: '/vendor/category',
        icon: <MdIcons.MdCarRental/>,
        title: 'Category',
        isSubNav: false,
    },
    {
        path: '/vendor/gallery',
        icon: <MdIcons.MdCarRental/>,
        title: 'Gallery',
        isSubNav: false,
    },
    {
        path: '/vendor/menu',
        icon: <MdIcons.MdCarRental/>,
        title: 'Menu',
        isSubNav: false,
    },
    {
        path: '/vendor/order',
        icon: <MdIcons.MdCarRental/>,
        title: 'Order',
        isSubNav: false,
    },
    {
        path: '/vendor/reviews',
        icon: <MdIcons.MdCarRental/>,
        title: 'Reviews',
        isSubNav: false,
    },
    {
        path: '/vendor/setting',
        icon: <MdIcons.MdCarRental/>,
        title: 'Setting',
        isSubNav: false,
    },
]



