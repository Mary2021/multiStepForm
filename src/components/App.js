import '../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Steps from './Steps';
import PersonalInfo from './PersonalInfo';
import Plan from './Plan';
import AddOns from './AddOns';
import Summary from './Summary';
import { Card } from 'reactstrap';

function App() {
  return (
    <Router>
      < Routes >
        <Route path="/" element={<Info />}>
        </Route>
        <Route path="/plan" element={<SelectPlan />}>
        </Route>
        <Route path="/addOns" element={<PickAddOns />}>
        </Route>
        <Route path="/summary" element={<Sum />}>
        </Route>
      </Routes >
    </Router>
  )
}

function Info() {
  return (
    <div className="App">
      <main>
        <Card inverse className='formContainer'>
          <Steps />
          <PersonalInfo />
        </Card>
      </main>
    </div>
  )
}

function SelectPlan() {
  return (
    <div className="App">
      <main>
        <Card inverse className='formContainer'>
          <Steps />
          <Plan />
        </Card>
      </main>
    </div>
  )
}

function PickAddOns() {
  return (
    <div className="App">
      <main>
        <Card inverse className='formContainer'>
          <Steps />
          <AddOns />
        </Card>
      </main>
    </div>
  )
}

function Sum() {
  return (
    <div className="App">
      <main>
        <Card inverse className='formContainer'>
          <Steps />
          <Summary />
        </Card>
      </main>
    </div>
  )
}

export default App;
