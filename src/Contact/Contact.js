import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';


const Contact = () => {
    return (
        <div className="container p-5">
            <div>
                {/* ================ Start Contact Us Form =================  */}
                <h2 className="text-center">Need Help? Please contact our support team.</h2>
                <Form className="w-75 p-5 mx-auto">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="email" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn btn-secondary d-block mx-auto">Submit</button>
                </Form>
                {/* ================ End Contact Us Form =================  */}
            </div>
        </div>
    );
};

export default Contact;