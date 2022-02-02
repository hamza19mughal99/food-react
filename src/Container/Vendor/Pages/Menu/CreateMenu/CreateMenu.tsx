import React, {useState} from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import Select from 'react-select';
import "../Menu.css";

const CreateMenu = () => {
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [formInput, setFormInput] = useState({
        productName: '',
        productPrice: 0,
        hour: 0,
        min: 0,
        allergyInfo: '',
    })
    const [formInputError, setFormInputError] = useState({
        productName: '',
        productPrice: '',
        hour: '',
        min: '',
        allergyInfo: ''
    })

    const changeInputHandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setError('');
        setFormInputError({
            ...formInputError,
            [name]: ''
        })
        setFormInput({
            ...formInput,
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
        if(parseInt(formInput["productPrice"]) <= 0){
            formIsValid = false;
            errors["productPrice"] = "Price must be greater than zero.";
        }
        // @ts-ignore
        if(parseInt(formInput["hour"]) === 0 && parseInt(formInput["min"]) === 0){
            formIsValid = false;
            errors["hour"] = "hours and min can neither be zero";
        }
        // @ts-ignore
        if(parseInt(formInput["hour"]) < 0){
            formIsValid = false;
            errors["hour"] = "Hours must be greater than zero";
        }
        // @ts-ignore
        if(parseInt(formInput["hour"]) > 24 ){
            formIsValid = false;
            errors["hour"] = "Hours must be between 0 and 24";
        }
        // @ts-ignore
        if(parseInt(formInput["min"]) < 0){
            formIsValid = false;
            errors["hour"] = "Minutes must be greater than zero";
        }
        // @ts-ignore
        if(parseInt(formInput["min"]) >= 59 ){
            formIsValid = false;
            errors["min"] = "Minutes must be between 0 and 59";
        }
        setFormInputError({...errors});
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
            <h3>Create Menu</h3>
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
                                    onChange={changeInputHandler}
                                    placeholder="Product Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Price £</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="productPrice"
                                    required
                                    onChange={changeInputHandler}
                                    placeholder="Product Price £" />
                                <Form.Text className="text-muted">
                                    {errorElement(formInputError.productPrice)}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Time</Form.Label>
                                <div className={'d-flex'}>
                                    <Form.Control
                                        type="number"
                                        name="hour"
                                        required
                                        onChange={changeInputHandler}
                                        placeholder="Hour" />
                                    <Form.Control
                                        type="number"
                                        name="min"
                                        required
                                        onChange={changeInputHandler}
                                        placeholder="Minute" />

                                </div>
                                <div className={'d-flex justify-content-between'}>
                                    <Form.Text className="text-muted">
                                        {errorElement(formInputError.hour)}
                                    </Form.Text>
                                    <Form.Text className="text-muted">
                                        {errorElement(formInputError.min)}
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
                                onChange={changeInputHandler}
                                />
                                <Form.Text className="text-muted">
                                    {errorElement(formInputError.allergyInfo)}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" />
                            </Form.Group>

                            <button type="submit" className={'btn btn-send btn-block px-4'}>Create Menu</button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default CreateMenu;