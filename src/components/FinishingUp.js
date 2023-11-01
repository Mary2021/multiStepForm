import { React } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';

export default function FinishingUp() {
    //get selected plan from localStorage
    let planObj = window.localStorage.getItem('plan')
    let parsedObj = JSON.parse(planObj)
    let planName = Object.keys(parsedObj)[0].charAt(0).toUpperCase() + Object.keys(parsedObj)[0].slice(1);
    let planPrice = Object.values(parsedObj)[0]

    //get selected addOns from localStorage and generate rows with that data
    let addOnsObj = window.localStorage.getItem('addOns')
    let parsedObj2 = JSON.parse(addOnsObj)

    //sum object.values to get total price
    const sumValues = Object.values(parsedObj2).reduce((a, b) => a + b, 0);
    let totalPrice = planPrice + sumValues

    const generateAddOnsRow = () => {
        return (
            Object.entries(parsedObj2).map(([key, value]) => (
                <Row key={key + '1'} className='justify-content-center px-3 pt-1'>
                    <Col className='col-8 col-md-9 ps-0 pe-md-5 pe-0 text-start'>
                        <p className='formText mb-2'>{key}</p>
                    </Col>
                    <Col className='col-4 col-md-3 ps-md-2 ps-0 pe-md-2 pe-0 text-end'>
                        <p className='formText mb-2'>+${value}/mo</p>
                    </Col>
                </Row>))
        )
    }

    return (
        <Form className='pt-xl-5 pb-xl-0 px-xl-5 mx-xl-5 pt-lg-5 pb-lg-0 px-lg-4 mx-lg-3 pt-md-3 pb-md-0 px-md-3 mx-md-0 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Finishing up</h2>
                <p className='formText'>Double-check everything looks OK before confirming.</p>
            </Container>
            <FormGroup className='rmMb'>
                <Container className='planToggle justify-content-center'>
                    <Row className='justify-content-center px-3'>
                        <Col className='col-8 col-md-9 ps-0 pe-md-5 pe-0 text-start border-bottom'>
                            <p className='formText'>{planName} (Monthly) <br></br><Link className='backLink' to="/plan">Change</Link></p>
                        </Col>
                        <Col className='col-4 col-md-3 ps-md-2 ps-0 pe-md-2 pe-0 text-end border-bottom'>
                            <p className='formText'>${planPrice}/mo</p>
                        </Col>
                    </Row>
                    {generateAddOnsRow()}
                </Container>
            </FormGroup>
            <FormGroup className='mb-5'>
                <Container className='justify-content-center'>
                    <Row className='justify-content-center px-3 pt-2'>
                        <Col className='col-8 col-md-9 ps-0 pe-md-5 pe-0'>
                            <p className='formText'>Total (per month)</p>
                        </Col>
                        <Col className='col-4 col-md-3 ps-md-2 ps-0 pe-md-2 pe-0 text-end'>
                            <p className='formText'>${totalPrice}/mo</p>
                        </Col>
                    </Row>
                </Container>
            </FormGroup>
            <FormGroup check className='pt-5 ps-0 mt-2'>
                <Row className='pt-0 pe-2'>
                    <Col className='col-6 col-sm-6 col-md-3 ps-0 backBtnCol'>
                        <Button className='backBtn'>
                            <Link className='backLink' to="/addOns">
                                Go Back
                            </Link>
                        </Button>
                    </Col>
                    <Col className='col-6 col-sm-6 col-md-3 pe-0 nextBtnCol'>
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