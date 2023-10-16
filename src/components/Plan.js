import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

export default function Plan() {
    const [arcade, setArcade] = useState(false);
    const [advanced, setAdvanced] = useState(false);
    const [pro, setPro] = useState(false);
    const [formData, setFormData] = useState({ arcade: 'false', advanced: 'false', pro: 'false' });

    const handleActive = (event) => {
        let id = event.target.id
        if (id === 'arcade') {
            if (arcade !== false) {
                setFormData({ ...formData, [event.target.id]: 'false' });
            }
            if (arcade !== true) {
                setFormData({ ...formData, [event.target.id]: 'true' });
            }
            setArcade(!arcade);
        }

        if (id === 'advanced') {
            if (advanced !== false) {
                setFormData({ ...formData, [event.target.id]: 'false' });
            }
            if (advanced !== true) {
                setFormData({ ...formData, [event.target.id]: 'true' });
            }
            setAdvanced(!advanced);
        }

        if (id === 'pro') {
            if (pro !== false) {
                setFormData({ ...formData, [event.target.id]: 'false' });
            }
            if (pro !== true) {
                setFormData({ ...formData, [event.target.id]: 'true' });
            }
            setPro(!pro);
        }
    }

    useEffect(() => {
        localStorage.setItem("plan", JSON.stringify(formData));
    }, [formData]);

    return (
        <Form className='py-5 px-5 mx-5 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Select your plan</h2>
                <p className='formText'>You have the option of monthly or yearly billing.</p>
            </Container>
            <FormGroup className='px-0 pt-4 pb-4'>
                <Row>
                    <Col className='col-4'>
                        <Button
                            id='arcade'
                            name='arcade'
                            active={arcade}
                            onClick={handleActive}
                            onChange={handleActive}
                            className='planBtn'
                            outline
                        >
                            <Container id='arcade' className='pt-2 text-start'>
                                <img
                                    id='arcade'
                                    alt="icon-arcade"
                                    src="../images/icon-arcade.svg"
                                />
                            </Container>
                            <Container id='arcade' className='pt-5 ps-2 text-start'>
                                <h5 id='arcade'>Arcade</h5>
                                <p id='arcade'>$9/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-4'>
                        <Button
                            id='advanced'
                            active={advanced}
                            onClick={handleActive}
                            onChange={handleActive}
                            className='planBtn'
                            outline
                        >
                            <Container id='advanced' className='pt-2 text-start'>
                                <img
                                    id='advanced'
                                    alt="icon-advanced"
                                    src="../images/icon-advanced.svg"
                                />
                            </Container>
                            <Container id='advanced' className='pt-5 ps-2 text-start'>
                                <h5 id='advanced'>Advanced</h5>
                                <p id='advanced'>$12/mo</p>
                            </Container>
                        </Button>
                    </Col>
                    <Col className='col-4'>
                        <Button
                            id='pro'
                            active={pro}
                            onClick={handleActive}
                            onChange={handleActive}
                            className='planBtn'
                            outline
                        >
                            <Container id='pro' className='pt-2 text-start'>
                                <img
                                    id='pro'
                                    alt="icon-pro"
                                    src="../images/icon-pro.svg"
                                />
                            </Container>
                            <Container id='pro' className='pt-5 ps-2 text-start'>
                                <h5 id='pro'>Pro</h5>
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
                <Row className='pt-5'>
                    <Col className='col-6 px-3 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-6 px-2 nextBtnCol'>
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