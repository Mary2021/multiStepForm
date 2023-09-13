import { Container } from 'reactstrap';
import '../App.css';

function Summary() {
    return (
        <Container className='col-7 pt-5 px-5 mx-5 sumContainer'>
            <img
                alt="icon-arcade"
                src="../images/icon-thank-you.svg"
            />
            <h2 className='formTitle'>Thank you!</h2>
            <p className='formText'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>

        </Container>
    );
}

export default Summary;