import React from 'react';
import Orders from "./Orders/Orders";
import Sales from "./Sales/Sales";

const Dashboard = () => {



    return (
        <div className={'page_responsive'}>
            <div>
                <Sales />
            </div>
            <div>
                <Orders />
            </div>
        </div>
    );
};

export default Dashboard;
