import React from 'react';
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const CustomerView = () => {

    const columns = [{
        name: "ID",
        options: {
            display: false,
        }
    }, 'Customer name', 'Email', 'Phone'];

    const customerData = [
        { id: 1, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204"},
        { id: 2, customerName: "Obaid Aqeel", email: "hamza@gmail.com", phone: "03492496204"},
        { id: 3, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204"},
        { id: 4, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204"},
        { id: 5, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204"},
        { id: 6, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204"},
        { id: 7, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204"},
    ]

    let tableData = customerData.map((val) => {
        return Object.values({
            id: val.id,
            customerName: val.customerName,
            email: val.email,
            phone: val.phone,
        })
    })

    return (
        <div className={'page_responsive'}>
            <MuiDataTable data={tableData} columns={columns} />
        </div>
    );
};

export default CustomerView;
