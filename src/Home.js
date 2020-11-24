import React from "react";
import {Slider} from "./Components/Slider";
import {Row, Button, Card, Col, Container} from "react-bootstrap";
import Jumbotron from "./Components/Jumbotron";

export const Home = props => (
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/5324749/pexels-photo-5324749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>AbdiBek Blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/5324749/pexels-photo-5324749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>AbdiBek Blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top"
                                  src="https://images.pexels.com/photos/5324749/pexels-photo-5324749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        <Card.Body>
                            <Card.Title>AbdiBek Blog</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img
                        src="https://images.pexels.com/photos/5324749/pexels-photo-5324749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        height={400}/>
                </Col>
                <Col md={5}>
                    <h2>Web Developer Blog</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti, dolorum minus
                        molestias
                        obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis
                        sed
                        sequi sunt, ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti,
                        dolorum minus molestias
                        obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis
                        sed
                        sequi sunt, ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti,
                        dolorum minus molestias
                        obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis
                        sed
                        sequi sunt, ullam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti, dolorum minus
                        molestias
                        obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis
                        sed
                        sequi sunt, ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti,
                        dolorum minus molestias
                        obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis
                        sed
                        sequi sunt, ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti,
                        dolorum minus molestias
                        obcaecati perferendis porro possimus ratione soluta sunt velit voluptas? Aliquid est illo quis
                        sed
                        sequi sunt, ullam?
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)