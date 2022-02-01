import React from 'react';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

const EditCategory = () => {
    return (
        <div className={'page_responsive'}>
            <h2>Edit Category</h2>

            <div className={'mt-5'}>
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder={'Enter a Category Name'}
                            value={'Fast Food'}
                        />
                    </InputGroup>
                    <Button>Update Category</Button>
                </Form>
            </div>
        </div>
    );
};

export default EditCategory;
