import { Link } from 'react-router-dom';
import '../App.css';
import { Button, Col, Container, Row } from 'reactstrap';

function Plan() {

    const [billingOption, setBillingOption] = 'monthly';
    //'monthly' ? 'checked': null;
    let style = "background-position: 'left center'";
    let handleToggle = () => {
        setBillingOption = billingOption === 'monthly' ? 'yearly' : 'monthly';
        style = "background-position: 'right center'";
    }

    return (
        <Container className='col-7 pt-5 px-5 mx-5'>
            <h2 className='formTitle'>Select your plan</h2>
            <p className='formText'>You have the option of monthly or yearly billing.</p>
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
            <Row className="planToggle">
                <Col className='col-4 px-0'>
                    <label>Monthly</label>
                </Col>
                <Col className='col-4 px-0'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={handleToggle} style={{ style }}></input>
                    </div>
                </Col>
                <Col className='col-4 px-0'>
                    <label>Yearly</label>
                </Col>
            </Row>
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
        </Container >
    );
}

export default Plan;