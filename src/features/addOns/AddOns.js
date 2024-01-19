import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/App.css';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { setSelected, setBox1, setBox2, setBox3 } from './addOnsSlice';

export default function AddOns() {
    const dispatch = useDispatch()
    const selected = useSelector(state => state.addOns.selected);
    const box1 = useSelector(state => state.addOns.box1);
    const box2 = useSelector(state => state.addOns.box2);
    const box3 = useSelector(state => state.addOns.box3);
    const toggle = useSelector(state => state.plan.toggle);
    let prices = [1, 2, 2]

    const handleActive = (e) => {
        let id = e.target.id
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

        const selectedAddons = Object.keys(selected)
            .filter((key) => !key.includes(keyValue))
            .reduce((object, key) => {
                return Object.assign(object, {
                    [key]: selected[key]
                });
            }, {});

        if (id === 'box1') {
            if (box1 === false) {
                if (toggle === true) {
                    dispatch(setSelected({ ...selected, 'Online service': prices[0] }))
                }
                if (toggle === false) {
                    dispatch(setSelected({ ...selected, 'Online service': prices[0] * 10 }))
                }
                dispatch(setBox1(!box1))
            }
            if (box1 === true) {
                if (toggle === true) {
                    dispatch(setSelected({ ...selected, 'Online service': prices[0] }))
                }
                if (toggle === false) {
                    dispatch(setSelected({ ...selected, 'Online service': prices[0] * 10 }))
                }
                dispatch(setSelected(selectedAddons))
                dispatch(setBox1(!box1))
            }
        }
        if (id === 'box2') {
            if (box2 === false) {
                if (toggle === true) {
                    dispatch(setSelected({ ...selected, 'Larger storage': prices[1] }))
                }
                if (toggle === false) {
                    dispatch(setSelected({ ...selected, 'Larger storage': prices[1] * 10 }))
                }
                dispatch(setBox2(!box2))
            }
            if (box2 === true) {
                dispatch(setSelected(selectedAddons))
                dispatch(setBox2(!box2))
            }
        }
        if (id === 'box3') {
            if (box3 === false) {
                if (toggle === true) {
                    dispatch(setSelected({ ...selected, 'Customizable profile': prices[2] }))
                }
                if (toggle === false) {
                    dispatch(setSelected({ ...selected, 'Customizable profile': prices[2] * 10 }))
                }

                dispatch(setBox3(!box3))
            }
            if (box3 === true) {
                dispatch(setSelected(selectedAddons))
                dispatch(setBox3(!box3))
            }
        }
    }

    const handleSubmit = (e) => {
        if (box1 === false & box2 === false & box3 === false) {
            dispatch(setSelected({}))
        }
        localStorage.setItem("addOns", JSON.stringify(selected));
    }

    const arcText = () => {
        document.getElementById('arcade')
        let num = ''
        let txt = ''
        if (toggle === false) {
            num = prices[0] * 10
            txt = num + '/yr'
        } else {
            num = prices[0]
            txt = num + '/mo'
        }
        return txt
    }

    const advText = () => {
        document.getElementById('advanced')
        let num = ''
        let txt = ''
        if (toggle === false) {
            num = prices[1] * 10
            txt = num + '/yr'
        } else {
            num = prices[1]
            txt = num + '/mo'
        }
        return txt
    }

    const proText = () => {
        document.getElementById('pro')
        let num = ''
        let txt = ''
        if (toggle === false) {
            num = prices[2] * 10
            txt = num + '/yr'
        } else {
            num = prices[2]
            txt = num + '/mo'
        }
        return txt
    }

    return (
        <Form className='pt-xl-5 pb-xl-0 px-xl-5 mx-xl-5 pt-lg-3 pb-lg-0 px-lg-4 mx-lg-3 pt-md-3 pb-md-0 px-md-3 mx-md-0 h-100'>
            <h2 className='formTitle'>Pick add-ons</h2>
            <p className='formText mb-lg-3 mb-md-1'>Add-ons help to enhance your gaming experience.</p>
            <FormGroup className='mb-5'>
                <Col className='d-grid gap-2'>
                    <Button
                        id='box1'
                        active={box1}
                        onClick={(e) => handleActive(e)}
                        className='addOnBtn'
                        outline
                    >
                        <Row className='d-flex align-items-center'>
                            <Col className='col-1 col-sm-1'>
                                <FormGroup check>
                                    <Input
                                        id="box1"
                                        type="checkbox"
                                        defaultChecked={box1}
                                    />
                                    {' '}
                                </FormGroup>
                            </Col>
                            <Col className='col-sm-8 pe-md-0 ps-md-2 ps-3 pe-0'>
                                <h5 className='responsiveFont text-start'>Online service</h5>
                                <p className='mb-xl-4 mb-lg-3 mb-md-1 mb-0 text-start'>Access to multiplayer games</p>
                            </Col>
                            <Col className='col-3 col-sm-3 px-0'>
                                <p>+${arcText()}</p>
                            </Col>
                        </Row>
                    </Button>
                    <Button
                        id='box2'
                        className='addOnBtn'
                        active={box2}
                        onClick={(e) => handleActive(e)}
                        outline
                    >
                        <Row className='d-flex align-items-center'>
                            <Col className='col-1 col-sm-1 '>
                                <FormGroup check>
                                    <Input
                                        id="box2"
                                        type="checkbox"
                                        defaultChecked={box2}
                                    />
                                    {' '}
                                </FormGroup>
                            </Col>
                            <Col className='col-sm-8 pe-md-0 ps-md-2 ps-3 pe-0'>
                                <h5 className='responsiveFont text-start'>Larger storage</h5>
                                <p className='mb-xl-4 mb-lg-3 mb-md-1 mb-0 text-start'>Extra 1TB of cloud save</p>
                            </Col>
                            <Col className='col-3 col-sm-3 px-0'>
                                <p>+${advText()}</p>
                            </Col>
                        </Row>
                    </Button>
                    <Button
                        id='box3'
                        className='addOnBtn'
                        active={box3}
                        onClick={(e) => handleActive(e)}
                        outline
                    >
                        <Row className='d-flex align-items-center'>
                            <Col className='col-1 col-sm-1'>
                                <FormGroup check>
                                    <Input
                                        id="box3"
                                        type="checkbox"
                                        defaultChecked={box3}
                                    />
                                    {' '}
                                </FormGroup>
                            </Col>
                            <Col className='col-sm-8 pe-md-0 ps-md-2 ps-3 pe-0'>
                                <h5 className='responsiveFont text-start'>Customizable profile</h5>
                                <p className='mb-xl-4 mb-lg-3 mb-md-1 mb-0 text-start'>Custom theme on your profile</p>
                            </Col>
                            <Col className='col-3 col-sm-3 px-0'>
                                <p>+${proText()}</p>
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