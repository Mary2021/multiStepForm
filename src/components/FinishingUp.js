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

    const generateAddOnsRow = () => {
        //get selected addOns from localStorage and generate rows with that data
        let addOnsObj = window.localStorage.getItem('addOns')
        let parsedObj2 = JSON.parse(addOnsObj)

        return (
            Object.entries(parsedObj2).map(([key, value]) => (
                <Row key={key+'1'} className='planToggle justify-content-center px-3 pt-0'>
                    <Col className='col-9 pe-5 text-start'>
                        <p className='formText'>{key}</p>
                    </Col>
                    <Col className='col-3 ps-2 text-end'>
                        <p className='formText'>{value}</p>
                    </Col>
                </Row>))
        )
    }

    return (
        <Form className='py-5 px-5 mx-5 h-100'>
            <Container className='px-0'>
                <h2 className='formTitle'>Finishing up</h2>
                <p className='formText'>Double-check everything looks OK before confirming.</p>
            </Container>
            <Container className='planToggle justify-content-center'>
                <Row className='planToggle justify-content-center px-3'>
                    <Col className='col-9 pe-5 text-start border-bottom'>
                        <p className='formText'>{planName} (Monthly) <br></br><Link className='backLink' to="/plan">Change</Link></p>
                    </Col>
                    <Col className='col-3 ps-2 text-end border-bottom'>
                        <p className='formText'>{planPrice}</p>
                    </Col>
                </Row>
                {generateAddOnsRow()}
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