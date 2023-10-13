import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function Info() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(formData));
  }, [formData]);

  console.log(localStorage)

  return (
    <Form className='py-5 px-5 mx-5 h-100' onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className='nextBtnCol pt-5' onSubmit={handleSubmit}>
        <Button className='nextBtn' type="submit">
          <Link to="/plan">
            Next Step
          </Link>
        </Button>
      </FormGroup>
    </Form>
  );
}