import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";
import axios from "axios";
import Table from "react-bootstrap/Table";
import yesImg from "../asserts/Yes.png"
import noImg from "../asserts/No.jpg"

function ListDoctors(props) {
    const [doctors, setDoctors] = useState([]);
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [lastName, setLastName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [typeAppointment, setTypeAppointment] = useState("");
    const [listTypeAppointment, setListTypeAppointment] = useState([]);
    const [active, setActive] = useState(false);
    const [doctorId,setDoctorId]=useState(0)
    const [checkedBox, setCheckedBox] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/doctors';
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setDoctors(data);
            console.log(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setDoctors]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/category/typeAppointmentsNames';

        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setListTypeAppointment(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setListTypeAppointment]);

    function handleChangeDoctor() {
        const addDoctorUrl = "http://localhost:8082/api/v1/admin/changeDoctor/"+doctorId;
        console.log(typeAppointment)
        axios.post(addDoctorUrl, {
            login: login,
            password: password,
            firstName: firstName,
            secondName: secondName,
            lastName: lastName,
            specialization: specialization,
            active:checkedBox,
            typeAppointment: typeAppointment
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => {alert("Successfully")
        handleClose()})
            .catch(err=>alert("Check your role"))
    }

    return (
        <>
            <Row>
                <Col sm={2}>
                    <LeftMenuAdmin/>
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Last Name</th>
                            <th>Specialization</th>
                            <th>Активность</th>
                            <th>Изменить данные</th>

                        </tr>
                        </thead>
                        <tbody> {doctors.map((d) => (
                            <tr key={d.id}>
                                <td>{d.firstName}</td>
                                <td>{d.secondName}</td>
                                <td>{d.lastName}</td>
                                <td>{d.specialization}</td>
                                <td>
                                    {d.active
                                        ? <img
                                            src={yesImg}
                                            height="30"
                                            width="60"
                                            className='d-inline-block align-top mx-3'
                                            alt="Logo"
                                        />
                                        :<img
                                            src={noImg}
                                            height="30"
                                            width="60"
                                            className='d-inline-block align-top mx-3'
                                            alt="Logo"
                                        />
                                    }
                                </td>
                                <td><Button variant="primary" onClick={(e => {
                                    setDoctorId(d.id)
                                    setActive(d.active)
                                    handleShow()
                                })}>Изменить данные</Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Form className='my-lg-3'>
                    <Form.Group controlId="fromBasicText1">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" placeholder="Enter login"
                                      onChange={(e) => setLogin(e.target.value)}/>
                        <Form.Text className='text-muted'>We'll never share your login</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="fromBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText2">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name"
                                      onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText3">
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="text" placeholder="Second name"
                                      onChange={(e) => setSecondName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText4">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name"
                                      onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText5">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control type="text" placeholder="Specialization"
                                      onChange={(e) => setSpecialization(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="fromBasicText7">
                        <Form.Label>Type Appointment</Form.Label>
                        <Form.Select value={typeAppointment} onChange={(e => setTypeAppointment(e.target.value))}>
                            <option></option>
                            {listTypeAppointment.map(item => {
                                return (<option key={item} value={item}>{item}</option>);
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="fromBasicCheckBox">
                        <Form.Check type="checkbox" label="Activity"
                                    checked={checkedBox} onChange={() => {setCheckedBox((!checkedBox))
                        }}
                        />
                    </Form.Group>
                    <Button variant="primary" className="me-3 my-lg-3" onClick={(e => {
                        handleChangeDoctor()
                    })}>Change</Button>
                </Form>
            </Modal>
        </>
    );
}

export default ListDoctors;