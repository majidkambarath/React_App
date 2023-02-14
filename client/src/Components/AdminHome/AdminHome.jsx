import React from 'react'
import './adminHome.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function AdminHome() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
      <h5 className='userH1'>User Management</h5>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
          </Container>
    </Navbar>
    </div>
  )
}

export default AdminHome
