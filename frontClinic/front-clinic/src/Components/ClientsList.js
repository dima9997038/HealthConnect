import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";
import axios from "axios";
import Table from "react-bootstrap/Table";

function ClientsList(props) {
    const [listClient, setListClient] = useState([]);
    const [clientId, setClientId] = useState(0);
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState(false);
    const [height, setHeight] = useState(false);
    const [weight, setWeight] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => setShow(false);
    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/doctors/getAllClients';

        axios.get(apiUrl, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
            .then((resp) => {
                const data = resp.data;
                console.log(data)
                setListClient(data);
            }).catch(err => {
            console.error(err)
        });
    }, [setListClient]);

    function handleResult() {
        const url = "http://localhost:8082/api/v1/doctors/setDescriptionClient";
        axios.post(url, {
            id: clientId,
            description: description,
            weight: weight,
            height: height
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => {
            console.log(resp.data)
            setListClient(resp.data)
            handleClose()
        })
            .catch(err => alert("Check your role"))
    }

    return (
        <>
            <Row>
                <Col sm={2}>
                    <LeftMenu/>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <h2 style={{color: "blue"}}>List Clients</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Last Name</th>
                            <th>Login</th>
                            <th>Gender</th>
                            <th>Birth day</th>
                            <th>Description</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                        </thead>
                        <tbody> {listClient.map((d) => (
                            <tr>
                                <td>{d.firstName}</td>
                                <td>{d.secondName}</td>
                                <td>{d.lastName}</td>
                                <td>{d.login}</td>
                                <td>{d.gender}</td>
                                <td>{d.birthDay}</td>
                                <td>{d.description}</td>
                                <td>{d.height}</td>
                                <td>{d.weight}</td>
                                <td><Button variant="primary" className="me-3" onClick={(e) => {

                                    setClientId(d.id)
                                    handleShow()
                                }}
                                >Enter description</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicText11">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description"
                                          onChange={(e) => setDescription(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicText12">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="text" placeholder="Enter Height"
                                          onChange={(e) => setHeight(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="fromBasicText13">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="text" placeholder="Enter Weight"
                                          onChange={(e) => setWeight(e.target.value)}/>
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

export default ClientsList;