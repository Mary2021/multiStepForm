import '../App.css';
import Step from './Step';
import {  
  Button, 
  Card,  
  Form, 
  FormGroup, 
  Input, 
  Label 
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <main>
        <Card inverse className='formContainer'>
        <Step />
          <Form className='col-7 pt-5 px-5 mx-5'>
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
              />
            </FormGroup>
            <Button>
              Next Step
            </Button>
          </Form>
        </Card>
      </main>
    </div>
  );
}

export default App;
