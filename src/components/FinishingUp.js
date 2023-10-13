import { React } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';

export default function FinishingUp(props) {
    return (
        <Form className='py-5 px-5 mx-5 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Finishing up</h2>
                <p className='formText'>Double-check everything looks OK before confirming.</p>
            </Container>
            <Container className='planToggle justify-content-center'>
                <Row className='planToggle justify-content-center px-3'>
                    <Col className='col-10 pe-5 text-start border-bottom'>
                        <p className='formText'>Arcade (Monthly) <br></br><Link className='backLink' to="/plan">Change</Link></p>
                    </Col>
                    <Col className='col-2 ps-2 text-start border-bottom'>
                        <p className='formText'>$9/mo</p>
                    </Col>
                </Row>
                <Row className='planToggle justify-content-center px-3 pb-0'>
                    <Col className='col-10 pe-5 text-start'>
                        <p className='formText'>Online service</p>
                    </Col>
                    <Col className='col-2 ps-2 text-start'>
                        <p className='formText'>$1/mo</p>
                    </Col>
                </Row>
                <Row className='planToggle justify-content-center px-3 pt-0'>
                    <Col className='col-10 pe-5 text-start'>
                        <p className='formText'>Larger storage</p>
                    </Col>
                    <Col className='col-2 ps-2 text-start'>
                        <p className='formText'>$2/mo</p>
                    </Col>
                </Row>
            </Container>
            <Container className='justify-content-center'>
                <Row className='justify-content-center px-3 pt-2'>
                    <Col className='col-9 pe-5'>
                        <p className='formText'>Total (per month)</p>
                    </Col>
                    <Col className='col-3 ps-2 text-end'>
                        <p className='formText'>$12/mo</p>
                    </Col>
                </Row>
            </Container>
            <FormGroup check className='ps-0'>
                <Row className='pt-5'>
                    <Col className='col-6 px-3 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/addOns">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-6 px-2 nextBtnCol'>
                        <Button className='nextBtn'>
                            <Link to="/summary">
                                Confirm
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form >
    );
}