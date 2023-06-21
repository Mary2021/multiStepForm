import logo from './logo.svg';
import './App.css';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Container>
          <Row>
            <Col>
              <Card inverse>
                <CardImg
                  alt="Card image cap"
                  src="./images/bg-sidebar-desktop.svg"
                  style={{
                    height: 700
                  }}
                  width="100%"
                />
                <CardImgOverlay>
                  <CardTitle tag="h5">
                    Step 1
                  </CardTitle>
                  <CardText>
                    Your info
                  </CardText>
                  <CardTitle tag="h5">
                    Step 2
                  </CardTitle>
                  <CardText>
                    Select plan
                  </CardText>
                  <CardTitle tag="h5">
                    Step 3
                  </CardTitle>
                  <CardText>
                    Add-ons
                  </CardText>
                  <CardTitle tag="h5">
                    Step 4
                  </CardTitle>
                  <CardText>
                    Summary
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
            <Col>Col 2
            </Col>
          </Row>
        </Container>
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </main>
    </div>
  );
}

export default App;
