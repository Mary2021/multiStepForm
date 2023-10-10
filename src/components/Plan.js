import { React } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default function Plan(props) {
    return (
        <Form className='py-5 px-5 mx-5 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Select your plan</h2>
                <p className='formText'>You have the option of monthly or yearly billing.</p>
            </Container>
            <FormGroup check className='px-0 pt-4 pb-4'>
                <Row>
                    <Col className='col-4'>
                        <Button className='planBtn' outline>
                            <Container className='pt-2 text-start'>
                                <img
                                    alt="icon-arcade"
                                    src="../images/icon-arcade.svg"
                                />
                            </Container>
                            <Container className='pt-5 ps-2 text-start'>
                                <h5>Arcade</h5>
                                <p>$9/mo</p>
                            </Container>
                        </Button>
                        {' '}
                    </Col>
                    <Col className='col-4'>
                        <Button className='planBtn' outline>
                            <Container className='pt-2 text-start'>
                                <img
                                    alt="icon-advanced"
                                    src="../images/icon-advanced.svg"
                                />
                            </Container>
                            <Container className='pt-5 ps-2 text-start'>
                                <h5>Advanced</h5>
                                <p>$12/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-4'>
                        {' '}
                        <Button className='planBtn' outline>
                            <Container className='pt-2 text-start'>
                                <img
                                    alt="icon-pro"
                                    src="../images/icon-pro.svg"
                                />
                            </Container>
                            <Container className='pt-5 ps-2 text-start'>
                                <h5>Pro</h5>
                                <p>$15/mo</p>
                            </Container>
                        </Button>
                        {' '}
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup switch className='planFormGrp'>
                <Row className='planToggle justify-content-center'>
                    <Col className='col-6 pe-5 text-end'>
                        <Label for='id-1'>Monthly</Label>
                    </Col>
                    <Input id='id-1' type="switch" role="switch" />
                    <Col className='col-6 ps-2 text-start'>
                        <Label for='id-1'>Yearly</Label>
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup check className='ps-0'>
                <Row className='pt-5'>
                    <Col className='col-6 px-3 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-6 px-2 nextBtnCol'>
                        <Button>
                            <Link to="/addOns">
                                Next Step
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form >
    );
}