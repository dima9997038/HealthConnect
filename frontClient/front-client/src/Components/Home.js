import React, {Component} from 'react';
import Slider from "./Slider";
import  {Button, Card, Col, Container, Row} from "react-bootstrap";
import teethDepart from "../asserts/teethDepart.jpg"
import operationDepart from "../asserts/operationDepart.jpg"
import terapDepart from "../asserts/TerapDepart.jpg"
import laboratory from "../asserts/laboratory.jpg"

class Home extends Component {
    render() {
        return (
            <>
                <Slider/>
                <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
                    <Row>
                        <Col>
                            <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>
                                <Card.Img variant='top' src={teethDepart}/>
                                <Card.Body>
                                    <Card.Title>Dental Department</Card.Title>
                                    <Card.Text>
                                        The dental department of the Medical Center is equipped with modern equipment,
                                        including a microscope for accurate and long-term results of dental treatment.
                                    </Card.Text>
                                    <Button variant='primary'>More information</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>
                                <Card.Img variant='top' src={operationDepart}/>
                                <Card.Body>
                                    <Card.Title>Operation Department</Card.Title>
                                    <Card.Text>
                                        The operation department of the Medical Center is equipped with modern
                                        equipment.
                                    </Card.Text>
                                    <Button variant='primary'>More information</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>
                                <Card.Img variant='top' src={terapDepart}/>
                                <Card.Body>
                                    <Card.Title>Treatment and diagnostic department</Card.Title>
                                    <Card.Text>
                                        The diagnostic and treatment department is not only consultations with
                                        specialists in more than 50 areas for adults and children.
                                    </Card.Text>
                                    <Button variant='primary'>More information</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '18rem', height: '26rem', marginTop: '2px'}}>
                                <Card.Img variant='top' src={laboratory}/>
                                <Card.Body>
                                    <Card.Title>Clinical diagnostic laboratory</Card.Title>
                                    <Card.Text>
                                        The clinical diagnostic laboratory provides a wide range of studies - from a
                                        general blood test to blood tests for tumor markers, hormones and other
                                        indicators.
                                    </Card.Text>
                                    <Button variant='primary'>More information</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>

                </Container>

            </>
        );
    }
}

export default Home;