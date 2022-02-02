import React from 'react';
import RatingStar from "../../../../lib/RatingStar/RatingStar";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Reviews = () => {

    const columns = [{
        name: "ID",
        options: {
            display: false,
        }
    },
        'Customer Name',
        'Comments',
        {
            name: "Rating",
            options: {
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <RatingStar />
                    )
                }
            }
        },
    ];

    const ReviewsData = [
        { id: 1, customerName: "hamza mughal", comment: "good work"},
        { id: 2, customerName: "hamza mughal", comment: "good work"},
        { id: 3, customerName: "hamza mughal", comment: "good work"},

    ]

    let tableData = ReviewsData.map((val) => {
        return Object.values({
            id: val.id,
            customerName: val.customerName,
            comment: val.comment
        })
    })

    return (
        <div className={'page_responsive'}>
            <MuiDataTable title="Review List" data={tableData} columns={columns} />
        </div>
    );
};

export default Reviews;
