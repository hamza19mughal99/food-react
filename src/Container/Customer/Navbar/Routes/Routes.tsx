import Home from "../../Pages/Home/Home"
import About from "../../Pages/About/About"
import Policies from "../../Pages/Policies/Policies"
import AddToCart from "../../Pages/AddToCart/AddToCart"
import Restaurant from "../../Pages/Restaurant/Restaurant/Restaurant"
import RestaurantView from "../../Pages/Restaurant/RestaurantView/RestaurantView";
import MyProfile from "../../Pages/MyAccount/MyProfile/MyProfile";
import MyOrders from "../../Pages/MyAccount/MyOrders/MyOrders";

export interface RoutesLink {
    component: JSX.Element,
    path: string,
} 

export const mainRoutes: RoutesLink[] = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/about',
        component: <About />,
    },
    {
        path: '/policies',
        component: <Policies />,
    },
    {
        path: '/restaurant',
        component: <Restaurant />,
    },
    {
		path: '/shop',
		component: <RestaurantView />,
	},
    // /shop/:id
    {
        path: '/addToCart/:id',
        component: <AddToCart />,
    },
    {
		path: '/myProfile',
		component: <MyProfile />
	},
	{
		path: '/orders',
		component: <MyOrders />
	}
    
]