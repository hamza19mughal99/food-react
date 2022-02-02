import React from 'react';
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Refund = () => {

    const columns = [{
        name: "ID",
        options: {
            display: false,
        }
    },'Customer Name', 'Email', 'Phone', 'Restaurant Name', 'Total Price', 'isRefunded', 'Action'];

    const RefundData = [
        { id: 1, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
        { id: 2, customerName: "Obaid Aqeel", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
        { id: 3, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
        { id: 4, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
        { id: 5, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
        { id: 6, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
        { id: 7, customerName: "hamza mughal", email: "hamza@gmail.com", phone: "03492496204", resName: "Pizza Hut", price: "$200", isRefunded: "true"},
    ]

    let tableData = RefundData.map((val) => {
        return Object.values({
            id: val.id,
            customerName: val.customerName,
            email: val.email,
            phone: val.phone,
            resName: val.resName,
            price: val.price,
            isRefunded: val.isRefunded
        })
    })

    return (
        <div className={'page_responsive'}>
            <MuiDataTable title={'Refund List'} data={tableData} columns={columns} />
        </div>
    );
};

export default Refund;
