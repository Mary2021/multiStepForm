import React from 'react';
import { Link } from "react-router-dom";
import '../../style/App.css';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setPhone, setValidateName, setValidateEmail, setValidatePhone } from './personalInfoSlice';

export default function Info() {
  const dispatch = useDispatch()
  const form = useSelector(state => state.form);
  const enabled = form.validName === 'correct' && form.validEmail === 'correct' && form.validPhone === 'correct' 

  const handleNameChange = (e) => {
    const nameRex = /^[a-z ,.'-]+$/i
    let { validate } = form.validName;
    let { nameData } = form.name;
    nameData = e.target.value.toString();

    if (nameRex.test(e.target.value)) {
      validate  = "correct";
    } else {
      validate  = "incorrect";
    } 
    dispatch(setValidateName( validate ))
    dispatch(setName( nameData ))
  }

  const handleEmailChange = (e) => {
    // eslint-disable-next-line
  const emailRex = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])$/;
  let { validate } = form.validEmail;
  let { emailData } = form.email;
  emailData = e.target.value.toString();

  if (emailRex.test(e.target.value)) {
    validate  = "correct";
  } else {
    validate  = "incorrect";
  }
  dispatch(setValidateEmail( validate ))
  dispatch(setEmail( emailData ))
  }

  const handlePhoneChange = (e) => {
    const phoneRex = /^(\(\d{3}\)\s?)?(\d{1,3}\s?)?(\d{1,3}\s?)?(\d{1,3}\s?)$/;
    let { validate } = form.validPhone;
    let { phoneData } = form.phone;
    phoneData = e.target.value.toString();

    if (phoneRex.test(e.target.value)) {
      validate = 'correct';
    } else {
      validate = 'incorrect';
    }
    dispatch(setValidatePhone( validate ))
    dispatch(setPhone( phoneData ))
  }

  const handleSubmit = (e) => {
    localStorage.setItem("form", JSON.stringify(form));
}

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
          onChange={(e) => { 
            handleNameChange(e) 
          }}
          value={form.name} 
          valid={form.validName === "correct"}
          invalid={form.validName === "incorrect"}
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
          onChange={(e) => {
            handleEmailChange(e) 
          }}
          value={form.email} 
          valid={form.validEmail === "correct"}
          invalid={form.validEmail === "incorrect"}
        />
        <FormFeedback>
          Please input a correct email!
        </FormFeedback>
        <FormFeedback valid>
          Looks good!
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
          onChange={(e) => {
            handlePhoneChange(e) 
          }}
          value={form.phone} 
          valid={form.validPhone === "correct"}
          invalid={form.validPhone === "incorrect"}
        />
        <FormFeedback>
          Please input a correct phone number.
        </FormFeedback>
        <FormFeedback valid>
          Looks good!
        </FormFeedback>
      </FormGroup>
      <FormGroup className='nextBtnCol pt-5 rmMb'>
        <Button className='nextBtn' disabled={!enabled} onClick={(e) => handleSubmit(e)}>
            <Link to="/plan">
              Next Step
            </Link>
        </Button>
      </FormGroup>
    </Form>
     );
}