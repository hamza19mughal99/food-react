import React, {useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Order = () => {
    const [key, setKey] = useState<string>('TotalOrders');

    const columns = [{
        name: "ID",
        options: {
            display: false,
        }
    },
        'Customer Name',
        'Delivery Method',
        'Mobile Number',
        'Notes',
        'Price',
        'Order',
        'Status',
        {
            name: "Map",
            options: {
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <button className={'action close_action'}>
                            View
                        </button>
                    )
                }
            }
        }
    ];

    const OrderData = [
        { id: 1, customerName: "hamza mughal", deliveryMethod: "PickUp", mobileNumber: "03492496204", notes: "nothing", price: "12", order: 'Zinger', status: 'under-approval'},

    ]

    let tableData = OrderData.map((val) => {
        return Object.values({
            id: val.id,
            customerName: val.customerName,
            deliveryMethod: val.deliveryMethod,
            mobileNumber: val.mobileNumber,
            notes: val.notes,
            price: val.price,
            order: val.order,
            status: val.status
        })
    })

    return (
        <div className={'page_responsive'}>
            <Tabs
                activeKey={key}
                onSelect={(k) => {
                    if (k) {
                        setKey(k)
                    }
                }}
                className="mb-3 tabs"
            >
                <Tab eventKey="TotalOrders" title="Total Orders" className={'w-100'}>
                    <MuiDataTable title="Total Orders" data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="UnderApprovalOrders" title='Under Approval Orders' className={'w-100'}>
                    <MuiDataTable title={'Under Approval Orders'} data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="InProgressOrders" title='In Progress Orders' className={'w-100'}>
                    <MuiDataTable title={'In Progress Orders'} data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="ReadyOrders" title='Ready Orders' className={'w-100'}>
                    <MuiDataTable title={'Ready Orders'} data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="SuccessfulOrders" title='Successful Orders' className={'w-100'}>
                    <MuiDataTable title={'Successful Orders'} data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="RejectedOrders" title='Rejected Orders' className={'w-100'}>
                    <MuiDataTable title={'Rejected Orders'} data={tableData} columns={columns} />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Order;
