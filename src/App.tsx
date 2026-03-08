import './App.css'
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion.tsx";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating.tsx";
import {OnOff} from "./components/OnOff/OnOff.tsx";
import Accordion from "./components/Accordion/Accordion.tsx";
import {useState} from "react";

function App() {

    const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <OnOff />
        <OnOff />
      <UncontrolledRating />
        <UncontrolledAccordion title={'Menu'} />
      <Accordion title={"Users"}
                collapsed={collapsed}
                 onChange={()=>setCollapsed(!collapsed)}
      />

    </div>
  )
}

export default App


