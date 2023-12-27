import React from 'react'
import { Container, Row, Col, Tab, TabContainer } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Projects.css"
import Cardss from './Cardss';
import Card2 from './Card2';

const Projects = () => {
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                    <div className="blur project-blur-1"></div>
                    <div className="blur project-blur-2"></div>
                        <h2>Projects</h2>
                        <p class="head-p"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime beatae mollitia impedit ratione officiis optio! </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Project 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Project 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Project 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    <Cardss/>
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Row>
                                    <Card2/>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects
