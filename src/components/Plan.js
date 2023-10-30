import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default function Plan() {
    const [arcade, setArcade] = useState(true);
    const [advanced, setAdvanced] = useState(false);
    const [pro, setPro] = useState(false);
    const [formData, setFormData] = useState({ 'arcade': 9 });

    const handleActive = (event) => {
        event.preventDefault();
        let id = event.target.id
        let value = ''
        if (id === 'arcade') {
            value = 9
        }
        if (id === 'advanced') {
            value = 12
        }
        if (id === 'pro') {
            value = 15
        }

        if (id === 'arcade') {
            if (arcade === true) {
                setArcade(!arcade);
            }
            if (arcade === false) {
                setFormData({ [event.target.id]: value });
                setAdvanced(false);
                setPro(false);
                setArcade(!arcade);
            }
        }

        if (id === 'advanced') {
            if (advanced === true) {
                setAdvanced(!advanced);
            }
            if (advanced === false) {
                setFormData({ [event.target.id]: value });
                setArcade(false);
                setPro(false);
                setAdvanced(!advanced);
            }
        }

        if (id === 'pro') {
            if (pro === true) {
                setPro(!pro);
            }
            if (pro === false) {
                setFormData({ [event.target.id]: value });
                setArcade(false);
                setAdvanced(false);
                setPro(!pro);
            }
        }
    }

    //console.log(formData)

    useEffect(() => {
        window.localStorage.setItem("plan", JSON.stringify(formData));
    }, [formData]);

    return (
        <Form className='pt-xl-5 pb-xl-0 px-xl-5 mx-xl-5 pt-lg-5 pb-lg-0 px-lg-4 mx-lg-3 pt-md-3 pb-md-0 px-md-3 mx-md-0 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Select your plan</h2>
                <p className='formText'>You have the option of monthly or yearly billing.</p>
            </Container>
            <FormGroup className='px-0 pt-xl-4 pt-lg-3 pb-4 mb-xl-3 mb-lg-2 mb-md-0'>
                <Row>
                    <Col className='col-4 ps-xl-3 pe-xl-1 ps-lg-2 pe-lg-1 ps-md-2 pe-md-1'>
                        <Button
                            id='arcade'
                            active={arcade}
                            onClick={handleActive}
                            className='planBtn'
                            outline
                        >
                            <Container id='arcade' className='pt-2 text-start'>
                                <img
                                    id='arcade'
                                    alt="icon-arcade"
                                    src="../multiStepForm/images/icon-arcade.svg"
                                />
                            </Container>
                            <Container id='arcade' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                <h5 id='arcade' className='responsiveFont'>Arcade</h5>
                                <p id='arcade'>$9/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-4 ps-xl-2 pe-xl-2 ps-lg-1 pe-lg-1 ps-md-1 pe-md-1'>
                        <Button
                            id='advanced'
                            active={advanced}
                            onClick={handleActive}
                            className='planBtn'
                            outline
                        >
                            <Container id='advanced' className='pt-2 text-start'>
                                <img
                                    id='advanced'
                                    alt="icon-advanced"
                                    src="../multiStepForm/images/icon-advanced.svg"
                                />
                            </Container>
                            <Container id='advanced' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                <h5 id='advanced' className='responsiveFont'>Advanced</h5>
                                <p id='advanced'>$12/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-4 ps-xl-1 pe-xl-3 ps-lg-1 pe-lg-2 ps-md-1 pe-md-2'>
                        <Button
                            id='pro'
                            active={pro}
                            onClick={handleActive}
                            className='planBtn'
                            outline
                        >
                            <Container id='pro' className='pt-2 text-start'>
                                <img
                                    id='pro'
                                    alt="icon-pro"
                                    src="../multiStepForm/images/icon-pro.svg"
                                />
                            </Container>
                            <Container id='pro' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                <h5 id='pro' className='responsiveFont'>Pro</h5>
                                <p id='pro'>$15/mo</p>
                            </Container>
                        </Button>
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
                <Row>
                    <Col className='col-3 ps-0 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-3 pe-0 nextBtnCol'>
                        <Button className='nextBtn'>
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