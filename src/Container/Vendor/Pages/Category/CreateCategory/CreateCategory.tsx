import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Form, InputGroup, FormControl} from "react-bootstrap";

const CreateCategory = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState({})

    const addCategoryHandler = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target;
        setCategory({
            ...category,
            [name]: value
        })
    }

    const categorySubmitHandler = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        navigate('/vendor/category')
    }

    return (
        <div className={'page_responsive'}>
            <h2>Create Category</h2>

            <div className={'mt-5'}>
                <Form onSubmit={categorySubmitHandler}>
                    <InputGroup className="mb-3">
                        <FormControl
                            name={'category'}
                            required
                            onChange={addCategoryHandler}
                            placeholder={'Enter a Category Name'}
                        />
                    </InputGroup>
                    <button type="submit" className={'btn btn-send btn-block px-4'}>Create Category</button>
                </Form>
            </div>
        </div>
    );
};

export default CreateCategory;
