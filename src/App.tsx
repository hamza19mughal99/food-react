import React from 'react';
import './App.css';
import {Slide, ToastContainer} from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Admin
import {adminRoutes, RoutesLink } from "./Container/Admin/Navbar/Routes";
import AdminNavbar from "./Container/Admin/Navbar/Navbar";

//Vendor
import {vendorRoutes} from "./Container/Vendor/Navbar/Routes";
import VendorNavbar from "./Container/Vendor/Navbar/Navbar";

//Main
import { mainRoutes } from './Container/Customer/Navbar/Routes/Routes';
import Header from './Container/Customer/Navbar/Header/Header';
import Footer from './Container/Customer/Navbar/Footer/Footer';

//Pages
import VendorRegister from "./Container/Vendor/Pages/Register/Register";
import VendorLogin from "./Container/Vendor/Pages/Login/Login";
import AdminLogin from "./Container/Admin/Pages/Login/Login";
import CustomerRegister from "./Container/Customer/Pages/Register/Register";
import CustomerLogin from "./Container/Customer/Pages/Login/Login";
import ShopCreate from './Container/Vendor/Pages/ShopCreate/ShopCreate';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Stripe from './Components/Stripe/Stripe';
import Error from './Components/Error/Error';



function App() {

  const adminLayout = (
      adminRoutes.map((item: RoutesLink, index) => (
          <Route key={index} path={item.path} element={
            <React.Fragment>
              <AdminNavbar />
                { item.component }
            </React.Fragment>
          } />
      ))
  )

  const vendorLayout = (
      vendorRoutes.map((item: RoutesLink, index) => (
            <Route key={index} path={item.path} element={
                <React.Fragment>
                    <VendorNavbar />
                    { item.component }
                </React.Fragment>
            } />
        ))
    )

  const mainLayout = (
    mainRoutes.map((item: RoutesLink, index) => (
        <Route key={index} path={item.path} element={
            <React.Fragment>
                <Header />
                { item.component }
                <Footer />
            </React.Fragment>
        } />
    ))
  )

  return (
      <div className="App">
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              transition={Slide}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
          <Router>
              <Routes>
                  {adminLayout}
                  {vendorLayout}
                  {mainLayout}
                  <Route path={'/admin/login'} element={<AdminLogin />} />
                  <Route path={'/register'} element={<CustomerRegister />}/>
                  <Route path={'/login'} element={<CustomerLogin />}  />
                  <Route path={'/vendor/register'} element={<VendorRegister />}/>
                  <Route path={'/vendor/login'} element={<VendorLogin />} />
                  <Route path={'/create-shop'} element={<ShopCreate />} />
                  <Route path={'/forget-password'} element={<ForgetPassword />}/>
                  <Route path={'/reset-password/:id'} element={<ResetPassword />}/>
                  <Route path={'/stripe'} element={<Stripe />}/>
                  <Route path={'*'} element={<Error />}/>
              </Routes>
          </Router>
      </div>
  );
}
export default App;