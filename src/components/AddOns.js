import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';

export default function AddOns() {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [formData, setFormData] = useState({});

    //let addOnsObj = window.localStorage.getItem('addOns')
    //let parsedObj = JSON.parse(addOnsObj)
    //const [formData, setFormData] = useState(parsedObj);

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
                setFormData({ ...formData, 'Online service': 1 });
                setBox1(!box1);
            }
            if (box1 === true) {
                setFormData(selectedAddons)
                setBox1(!box1);
            }
        }
        if (id === 'box2') {
            if (box2 === false) {
                setFormData({ ...formData, 'Larger storage': 2 });
                setBox2(!box2);
            }
            if (box2 === true) {
                setFormData(selectedAddons)
                setBox2(!box2);
            }
        }
        if (id === 'box3') {
            if (box3 === false) {
                setFormData({ ...formData, 'Customizable profile': 2 });
                setBox3(!box3);
            }
            if (box3 === true) {
                setFormData(selectedAddons)
                setBox3(!box3);
            }
        }
    }

    const handleSubmit = (e) => {
        localStorage.setItem("addOns", JSON.stringify(formData));
    }

    // useEffect(() => {
    //     localStorage.setItem("addOns", JSON.stringify(formData));
    // }, [formData]);

    return (
        <Form className='pt-xl-5 pb-xl-0 px-xl-5 mx-xl-5 pt-lg-3 pb-lg-0 px-lg-4 mx-lg-3 pt-md-3 pb-md-0 px-md-3 mx-md-0 h-100'>
            <h2 className='formTitle'>Pick add-ons</h2>
            <p className='formText mb-lg-3 mb-md-1'>Add-ons help to enhance your gaming experience.</p>
            <FormGroup className='mb-5'>
            <Col className='d-grid gap-2'>
                <Button
                    id='box1'
                    active={box1}
                    onClick={handleActive}
                    className='addOnBtn'
                    outline
                >
                    <Row className='d-flex align-items-center'>
                        <Col className='col-1 col-sm-1'>
                            <FormGroup check>
                                <Input
                                    id="box1"
                                    type="checkbox"
                                />
                                {' '}
                            </FormGroup>
                        </Col>
                        <Col className='col-sm-8 pe-md-0 ps-md-2 ps-3 pe-0'>
                            <h5 className='responsiveFont text-start'>Online service</h5>
                            <p className='mb-xl-4 mb-lg-3 mb-md-1 mb-0 text-start'>Access to multiplayer games</p>
                        </Col>
                        <Col className='col-3 col-sm-3 px-0'>
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
                    <Row className='d-flex align-items-center'>
                        <Col className='col-1 col-sm-1 '>
                            <FormGroup check>
                                <Input id="box2" type="checkbox"
                                />
                                {' '}
                            </FormGroup>
                        </Col>
                        <Col className='col-sm-8 pe-md-0 ps-md-2 ps-3 pe-0'>
                            <h5 className='responsiveFont text-start'>Larger storage</h5>
                            <p className='mb-xl-4 mb-lg-3 mb-md-1 mb-0 text-start'>Extra 1TB of cloud save</p>
                        </Col>
                        <Col className='col-3 col-sm-3 px-0'>
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
                    <Row className='d-flex align-items-center'>
                        <Col className='col-1 col-sm-1'>
                            <FormGroup check>
                                <Input id="box3" type="checkbox"
                                />
                                {' '}
                            </FormGroup>
                        </Col>
                        <Col className='col-sm-8 pe-md-0 ps-md-2 ps-3 pe-0'>
                            <h5 className='responsiveFont text-start'>Customizable profile</h5>
                            <p className='mb-xl-4 mb-lg-3 mb-md-1 mb-0 text-start'>Custom theme on your profile</p>
                        </Col>
                        <Col className='col-3 col-sm-3 px-0'>
                            <p>+$2/mo</p>
                        </Col>
                    </Row>
                </Button>
            </Col>
            </FormGroup>
            <FormGroup check className='pt-3 ps-0 mt-2'>
            <Row className='pt-0 pe-2'>
                <Col className='col-6 col-sm-6 col-md-3 ps-0 backBtnCol'>
                    <Button className='backBtn'>
                        <Link className='backLink' to="/plan">
                            Go Back
                        </Link>
                    </Button>
                </Col>
                <Col className='col-6 col-sm-6 col-md-3 pe-0 nextBtnCol'>
                    <Button className='nextBtn' onClick={(e) => handleSubmit(e)}>
                        <Link to="/finishingUp">
                            Next Step
                        </Link>
                    </Button>
                </Col>
            </Row>
            </FormGroup>
        </Form >
    );
}