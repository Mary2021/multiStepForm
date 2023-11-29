import React from 'react';
import '../style/App.css';
import thankYou from '../assets/images/icon-thank-you.svg'
import { Container } from 'reactstrap';

export default function Summary() { 
    return (
        <Container className='pt-3 pb-0 px-md-5 px-sm-2 sumContainer'>
            <img
                alt="icon-arcade"
                src={thankYou}
            />           
            <h2 className='formTitle'>Thank you!</h2>
            <p className='formText'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </Container>
    );
}