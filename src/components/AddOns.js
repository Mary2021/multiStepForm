import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';

export default function AddOns() {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [formData, setFormData] = useState({});

    const handleActive = (event) => {
        let id = event.target.id

        let keyValue = ''
        if (id === 'box1') {
            keyValue = 'Online service'
        }
        if (id === 'box2') {
            keyValue = 'Larger storage'
        }
        if (id === 'box3') {
            keyValue = 'Customizable profile'
        }

        const selectedAddons = Object.keys(formData)
            .filter((key) => !key.includes(keyValue))
            .reduce((object, key) => {
                return Object.assign(object, {
                    [key]: formData[key]
                });
            }, {});

        if (id === 'box1') {
            if (box1 === false) {
                setFormData({ ...formData, 'Online service': '+$1/mo' });
                setBox1(!box1);
            }
            if (box1 === true) {
                setFormData(selectedAddons)
                setBox1(!box1);
            }
        }
        if (id === 'box2') {
            if (box2 === false) {
                setFormData({ ...formData, 'Larger storage': '+$2/mo' });
                setBox2(!box2);
            }
            if (box2 === true) {
                setFormData(selectedAddons)
                setBox2(!box2);
            }
        }
        if (id === 'box3') {
            if (box3 === false) {
                setFormData({ ...formData, 'Customizable profile': '+$2/mo' });
                setBox3(!box3);
            }
            if (box3 === true) {
                setFormData(selectedAddons)
                setBox3(!box3);
            }
        }
    }

    useEffect(() => {
        localStorage.setItem("addOns", JSON.stringify(formData));
    }, [formData]);

    return (
        <Form className='py-5 px-5 mx-5 h-100'>
            <h2 className='formTitle'>Pick add-ons</h2>
            <p className='formText'>Add-ons help to enhance your gaming experience.</p>
            <Col className='d-grid gap-2'>
                <Button
                    id='box1'
                    active={box1}
                    onClick={handleActive}
                    className='addOnBtn'
                    outline
                >
                    <Row>
                        <Col className='col-1 justify-content-start'>
                            <FormGroup check>
                                <Input
                                    id="box1"
                                    type="checkbox"
                                />
                                {' '}
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
                <Button
                    id='box2'
                    className='addOnBtn'
                    active={box2}
                    onClick={handleActive}
                    outline
                >
                    <Row>
                        <Col className='col-1 justify-content-start'>
                            <FormGroup check>
                                <Input id="box2" type="checkbox"
                                />
                                {' '}
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
                <Button
                    id='box3'
                    className='addOnBtn'
                    active={box3}
                    onClick={handleActive}
                    outline
                >
                    <Row>
                        <Col className='col-1'>
                            <FormGroup check>
                                <Input id="box3" type="checkbox"
                                />
                                {' '}
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
                    <Button className='nextBtn'>
                        <Link to="/finishingUp">
                            Next Step
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Form >
    );
}