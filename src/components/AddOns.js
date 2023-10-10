import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';

export default function AddOns() {
    return (
        <Form className='py-5 px-5 mx-5 h-100'>
            <h2 className='formTitle'>Pick add-ons</h2>
            <p className='formText'>Add-ons help to enhance your gaming experience.</p>
            <Col className='d-grid gap-2'>
                <Button className='addOnBtn' outline>
                    <Row>
                        <Col className='col-1'>
                            <FormGroup check>
                                <Input
                                    id="checkbox1"
                                    type="checkbox"
                                />
                            </FormGroup>
                        </Col>
                        <Col className='col-8'>
                            <h5>Online service</h5>
                            <p>Access to multiplayer games</p>
                        </Col>
                        <Col className='col-3'>
                            <p>+$1/mo</p>
                        </Col>
                    </Row>
                </Button>
                {' '}
                <Button className='addOnBtn' outline>
                    <Row>
                        <Col className='col-1 justify-content-start'>
                            <FormGroup check>
                                <Input
                                    id="checkbox2"
                                    type="checkbox"
                                />
                            </FormGroup>
                        </Col>
                        <Col className='col-8'>
                            <h5>Larger storage</h5>
                            <p>Extra 1TB of cloud save</p>
                        </Col>
                        <Col className='col-3'>
                            <p>+$2/mo</p>
                        </Col>
                    </Row>
                </Button>
                {' '}
                <Button className='addOnBtn' outline>
                    <Row>
                        <Col className='col-1'>
                            <FormGroup check>
                                <Input
                                    id="checkbox3"
                                    type="checkbox"
                                />
                            </FormGroup>
                        </Col>
                        <Col className='col-8'>
                            <h5>Customizable profile</h5>
                            <p>Custom theme on your profile</p>
                        </Col>
                        <Col className='col-3'>
                            <p>+$2/mo</p>
                        </Col>
                    </Row>
                </Button>
                {' '}
            </Col>
            <Row className='pt-5'>
                <Col className='col-6 px-3 backBtnCol'>
                    <Button className='backBtn'>
                        <Link className='backLink' to="/plan">
                            Go Back
                        </Link>
                    </Button>
                </Col>
                <Col className='col-6 px-2 nextBtnCol'>
                    <Button>
                        <Link to="/finishingUp">
                            Next Step
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Form >
    );
}