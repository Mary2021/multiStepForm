import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Info() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
    
  };

  useEffect(() => {
    localStorage.setItem("personsData", JSON.stringify(formData));
  }, [formData]);

  //console.log(localStorage)

  return (
    <Form className='pt-xl-5 pb-xl-0 px-xl-5 mx-xl-5 pt-lg-3 pb-lg-0 px-lg-4 mx-lg-3 pt-md-3 pb-md-0 px-md-3 mx-md-0 h-100'>
      <h2 className='formTitle'>Personal info</h2>
      <p className='formText'>Please provide your name, email address, and phone number.</p>
      <FormGroup className='mb-xl-3 mb-lg-2 mb-md-1'>
        <Label for="exampleName">
          Name
        </Label>
        <Input
          id="exampleName"
          name="name"
          placeholder="e.g. Stephen King"
          type="name"
          autoComplete="given-name"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='mb-xl-3 mb-lg-2 mb-md-1'>
        <Label for="exampleEmail">
          Email Address
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          autoComplete="email"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='mb-xl-3 mb-lg-2 mb-md-1'>
        <Label for="examplePhone">
          Phone Number
        </Label>
        <Input
          id="examplePhone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          type="phone"
          autoComplete="tel"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='nextBtnCol'>
        <Button className='nextBtn'>
          <Link to="/plan">
            Next Step
          </Link>
        </Button>
      </FormGroup>
    </Form>
  );
}