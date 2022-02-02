import React, {useState} from 'react';
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";
import * as AiIcons from 'react-icons/ai'
import {Tab, Tabs} from "react-bootstrap";
import "./VendorView.css";

const VendorView = () => {

    const [key, setKey] = useState<string>('AllVendors');

    const columns = [{
        name: "ID",
        options: {
            display: false,
        }
    },
        'Customer Name',
        'ShopName',
        'VendorEmail',
        'ShopAddress',
        'Status',
        {
            name: "Actions",
            options: {
                display: key === 'AllVendors',
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <button className={'action close_action'}>
                            <AiIcons.AiFillCheckSquare />
                        </button>
                    )
                }
            }
        },
    ];

    const VendorData = [
        { id: 1, customerName: "hamza mughal", email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
        { id: 2, customerName: "Obaid Aqeel",  email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
        { id: 3, customerName: "hamza mughal", email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
        { id: 4, customerName: "hamza mughal", email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
        { id: 5, customerName: "hamza mughal", email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
        { id: 6, customerName: "hamza mughal", email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
        { id: 7, customerName: "hamza mughal", email: "hamza@gmail.com", shopAdd: "R-120", phone: "03492496204", status: "Active"},
    ]

    let tableData = VendorData.map((val) => {
        return Object.values({
            id: val.id,
            customerName: val.customerName,
            email: val.email,
            shopAdd: val.shopAdd,
            phone: val.phone,
            status: val.status,
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
                <Tab eventKey="AllVendors" title="All Vendors" className={'w-100'}>
                    <MuiDataTable title="All Vendors" data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="ActiveVendors" title='Active Vendors' className={'w-100'}>
                    <MuiDataTable title="Active Vendors" data={tableData} columns={columns} />
                </Tab>
                <Tab eventKey="InActiveVendors" title='In-Active Vendors' className={'w-100'}>
                    <MuiDataTable title="In-Active Vendors" data={tableData} columns={columns} />
                </Tab>
            </Tabs>

        </div>
    );
};

export default VendorView;
