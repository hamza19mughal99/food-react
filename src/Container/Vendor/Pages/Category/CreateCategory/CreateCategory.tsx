import React from 'react';
import {Form, InputGroup, FormControl, Button} from "react-bootstrap";

const CreateCategory = () => {
    return (
        <div className={'page_responsive'}>
            <h2>Create Category</h2>

            <div className={'mt-5'}>
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder={'Enter a Category Name'}
                        />
                    </InputGroup>
                    <Button>Create Category</Button>
                </Form>
            </div>
        </div>
    );
};

export default CreateCategory;
