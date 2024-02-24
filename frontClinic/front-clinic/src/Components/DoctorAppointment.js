import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import Table from "react-bootstrap/Table";
import axios from "axios";

function DoctorAppointment(props) {
    const [listAppointment, setListAppointment]=useState([])
    const [show, setShow] = useState(false);
    const [description,setDescription]=useState("")
    const [orderId,setOrderId]=useState();
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => setShow(false);
    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/doctors/appointments';

        axios.get(apiUrl,{headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }})
            .then((resp) => {
                const data = resp.data;
                console.log(data)
                setListAppointment(data);
            }).catch(err => {
            console.error(err)
        });
    }, [setListAppointment]);

    function handleResult() {
        const url = "http://localhost:8082/api/v1/doctors/setDescription";
        console.log(orderId)
        axios.post(url, {
            orderId:orderId,
            description:description
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => setListAppointment(resp.data))
            .catch(err=>alert("Check your role"))
    }

    return (
        <>

        <Row>

            <Col sm={2}>
                <LeftMenu/>
            </Col>
            <Col sm={1}></Col>
            <Col sm={7}>
                <h2 style={{color: "blue"}}>List Appointments</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Client Name</th>
                        <th>Doctor Name</th>
                        <th>Appointment date</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Result appointment</th>
                    </tr>
                    </thead>
                    <tbody> {listAppointment.map((d) => (
                        <tr>
                            <td>{d.clientName}</td>
                            <td>{d.doctorName}</td>
                            <td>{d.appointmentDate}</td>
                            <td>{d.status}</td>
                            <td>{d.description}</td>
                            <td><Button variant="primary" className="me-3" onClick={(e) => {

                                setOrderId(d.id)
                                handleShow()
                            }}
                            >Enter result</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicText">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter result"
                                          onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleResult}>Result</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DoctorAppointment;