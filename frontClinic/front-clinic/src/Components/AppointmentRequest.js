import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";
import axios from "axios";
import Table from "react-bootstrap/Table";

function AppointmentRequest(props) {
    const [listAppointment, setListAppointment]=useState([])

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/admin/appointmentRequest';

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

    return (
        <> <Row>

            <Col sm={2}>
                <LeftMenuAdmin/>
            </Col>
            <Col sm={1}></Col>
            <Col sm={7}>
                <h1>Appointment Requests</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Phone</th>
                        <th>Full Name</th>
                        <th>Doctor Name</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody> {listAppointment.map((d) => (
                        <tr key={d.id}>

                            <td>{d.phone}</td>
                            <td>{d.fullName}</td>
                            <td>{d.doctorName}</td>
                            <td>{d.message}</td>

                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
        </>
    );
}

export default AppointmentRequest;