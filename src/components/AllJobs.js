import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useQuery } from "@apollo/client";
import { useEffect, useState } from 'react';
import { ALL_JOBS } from '../graphQL/queries';
import TopBar from './TopBar'
function AllJobs() {
    const { loading, error, data } = useQuery(ALL_JOBS);
    const [jobs, setJobs] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (data)
            setJobs([...data.jobs])
    }, [data]);
    if (loading)
        return <p>Loading ...</p>
    if (error)
        return <p>Error</p>

    return (
        <Container>
            <div className='mb-3 '>
                <TopBar />
            </div>
            {console.log(data['jobs'].length)}

            <Row>
                {data['jobs'].map(job =>
                (<Col key={job.id + job.title + job.company.name} md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{job.company.name}</Card.Subtitle>
                            <Card.Link href={job.applyUrl}>Apply here</Card.Link>
                            <Card.Text>Posted By : {job.userEmail}</Card.Text>
                            <Card.Text>{job.description.slice(0, 85) + ' ...'}</Card.Text>
                            <Card.Text style={{ textDecoration: 'underline', color: 'blue' }} onClick={handleShow}>Click here to see full description</Card.Text>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                                size="sm"
                                scrollable={true}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Job description</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{job.description}</Modal.Body>
                                <Modal.Footer>

                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>))}


            </Row>

        </Container>
    )
}

export default AllJobs