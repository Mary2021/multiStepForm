import './App.css';
import { 
  Badge, 
  Button, 
  Card, 
  CardImg, 
  CardImgOverlay, 
  CardText, 
  CardTitle, 
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
          <CardImg
            alt="Card image cap"
            src="./images/bg-sidebar-desktop.svg"
          />
          <CardImgOverlay>
            <Badge>
              1
            </Badge>
            <CardTitle tag="h6">
              Step 1
            </CardTitle>
            <CardText>
              Your info
            </CardText>
            <Badge>
              2
            </Badge>
            <CardTitle tag="h6">
              Step 2
            </CardTitle>
            <CardText>
              Select plan
            </CardText>
            <Badge>
              3
            </Badge>
            <CardTitle tag="h6">
              Step 3
            </CardTitle>
            <CardText>
              Add-ons
            </CardText>
            <Badge>
              4
            </Badge>
            <CardTitle tag="h6">
              Step 4
            </CardTitle>
            <CardText>
              Summary
            </CardText>
          </CardImgOverlay>
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
