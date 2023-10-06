import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default function Plan(props) {

    // const [billingOption, setBillingOption] = 'monthly';
    // //'monthly' ? 'checked': null;
    // let style = "background-position: 'left center'";
    // let handleToggle = () => {
    //     setBillingOption = billingOption === 'monthly' ? 'yearly' : 'monthly';
    //     style = "background-position: 'right center'";
    // }
    const [state, setState] = useState(true);

    // const onChangeHandler = event => {
    //     console.log(event)
    //     setState(event.target.checked);
    // };

    // const handleSubmit = (e) => {
    //     //e.preventDefault()
    //     console.log(state) //working
    // }

    //onSubmit={(e) => handleSubmit(e)}

    return (
        <Form className='pt-5 px-5 mx-5'>
            <h2 className='formTitle'>Select your plan</h2>
            <p className='formText'>You have the option of monthly or yearly billing.</p>
            <FormGroup>
                <Row>
                    <Col>
                        <Button className='planBtn' outline>
                            <img
                                alt="icon-arcade"
                                src="../images/icon-arcade.svg"
                            />
                            <h5>Arcade</h5>
                            <p>$9/mo</p>
                        </Button>
                        {' '}
                    </Col>
                    <Col>
                        <Button className='planBtn' outline>
                            <img
                                alt="icon-advanced"
                                src="../images/icon-advanced.svg"
                            />
                            <h5>Advanced</h5>
                            <p>$12/mo</p>
                        </Button>
                    </Col>
                    <Col>
                        {' '}
                        <Button className='planBtn' outline>
                            <img
                                alt="icon-pro"
                                src="../images/icon-pro.svg"
                            />
                            <h5>Pro</h5>
                            <p>$15/mo</p>
                        </Button>
                        {' '}
                    </Col>
                </Row>
            </FormGroup>
            <FormGroup switch className='planFormGrp'>
                <Row className='planToggle'>
                    <Col className='col-6 px-0'>
                        <Label for='id-1'>Monthly</Label>
                    </Col>
                    <Input id='id-1' type="switch" role="switch" />
                    <Col className='col-6 px-0'>
                        <Label for='id-1'>Yearly</Label>
                    </Col>
                </Row>
            </FormGroup>
            <Row>
                <Col className='col-6 px-0 backBtnCol'>
                    <Button className='backBtn'>
                        <Link className='backLink' to="/">
                            Go Back
                        </Link>
                    </Button>
                </Col>
                <Col className='col-6 px-0 nextBtnCol'>
                    <Button>
                        <Link to="/addOns">
                            Next Step
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Form >
    );
}