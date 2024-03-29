import React, {useContext, useState} from 'react';
import {Button, Form, Modal, Nav, Navbar} from "react-bootstrap";
import logo from "../health-client-logo.jpg"
import styled from "styled-components";
import axios from "axios";
import {AuthContext} from "../Context/AuthContext";
import {jwtDecode} from "jwt-decode";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav {
    color: #abd1b8;

    &:hover {
      color: white;
    }
  }
`

function NaviBar(props) {

    const [show, setShow] = useState(false);
    const [registrationShow, setRegistrationShow] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [birthDay, setBirthDay] = useState();
    const [auth, setAuth] = useState(localStorage.getItem('auth'));
    const handleClose = () => setShow(false);
    const handleCloseRegistration = () => setRegistrationShow(false);

    const token = useContext(AuthContext);
    const [username, setUsername] = useState(localStorage.getItem("username"))
    const [checkedBox, setCheckedBox] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    const handleShow = () => {
        console.log(token);
        setShow(true);

    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8082/auth", {
            username: login,
            password: password
        }).then(function (response) {
            localStorage.setItem("token", response.data.token);
            const decoded = jwtDecode(response.data.token);
            localStorage.setItem('auth', "true");
            localStorage.setItem("username", decoded.sub)
            setUsername(decoded.sub);
            setAuth("true");
            handleClose();
        }).catch(function (error) {
            console.log(error);
            alert("Wrong credential")
        });
    }

    function handleLogOut() {
        setAuth("false");
        localStorage.setItem("token", "");
        localStorage.setItem("auth", "false");
    }

    function handleRegistrationShow() {
        setRegistrationShow(true);
    }

    function handleRegistration(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/api/v1/client/registration", {
            login: login,
            password: password,
            firstName: firstName,
            secondName: secondName,
            lastName: lastName,
            gender: gender,
            birthDay: birthDay

        }).then(function (response) {
            handleCloseRegistration();
        }).catch(function (error) {
            alert("Wrong credential")
        });

    }


    return (
        <>
            <Styles>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height="30"
                            width="60"
                            className='d-inline-block align-top mx-3'
                            alt="Logo"
                        />
                        Health Client
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            {
                                auth==="true"
                                ? <Nav.Link href="/clientAppointment">MyAppointment</Nav.Link>
                                    :<></>
                            }

                        </Nav>
                        <Nav>
                            {auth === "false"
                                ? <>
                                    <Button variant="primary" className="me-3" onClick={handleShow}>Log In</Button>
                                    <Button variant="primary" className="me-3"
                                            onClick={handleRegistrationShow}>Register</Button>
                                </>
                                : <>
                                    <Button variant="outline-primary" className="me-3">{username}</Button>
                                    <Button variant="primary" className="me-3" onClick={handleLogOut}>Log out</Button>
                                </>

                            }


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicText">
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
                        <Form.Group controlId="fromBasicCheckBox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleLogin}>Log in</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={registrationShow} onHide={handleCloseRegistration}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                            <Form.Label>Gender</Form.Label>
                            <Form.Select value={gender} onChange={(e => setGender(e.target.value))}>
                                <option></option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="fromBasicText6">
                            <Form.Label>Birth day</Form.Label>
                            {/*<Form.Control type="date" placeholder="Birth day"*/}
                            {/*              onChange={(e) => setBirthDay(e.target.value)}/>*/}
                            <DatePicker  peekNextMonth
                                         showMonthDropdown
                                         showYearDropdown
                                         dropdownMode="select"
                                         selected={startDate}
                                         onChange={(e) => setBirthDay(e)} />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckBox">
                            <Form.Check type="checkbox" label="Согласен на обработку персональных данных" checked={checkedBox} onChange={() => {setCheckedBox((!checkedBox))
                            console.log(checkedBox)}} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {checkedBox
                    ?<Button variant="primary" onClick={handleRegistration}>Registration</Button>
                        :<></>
                    }

                </Modal.Footer>
            </Modal>

        </>
    );
}

export default NaviBar;