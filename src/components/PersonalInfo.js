import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

export default function Info() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    validate: {
      nameState: '',
      emailState: '',
      phoneState: ''
    },
  });
  const [moveOn, setMoveOn] = useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };

  const validateName = (e) => {
    const nameRex =
      /^[a-z ,.'-]+$/i

    const { validate } = formData;

    if (nameRex.test(e.target.value)) {
      validate.nameState = 'correct';
    } else {
      validate.nameState = 'incorrect';
    }

    setFormData({ validate });
  }

  const validateEmail = (e) => {
    const emailRex = 
    /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/;

    const { validate } = formData;

    if (emailRex.test(e.target.value)) {
      validate.emailState = 'correct';
    } else {
      validate.emailState = 'incorrect';
    }
    setFormData({ validate });
  }

  const validatePhoneNumber = (e) => {
    const phoneRex =
      /^(\(\d{3}\)\s?)?(\d{1,3}\s?)?(\d{1,3}\s?)?(\d{1,3}\s?)$/;

    const { validate } = formData;

    if (phoneRex.test(e.target.value)) {
      validate.phoneState = 'correct';
    } else {
      validate.phoneState = 'incorrect';
    }

    setFormData({ validate });
  }

  const handleClick = (e) => {
    if (formData.name.length > 0 && formData.email.length > 0 && formData.phone.length > 0 && formData.validate.nameState === 'correct' && formData.validate.emailState === 'correct' && formData.validate.phoneState === 'correct') {
      handleSubmit()
    } else {
      alert('Please make sure all fields are filled in correctly!')
    }
  }

  const handleSubmit = (e) => {
    localStorage.setItem("personsData", JSON.stringify(formData));
  }

  useEffect(() => {
    if (formData.name.length > 0 && formData.email.length > 0 && formData.phone.length > 0 && formData.validate.nameState === 'correct' && formData.validate.emailState === 'correct' && formData.validate.phoneState === 'correct') {
      setMoveOn(true)
    }
  }, [formData]);

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
          valid={formData.validate.nameState === "correct"}
          invalid={formData.validate.nameState === "incorrect"}
          onChange={(e) => {
            validateName(e);
            handleChange(e);
          }}
          required
        />
      </FormGroup>
      <FormGroup className='mb-xl-3 mb-lg-2 mb-md-1'>
        <Label for="exampleEmail">
          Email Address
        </Label>
        <Input
          id="exampleEmail"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          autoComplete="email"

          valid={formData.validate.emailState === "correct"}
          invalid={formData.validate.emailState === "incorrect"}
          onChange={(e) => {
            validateEmail(e);
            handleChange(e);
          }}
        />
        <FormFeedback>
          Please input a correct email.
        </FormFeedback>
        <FormFeedback valid>
          That's a tasty looking email you've got there.
        </FormFeedback>
      </FormGroup>
      <FormGroup className='mb-xl-3 mb-lg-2 mb-md-1 mb-5'>
        <Label for="examplePhone">
          Phone Number
        </Label>
        <Input
          id="examplePhone"
          type="phone"
          name="phone"
          placeholder="e.g. (372) 54 567 890"
          autoComplete="tel"
          valid={formData.validate.phoneState === "correct"}
          invalid={formData.validate.phoneState === "incorrect"}
          onChange={(e) => {
            validatePhoneNumber(e);
            handleChange(e);
          }}
        />
        <FormFeedback>
          Please input a correct phone number.
        </FormFeedback>
        <FormFeedback valid>
          That's a tasty looking email you've got there.
        </FormFeedback>
      </FormGroup>
      <FormGroup className='nextBtnCol pt-5 rmMb'>
        <Button className='nextBtn' onClick={(e) => handleClick(e)}>
          {moveOn === true ?
            (<Link to="/plan">
              Next Step
            </Link>)
            :
            (<Link>
              Next Step
            </Link>)}
        </Button>
      </FormGroup>
    </Form>
  );
}