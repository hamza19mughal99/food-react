import React from 'react';
import "./PersonalDeatils.css";

const PersonalDetails = () => {
    return (
        <React.Fragment>
            <div className='main-section mb-5 shadow border-0 bg-white h-100 mr-3'>
                <h2 style={{ fontWeight: 700 }} className={'mt-3 text-center'}>DELIVERY DETAILS</h2>
                <hr />
                <h3 style={{ fontWeight: 600 }}>Personal Details</h3>
                <div className=" p-details shadow border-0 bg-white mb-5 pl-2 pt-2 pb-2 w-75">
                    <h5> Hamza Ahmed Mughal </h5>
                    <hr />
                    <p> hamza19mughal99@gmail.com </p>
                    <hr />
                    <p>+92 349 2496204</p>

                </div>
            </div>
        </React.Fragment>
    );
};

export default PersonalDetails;
