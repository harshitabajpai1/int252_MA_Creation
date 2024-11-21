import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        alert('Form submitted!');
    };

    return (
        <Container>
            <h2 className="my-4 text-main">Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>

                <Button type="submit" className="btn-custom">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
