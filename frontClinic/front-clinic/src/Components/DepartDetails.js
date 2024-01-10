import React from 'react';
import {useParams} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import LeftMenu from "./LeftMenu";

function DepartDetails(props) {
    let { id } = useParams();
    return (
        <Row>
            <Col sm={2}>
                <LeftMenu/>
            </Col>
            <Col sm={8}>

            </Col>
        </Row>

    );
}

export default DepartDetails;