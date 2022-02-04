import React from 'react';
import "./Category.css"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {useNavigate} from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Category = () => {

    const navigate = useNavigate();

    const editCategoryHandler = () => {
        navigate('/vendor/edit-category')
    }

    const deleteCategoryHandler = () => {

        confirmAlert({
            message: 'Are you sure you want to delete this Menu?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => console.log('Click yes')
                },
                {
                    label: 'No',
                    onClick: () => console.log('Click No')
                }
            ]
        });
    }

    const columns = [
        {
            name: "ID",
            options: {
                display: false,
            },
        },
        'Title',
        {
            name: "Edit Category",
            options: {
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <button className={'action close_action'} onClick={editCategoryHandler}>
                            <AiIcons.AiOutlineIssuesClose/>
                        </button>
                    )
                }
            },
        },
        {
            name: "Delete Category",
            options: {
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return (
                        <button className={'action close_action'} onClick={deleteCategoryHandler}>
                            <AiIcons.AiFillDelete/>
                        </button>
                    )
                }
            },
        }
    ];

    const categoryData = [
        { id: 1, categoryName: "Fast Food"},
        { id: 2, categoryName: "BBQ" }
    ]

    let tableData = categoryData.map((val) => {
        return Object.values({
            id: val.id,
            categoryName: val.categoryName
        })
    })

    const addCategoryHandler = () => {
        navigate('/vendor/create-category')
    }

    return (
        <div className={'page_responsive'}>
            <div className={'d-flex justify-content-end'}>
                <button className={'btn-send px-4 mr-2 mb-4'} onClick={addCategoryHandler}>Add Category</button>
            </div>

            <div>
                <MuiDataTable title={'Category List'} data={tableData} columns={columns} />
            </div>
        </div>
    );
};
export default Category;