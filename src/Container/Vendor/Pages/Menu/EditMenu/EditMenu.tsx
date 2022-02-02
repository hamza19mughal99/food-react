import React, {useState} from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import Select from 'react-select'

const EditMenu = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [EditFormInput, setEditFormInput] = useState({
        productName: 'Zinger Burger',
        productPrice: 12,
        hour: 0,
        min: 5,
        allergyInfo: 'Nothing',
    })
    const [EditFormInputError, setEditFormInputError] = useState({
        productName: '',
        productPrice: '',
        hour: '',
        min: '',
        allergyInfo: ''
    })

    const changeEditInputHandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setError('');
        setEditFormInputError({
            ...EditFormInputError,
            [name]: ''
        })
        setEditFormInput({
            ...EditFormInput,
            [name]: value
        })
    }

    const validation = () => {
        let errors = {
            productName: '',
            productPrice: '',
            hour: '',
            min: '',
            allergyInfo: ''
        }
        let formIsValid = true;

        // @ts-ignore
        if(parseInt(EditFormInput["productPrice"]) <= 0){
            formIsValid = false;
            errors["productPrice"] = "Price must be greater than zero.";
        }
        // @ts-ignore
        if(parseInt(EditFormInput["hour"]) === 0 && parseInt(EditFormInput["min"]) === 0){
            formIsValid = false;
            errors["hour"] = "hours and min can neither be zero";
        }
        // @ts-ignore
        else if(parseInt(EditFormInput["hour"]) < 0){
            formIsValid = false;
            errors["hour"] = "Hours must be greater than zero";
        }
        // @ts-ignore
        else if(parseInt(EditFormInput["hour"]) > 24 ){
            formIsValid = false;
            errors["hour"] = "Hours must be between 0 and 24";
        }
        // @ts-ignore
        if(parseInt(EditFormInput["min"]) < 0){
            formIsValid = false;
            errors["hour"] = "Minutes must be greater than zero";
        }
        // @ts-ignore
        else if(parseInt(EditFormInput["min"]) >= 59 ){
            formIsValid = false;
            errors["min"] = "Minutes must be between 0 and 59";
        }
        setEditFormInputError({...errors});
        return formIsValid
    }

    const errorElement = (msg: {} | null | undefined) => {
        return <p className={'m-0 p-0 error'}>{msg}</p>
    }

    const onFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // setSubmitLoader(true)
        setError('');
        if(validation()){
            navigate('/vendor/menu')
        }
    }

    const categoryOptions = [
        { value: 'FastFood', label: 'FastFood' },
        { value: 'BBQ', label: 'BBQ' },
    ]

    const MenuTypeOptions = [
        { value: 'Halal', label: 'Halal' },
        { value: 'Haram', label: 'Haram' },
    ]

    const AddOnsOptions = [
        { value: 'Drink', label: 'Drink' },
        { value: 'Fries', label: 'Fries' },
    ]

    return (
        <div className={'page_responsive'}>
            <h3>Edit Menu</h3>
            <p>{error} </p>
            <div className={'mt-5'}>
                <Row className={'justify-content-center'}>
                    <Col md={10} className={'create_menu'}>
                        <Form onSubmit={onFormSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="productName"
                                    required
                                    value={EditFormInput.productName}
                                    onChange={changeEditInputHandler}
                                    placeholder="Product Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Price £</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="productPrice"
                                    required
                                    value={EditFormInput.productPrice}
                                    onChange={changeEditInputHandler}
                                    placeholder="Product Price £" />
                                <Form.Text className="text-muted">
                                    {errorElement(EditFormInputError.productPrice)}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Time</Form.Label>
                                <div className={'d-flex'}>
                                    <Form.Control
                                        type="number"
                                        name="hour"
                                        required
                                        value={EditFormInput.hour}
                                        onChange={changeEditInputHandler}
                                        placeholder="Hour" />
                                    <Form.Control
                                        type="number"
                                        name="min"
                                        required
                                        value={EditFormInput.min}
                                        onChange={changeEditInputHandler}
                                        placeholder="Minute" />

                                </div>
                                <div className={'d-flex justify-content-between'}>
                                    <Form.Text className="text-muted">
                                        {errorElement(EditFormInputError.hour)}
                                    </Form.Text>
                                    <Form.Text className="text-muted">
                                        {errorElement(EditFormInputError.min)}
                                    </Form.Text>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Select options={categoryOptions} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Add Ons</Form.Label>
                                <Select options={MenuTypeOptions} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Menu Type</Form.Label>
                                <Select options={AddOnsOptions} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Allergy Info</Form.Label>
                                <Form.Control as="textarea"
                                              required
                                              rows={3}
                                              value={EditFormInput.allergyInfo}
                                              onChange={changeEditInputHandler}
                                />
                                <Form.Text className="text-muted">
                                    {errorElement(EditFormInputError.allergyInfo)}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file"  />
                            </Form.Group>

                            <button type="submit" className={'btn btn-send btn-block px-4'}>Edit Menu</button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default EditMenu;