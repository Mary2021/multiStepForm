import { Button, Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function AddOns() {

    return (
        <Container className='col-7 pt-5 px-5 mx-5'>
            <h2 className='formTitle'>Pick add-ons</h2>
            <p className='formText'>Add-ons help to enhance your gaming experience.</p>
                <Col className='d-grid gap-2'>
                    <Button className='planBtn' outline>
                        <Row>
                            <Col className='col-1'>
                                <FormGroup check>
                                    <Input
                                        id="checkbox2"
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
                    <Button className='planBtn' outline>
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
                    <Button className='planBtn' outline>
                        <Row>
                            <Col className='col-1'>
                                <FormGroup check>
                                    <Input
                                        id="checkbox2"
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
                <Row>
                    <Col className='col-6 px-0 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/plan">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-6 px-0 nextBtnCol'>
                        <Button>
                            <Link to="/summary">
                                Next Step
                            </Link>
                        </Button>
                    </Col>
                </Row>
        </Container >
    );
}

export default AddOns;