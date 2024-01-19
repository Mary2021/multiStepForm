import { React } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { useSelector } from "react-redux";

export default function FinishingUp() {
    const toggle = useSelector(state => state.plan.toggle)
    const selectedPlan = useSelector(state => state.plan.selected)
    const selectedAddOns = useSelector(state => state.addOns.selected)
    const planName = Object.keys(selectedPlan)[0].charAt(0).toUpperCase() + Object.keys(selectedPlan)[0].slice(1);
    const planPrice = Object.values(selectedPlan)[0]
    const sumValues = Object.values(selectedAddOns).reduce((a, b) => a + b, 0);
    let totalPrice = planPrice + sumValues

    const generateAddOnsRow = () => {
        return (
            Object.entries(selectedAddOns).map(([key, value]) => (
                <Row key={key + '1'} className='justify-content-center px-3 pt-1'>
                    <Col className='col-8 col-md-9 ps-0 pe-md-5 pe-0 text-start'>
                        <p className='formText mb-2'>{key}</p>
                    </Col>
                    <Col className='col-4 col-md-3 ps-md-2 ps-0 pe-md-2 pe-0 text-end'>
                        <p className='formText mb-2'>+${value}{shortText()}</p>
                    </Col>
                </Row>))
        )
    }

    const createText = () => {
        let txt = ''
        if (toggle === true) {
            txt = 'Monthly'
        }
        if (toggle === false) {
            txt = 'Yearly'
        }
        return txt
    }

    const createTotalText = () => {
        let totalTxt = ''
        if (toggle === true) {
            totalTxt = 'per month'
        }
        if (toggle === false) {
            totalTxt = 'per year'
        }
        return totalTxt
    }

    const shortText = () => {
        let shortTxt = ''
        if (toggle === true) {
            shortTxt = '/mo'
        }
        if (toggle === false) {
            shortTxt = '/yr'
        }
        return shortTxt
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
                            <p className='formText'>{planName} ({createText()})<br></br><Link className='backLink' to="/plan">Change</Link></p>
                        </Col>
                        <Col className='col-4 col-md-3 ps-md-2 ps-0 pe-md-2 pe-0 text-end border-bottom'>
                            <p className='formText'>${planPrice}{shortText()}</p>
                        </Col>
                    </Row>
                    {generateAddOnsRow()}
                </Container>
            </FormGroup>
            <FormGroup className='mb-5'>
                <Container className='justify-content-center'>
                    <Row className='justify-content-center px-3 pt-2'>
                        <Col className='col-8 col-md-9 ps-0 pe-md-5 pe-0'>
                            <p className='formText'>Total ({createTotalText()})</p>
                        </Col>
                        <Col className='col-4 col-md-3 ps-md-2 ps-0 pe-md-2 pe-0 text-end'>
                            <p className='formText'>${totalPrice}{shortText()}</p>
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