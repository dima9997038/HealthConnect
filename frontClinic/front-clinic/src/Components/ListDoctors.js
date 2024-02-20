import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";
import axios from "axios";
import Table from "react-bootstrap/Table";

function ListDoctors(props) {
    const [doctors, setDoctors] = useState([]);

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
    return (
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
                        <th>Изменить активность</th>
                        <th>Изменить данные</th>

                    </tr>
                    </thead>
                    <tbody> {doctors.map((d) => (
                        <tr key={d.id}>
                            <td>{d.firstName}</td>
                            <td>{d.secondName}</td>
                            <td>{d.lastName}</td>
                            <td>{d.specialization}</td>
                            <td>{d.active.toString()}</td>
                            <td><Button variant="primary">Изменить активность</Button></td>
                            <td><Button variant="primary">Изменить данные</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
            <Col sm={1}></Col>
        </Row>
    );
}

export default ListDoctors;