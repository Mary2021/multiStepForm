import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Steps from './Steps';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import Summary from './Summary';
import '../App.css';
import { Card, Container, Row, Col } from 'reactstrap';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)

    }
  })

  console.log(window.innerWidth)
  console.log(dimensions.width)
  console.log(dimensions.height)
  //alert(dimensions.width)
  //alert(dimensions.height)


  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  if (isMobile()) {
    console.log("Mobile device detected");
  } else {
    console.log("Desktop device detected");
  }

  return (
    <Router basename="/multiStepForm">
      <Routes>
        <Route path="/" element={<Info />}>
        </Route>
        <Route path="/plan" element={<SelectPlan />}>
        </Route>
        <Route path="/addOns" element={<PickAddOns />}>
        </Route>
        <Route path="/finishingUp" element={<FinishUp />}>
        </Route>
        <Route path="/summary" element={<Sum />}>
        </Route>
      </Routes>
    </Router>
  )
}

function Info() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <PersonalInfo />
          </Card>
        </div>
      </main>
    )
  } else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <PersonalInfo />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function SelectPlan() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <Plan />
          </Card>
        </div>
      </main>
    )
  } else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <Plan />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function PickAddOns() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <AddOns />
          </Card>
        </div>
      </main>
    )
  } else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <AddOns />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}

function FinishUp() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="App">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <FinishingUp />
          </Card>
        </div>
      </main>
    )
  } else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <FinishingUp />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}


function Sum() {
  if (window.innerWidth <= 576) {
    return (
      <main>
        <div className="SumApp">
          <Steps className='z-index-2' />
          <Card className='z-index-1'>
            <Summary />
          </Card>
        </div>
      </main>
    )
  } else {
    return (
      <div className="App">
        <main>
          <Container className='p-0'>
            <Row>
              <Card inverse className='formContainer'>
                <Col sm='4'>
                  <Steps />
                </Col>
                <Col sm='8'>
                  <Summary />
                </Col>
              </Card>
            </Row>
          </Container>
        </main>
      </div>
    )
  }
}
