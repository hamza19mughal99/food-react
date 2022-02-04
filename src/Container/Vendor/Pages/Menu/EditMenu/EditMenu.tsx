import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { menuValidation } from '../../../../../Components/Validations/Validation';
import Select from 'react-select';
import "../Menu.css";

export interface MenuInput {
    productName: string,
    productPrice: number,
    hour: number,
    minute: number,
    allergyInfo: string
}

const CreateMenu = () => {
    const navigate = useNavigate();

	const { register, handleSubmit, formState: { errors }, control } = useForm();

    const menuDataSubmit = handleSubmit((data) => {
        console.log(data)
        navigate('/vendor/menu')

    });

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
            <div className={'mt-5'}>
                <Row className={'justify-content-center'}>
                    <Col md={10} className={'create_menu'}>
                        <Form onSubmit={menuDataSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={'zinger burger'}
                                    {...register("productName", menuValidation.productName)}
                                    placeholder="Product Name" />
                                    <Form.Text className="text-muted">
                                    <p className={"error_input_message"}>{errors.productName?.message}</p>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Price £</Form.Label>
                                <Form.Control
                                    type="number"
                                    defaultValue={12}
                                    {...register("productPrice", menuValidation.productPrice)}
                                    placeholder="Product Price £" />
                                <Form.Text className="text-muted">
                                <p className={"error_input_message"}>{errors.productPrice?.message}</p>
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Time</Form.Label>
                                <div className={'d-flex'}>
                                    <Form.Control
                                        type="number"
                                        defaultValue={1}
                                        {...register("hour", menuValidation.hour)}
                                        placeholder="Hour" />
                                    <Form.Control
                                        type="number"
                                        defaultValue={12}
                                        {...register("minute", menuValidation.minute)}
                                        placeholder="Minute" />

                                </div>
                                <div className={'d-flex justify-content-between'}>
                                    <Form.Text className="text-muted">
                                    <p className={"error_input_message"}>{errors.hour?.message}</p>
                                    </Form.Text>
                                    <Form.Text className="text-muted">
                                    <p className={"error_input_message"}>{errors.minute?.message}</p>
                                    </Form.Text>
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Controller
									name="category"
									control={control}
									render={({ field: { value, onChange } }) => (
                                        <Select options={categoryOptions} 
                                        value={value}
									    onChange={onChange}
                                        />
									)}
								/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Add Ons</Form.Label>
                            <Controller
									name="addOns"
									control={control}
									render={({ field: { value, onChange } }) => (
                                        <Select options={AddOnsOptions} 
                                        value={value}
									    onChange={onChange}
                                        />
                                        )}
								/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Menu Type</Form.Label>
                                <Controller
									name="MenuType"
									control={control}
									render={({ field: { value, onChange } }) => (
                                        <Select options={MenuTypeOptions} 
                                        value={value}
									    onChange={onChange}
                                        />
                                        )}
								/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Allergy Info</Form.Label>
                                <Form.Control as="textarea"
                                defaultValue={'delicious'}
                                {...register("allergyInfo", menuValidation.allergyInfo)}
                                rows={3}
                                />
                                <Form.Text className="text-muted">
                                <p className={"error_input_message"}>{errors.allergyInfo?.message}</p>
                                </Form.Text>
                            </Form.Group>

                            <div className="custom-file mb-3">
                                <input type="file" required {...register('productPicture')} className="custom-file-input" id="inputGroupFile01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">{'Menu Image'}</label>
                            </div>

                            <button type="submit" className={'btn btn-send btn-block px-4'}>Create Menu</button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default CreateMenu;