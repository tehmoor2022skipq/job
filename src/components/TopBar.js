import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import JobForm from './JobForm';
function TopBar() {
    const [formVisible, setFormVisible] = useState(false);
    let postObj = { formVisible, setFormVisible }
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Job Portal</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='fs-5 fw-bold text-light' href="#" onClick={() => setFormVisible(true)}><u>Click Here to Post New Job</u></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <JobForm obj={postObj} />
        </>

    )
}

export default TopBar