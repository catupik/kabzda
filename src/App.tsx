import './App.css'
import Accordion from "./Accordion.tsx";
import {Rating} from "./Rating.tsx";
import {OnOff} from "./components/OnOff.tsx";

function App() {


  return (
    <>
      <OnOff />
        <OnOff />
      {/*<Rating value={2}/>*/}
      {/*  <Rating value={4}/>*/}
      {/*  <Accordion title={'Menu'} collapsed={true}/>*/}
      {/*<Accordion title={'Users'} collapsed={false}/>*/}

    </>
  )
}

export default App


