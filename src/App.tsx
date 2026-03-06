import './App.css'
import Accordion from "./Accordion.tsx";
import {Rating} from "./Rating.tsx";

function App() {


  return (
    <>
      <Rating value={2}/>
        <Rating value={4}/>
        <Accordion title={'Menu'} collapsed={true}/>
      <Accordion title={'Users'} collapsed={false}/>
    </>
  )
}

export default App


