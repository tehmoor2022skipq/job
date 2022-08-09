import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function JobForm() {
    return (

        <Container className='mt-3'>
            <Row mt={10}>
                <Col md={5}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Commitment ID</Form.Label>
                            <Form.Control placeholder="cjtu8esth000z0824x00wtp1i" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control placeholder="Trimulabs" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="jobtitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" placeholder="ReactJS Developer/ Fullstack developer etc" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="abc@xyz.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control type="text" placeholder="Job description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="link">
                            <Form.Label>Apply here</Form.Label>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Post Job
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default JobForm