import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/App.css';
import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { setSelected, setArcade, setAdvanced, setPro } from './planSlice';

export default function Plan() {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.plan.selected);
    const arcade = useSelector(state => state.plan.arcade);
    const advanced = useSelector(state => state.plan.advanced);
    const pro = useSelector(state => state.plan.pro);

    const handleActive = (e) => {
        e.preventDefault();
        let id = e.target.id
        let price = ''
        if (id === 'arcade') {
            price = 9
        }
        if (id === 'advanced') {
            price = 12
        }
        if (id === 'pro') {
            price = 15
        }

        if (id === 'arcade') {
            if (arcade === true) {
                dispatch(setArcade(!arcade))
            }

            if (arcade === false) {
                dispatch(setSelected({ arcade: price }))
                dispatch(setArcade(!arcade))
                dispatch(setAdvanced(false))
                dispatch(setPro(false))
            }
        }

        if (id === 'advanced') {
            if (advanced === true) {
                dispatch(setAdvanced(!advanced))
            }
            if (advanced === false) {
                dispatch(setSelected({ advanced: price }))
                dispatch(setAdvanced(!advanced))
                dispatch(setArcade(false))
                dispatch(setPro(false))
            }
        }

        if (id === 'pro') {
            if (pro === true) {
                dispatch(setPro(!pro))
            }
            if (pro === false) {
                dispatch(setSelected({ pro: price }))
                dispatch(setPro(!pro))
                dispatch(setArcade(false))
                dispatch(setAdvanced(false))
            }
        }
    }

    const handleSubmit = () => {
        localStorage.setItem("plan", JSON.stringify(selected));
    }

    const createRows = () => {
        if (window.innerWidth <= 576) {
            return (
                <Row className='gy-2 px-md-0 px-2'>
                    <Button
                        id='arcade'
                        active={arcade}
                        onClick={(e) => handleActive(e)}
                        className='planBtn'
                        outline
                    >
                        <Row >
                            <Col className='col-3'>
                                <Container id='arcade' className='pt-2 text-center'>
                                    <img
                                        id='arcade'
                                        alt="icon-arcade"
                                        src={iconArcade}
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
                        onClick={(e) => handleActive(e)}
                        className='planBtn'
                        outline
                    >
                        <Row>
                            <Col className='col-3'>
                                <Container id='advanced' className='pt-2 text-start'>
                                    <img
                                        id='advanced'
                                        alt="icon-advanced"
                                        src={iconAdvanced}
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
                        onClick={(e) => handleActive(e)}
                        className='planBtn'
                        outline
                    >
                        <Row>
                            <Col className='col-3'>
                                <Container id='pro' className='pt-2 text-start'>
                                    <img
                                        id='pro'
                                        alt="icon-pro"
                                        src={iconPro}
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
                            onClick={(e) => handleActive(e)}
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
                            onClick={(e) => handleActive(e)}
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
                            onClick={(e) => handleActive(e)}
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