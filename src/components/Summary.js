import React from 'react';
import '../App.css';
import { Container } from 'reactstrap';

export default function Summary() { 
    return (
        <Container className='pt-3 pb-0 px-md-5 px-sm-2 sumContainer'>
            <img
                alt="icon-arcade"
                src="../multiStepForm/images/icon-thank-you.svg"
            />           
            <h2 className='formTitle'>Thank you!</h2>
            <p className='formText'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </Container>
    );
}