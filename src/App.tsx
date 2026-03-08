import './App.css'
import Accordion from "./Accordion.tsx";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating.tsx";
import {OnOff} from "./components/OnOff.tsx";

function App() {


  return (
    <div className="App">
      <OnOff />
        <OnOff />
      <UncontrolledRating />
        <UncontrolledRating />
        <Accordion title={'Menu'} collapsed={true}/>
      <Accordion title={'Users'} collapsed={false}/>

    </div>
  )
}

export default App


