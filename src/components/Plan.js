import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';
import iconArcade from '../assets/images/icon-arcade.svg'
import iconAdvanced from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default function Plan() {
    const [arcade, setArcade] = useState(true);
    const [advanced, setAdvanced] = useState(false);
    const [pro, setPro] = useState(false);
    const [formData, setFormData] = useState({ arcade: 9});

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

    const handleSubmit = (e) => {
        localStorage.setItem("plan", JSON.stringify(formData));
    }

    // useEffect(() => {
        
    //     // if (defaultData === null ) {
    //         //setDefaultData({ arcade: 9});
    //     // } else {
    //         let planObj = window.localStorage.getItem('plan')
    //         let parsedObj = JSON.parse(planObj)
    //     //let planName = Object.keys(parsedObj)[0].charAt(0).toUpperCase() + Object.keys(parsedObj)[0].slice(1);
    //     //let planPrice = Object.values(parsedObj)[0]
    //     setDefaultData(parsedObj);
    //     // }
    // }, []);

    // useEffect(() => {
    //     window.localStorage.setItem("plan", JSON.stringify(formData));
    // }, [formData]);

    console.log(formData)

    const createRows = () => {
        if (window.innerWidth <= 576) {
            return (
                <Row className='gy-2 px-md-0 px-2'>
                    <Button
                        id='arcade'
                        active={arcade}
                        onClick={handleActive}
                        className='planBtn'
                        outline
                    >
                        <Row >
                            <Col className='col-3'>
                                <Container id='arcade' className='pt-2 text-center'>
                                    <img
                                        id='arcade'
                                        alt="icon-arcade"
                                        src="../multiStepForm/images/icon-arcade.svg"
                                    />
                                </Container>
                            </Col>
                            <Col className='col-9'>
                                <Container id='arcade' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                    <h5 id='arcade' className='responsiveFont'>Arcade</h5>
                                    <p id='arcade'>$9/mo</p>
                                </Container>
                            </Col>
                        </Row>
                    </Button>
                    <Button
                        id='advanced'
                        active={advanced}
                        onClick={handleActive}
                        className='planBtn'
                        outline
                    >
                        <Row>
                            <Col className='col-3'>
                                <Container id='advanced' className='pt-2 text-start'>
                                    <img
                                        id='advanced'
                                        alt="icon-advanced"
                                        src="../multiStepForm/images/icon-advanced.svg"
                                    />
                                </Container>
                            </Col>
                            <Col className='col-9'>
                                <Container id='advanced' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                    <h5 id='advanced' className='responsiveFont'>Advanced</h5>
                                    <p id='advanced'>$12/mo</p>
                                </Container>
                            </Col>
                        </Row>
                    </Button>
                    <Button
                        id='pro'
                        active={pro}
                        onClick={handleActive}
                        className='planBtn'
                        outline
                    >
                        <Row>
                            <Col className='col-3'>
                                <Container id='pro' className='pt-2 text-start'>
                                    <img
                                        id='pro'
                                        alt="icon-pro"
                                        src="../multiStepForm/images/icon-pro.svg"
                                    />
                                </Container>
                            </Col>
                            <Col className='col-9'>
                                <Container id='pro' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                    <h5 id='pro' className='responsiveFont'>Pro</h5>
                                    <p id='pro'>$15/mo</p>
                                </Container>
                            </Col>
                        </Row>
                    </Button>
                </Row>
            )

        } else {
            return (
                <Row>
                    <Col className='col-md-4 ps-xl-3 pe-xl-1 ps-lg-2 pe-lg-1 ps-md-2 pe-md-1'>
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
                                    src={iconArcade}
                                />
                            </Container>
                            <Container id='arcade' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                <h5 id='arcade' className='responsiveFont'>Arcade</h5>
                                <p id='arcade'>$9/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-md-4 ps-xl-2 pe-xl-2 ps-lg-1 pe-lg-1 ps-md-1 pe-md-1'>
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
                                    src={iconAdvanced}
                                />
                            </Container>
                            <Container id='advanced' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                <h5 id='advanced' className='responsiveFont'>Advanced</h5>
                                <p id='advanced'>$12/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-md-4 ps-xl-1 pe-xl-3 ps-lg-1 pe-lg-2 ps-md-1 pe-md-2'>
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
                                    src={iconPro}
                                />
                            </Container>
                            <Container id='pro' className='pt-xl-5 pt-lg-5 pt-md-4 ps-2 text-start'>
                                <h5 id='pro' className='responsiveFont'>Pro</h5>
                                <p id='pro'>$15/mo</p>
                            </Container>
                        </Button>
                    </Col>
                </Row>
            )
        }

    }

    return (
        <Form className='pt-xl-5 pb-xl-0 px-xl-5 mx-xl-5 pt-lg-5 pb-lg-0 px-lg-4 mx-lg-3 pt-md-3 pb-md-0 px-md-3 mx-md-0 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Select your plan</h2>
                <p className='formText'>You have the option of monthly or yearly billing.</p>
            </Container>
            <FormGroup className='px-0 pt-xl-4 pt-lg-3 pb-md-4 pb-1 mb-md-0 rmMb'>
                {createRows()}
            </FormGroup>
            <FormGroup switch className='planFormGrp'>
                <Row className='py-3 planToggle justify-content-center align-items-center'>
                    <Col className='col-6 pe-4 text-end'>
                        <Label for='id-1' className='mb-0'>Monthly</Label>
                    </Col>
                    <Input id='id-1' type="switch" role="switch" />
                    <Col className='col-6 ps-4 text-start'>
                        <Label for='id-1' className='mb-0'>Yearly</Label>
                    </Col>
                    
                </Row>
            </FormGroup>
            <FormGroup check className='ps-0 mt-2'>
                <Row className='pe-2'> 
                    <Col className='col-6 col-sm-6 col-md-3 ps-0 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-6 col-sm-6 col-md-3 pe-0 nextBtnCol'>
                        <Button className='nextBtn' onClick={(e) => handleSubmit(e)}>
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