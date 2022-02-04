import React from 'react';
import {useNavigate} from "react-router-dom";
import {Form, InputGroup, FormControl} from "react-bootstrap";
import {useForm} from "react-hook-form";
import { categoryValidation } from '../../../../../Components/Validations/Validation';

export interface CategoryInput {
    categoryName: string,
}

const CreateCategory = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<CategoryInput>();

    const categoryDataSubmit = handleSubmit((data) => {
        console.log(data)
        navigate('/vendor/category')

    });

    return (
        <div className={'page_responsive'}>
            <h2>Update Category</h2>

            <div className={'mt-5'}>
                <Form onSubmit={categoryDataSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                        defaultValue={'Fast Food'}
                            {...register("categoryName", categoryValidation.categoryName)}
                            placeholder={'Enter a Category Name'}
                        />
                    </InputGroup>
                    <p className={"error_input_message"}>{errors.categoryName?.message}</p>

                    <button type="submit" className={'btn btn-send btn-block px-4'}>Update Category</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateCategory;
