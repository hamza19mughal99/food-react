import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import "./Category.css"
import {useNavigate} from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import MuiDataTable from "../../../../Components/MuiDataTable/MuiDataTable";

const Category = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const editCategoryHandler = () => {
        navigate('/vendor/edit-category')
    }

    const deleteModal = (
        <Modal show={show} onHide={handleClose}>
           <Modal.Header>
               <AiIcons.AiFillCloseCircle />
           </Modal.Header>
            <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Yes
        </Button>
        <Button variant="primary" onClick={handleClose}>
            No
        </Button>
        </Modal.Footer>
        </Modal>
    )

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
                        <button className={'action close_action'} onClick={() => setShow(true)}>
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
            {deleteModal}
            <div className={'d-flex justify-content-end'}>
                <Button className={'checkout_btn'} onClick={addCategoryHandler}>
                    Add Category
                </Button>
            </div>
            <div>
                <MuiDataTable data={tableData} columns={columns} />
            </div>
        </div>
    );
};
export default Category;