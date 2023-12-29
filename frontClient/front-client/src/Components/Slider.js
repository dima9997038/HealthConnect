import React from 'react';
import {Carousel, Col, Container, Row, Tab, Nav} from 'react-bootstrap';
import clinicImg1 from '../asserts/clinic1.jpg'
import clinicImg2 from '../asserts/clinic2.jpg'
import clinicImg3 from '../asserts/clinic3.jpg'
import clinicImg4 from '../asserts/clinic4.jpg'
import styled from "styled-components";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav {
    color: darkblue;

    &:hover {
      color: green;
    }
  }
`


const Slider = () => {

    return (
        <>
            <Styles>
            {/*<Container>*/}
            {/*    <Tab.Container id="ledt-tab-example" defaultActiveKey="first">*/}
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pils" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link href="/"><h2>Home</h2></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/about"><h2>About Us</h2></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/contacts"><h2>Contacts</h2></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/blog"><h2>Blog</h2></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg1}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image</h3>
                                        <p>Very good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg2}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image2</h3>
                                        <p>Pretty good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg3}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image</h3>
                                        <p>Very good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={clinicImg4}
                                        height="600"
                                        alt="clinic"
                                    />
                                    <Carousel.Caption>
                                        <h3>Clinic image</h3>
                                        <p>Very good!!!</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
            {/*    </Tab.Container>*/}
            {/*</Container>*/}
            </Styles>
        </>
    );
};

export default Slider;