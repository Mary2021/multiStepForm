import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Info() {
  return (
    <Form className='py-5 px-5 mx-5 h-100'>
      <h2 className='formTitle'>Personal info</h2>
      <p className='formText'>Please provide your name, email address, and phone number.</p>
      <FormGroup>
        <Label for="exampleName">
          Name
        </Label>
        <Input
          id="exampleName"
          name="name"
          placeholder="e.g. Stephen King"
          type="name"
          autoComplete="given-name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">
          Email Address
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          autoComplete="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePhone">
          Phone Number
        </Label>
        <Input
          id="examplePhone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          type="phone"
          autoComplete="tel"
        />
      </FormGroup>
      <FormGroup className='nextBtnCol pt-5'>
        <Button>
          <Link to="/plan">
            Next Step
          </Link>
        </Button>
      </FormGroup>
    </Form>
  );
}