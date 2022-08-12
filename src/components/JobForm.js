import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { CREATE_JOB } from '../graphQL/mutation';
import { useMutation } from '@apollo/client';
import { useContextApi } from '../context/JobContext';
function JobForm({ obj }) {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [userEmail, setuserEmail] = useState('');
    const [description, setDescription] = useState('');
    const [applyUrl, setApplyUrl] = useState('');
    const { jobs, setJobs } = useContextApi();

    const [postJob, { data, loading, error }] = useMutation(CREATE_JOB);
    const { formVisible, setFormVisible } = obj;

    const postNewJob = async () => {
        const res = await postJob({
            variables: {
                commitmentId: "cjtu8esth000z0824x00wtp1i",
                companyName: 'Trimulabs',
                title,
                locationNames: location,
                userEmail,
                description,
                applyUrl
            }
        });
        if (res) {
            setJobs([{
                commitmentId: "cjtu8esth000z0824x00wtp1i",
                company: { name: 'Trimulabs' }, title, locationNames: location,
                userEmail, description, applyUrl
            }, ...jobs]);
            <Alert variant='success'>
                Job Posted successfully
            </Alert>
        }
        if (loading) {
            console.log(loading)
        }
        if (error)
            console.log("Error: ", error);

        setFormVisible(false)

    }
    return (

        <Container className='mt-3'>
            <Row mt={10}>
                <Col md={5}>
                    <Modal
                        show={formVisible}
                        onHide={() => setFormVisible(false)}
                        backdrop="static"
                        keyboard={false}
                        size="lg"
                        scrollable={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Post Job</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                    <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="ReactJS Developer/ Fullstack developer etc" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="jobLocation">
                                    <Form.Label>Location Name</Form.Label>
                                    <Form.Control onChange={(e) => setLocation(e.target.value)} type="text" placeholder="LA/Californai/NYC" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>User Email</Form.Label>
                                    <Form.Control onChange={(e) => setuserEmail(e.target.value)} type="email" placeholder="abc@xyz.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Job description" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="link">
                                    <Form.Label>Apply here</Form.Label>
                                    <Form.Control onChange={(e) => setApplyUrl(e.target.value)} type="text" placeholder="Apply Link" />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary"
                                onClick={() => {
                                    postNewJob()
                                }}>
                                Submit
                            </Button>
                            <Button variant="secondary" onClick={() =>
                                setFormVisible(false)
                            }>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Col>
            </Row>
        </Container>
    );

}

export default JobForm