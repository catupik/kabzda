
import type { Meta, StoryObj } from '@storybook/react-vite';

import  Accordion  from './Accordion.tsx';
import {useRef, useState} from "react";

//👇 This default export determines where your story goes in the story list
const meta = {
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
// type Story = StoryObj<typeof meta>;
//
// export const FirstStory: Story = {
//     args: {
//         title: "Users",
//         collapsed: true,
//         onChange: ()=> {}
//     },
// };



export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'}
    collapsed={true}
    onChange={()=>{}}/>
}

export const OpenedAccordion = () => {
    return <Accordion title={'Opened Accordion'}
                      collapsed={false}
                      onChange={() => {}}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <Accordion title={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {setCollapsed(!collapsed)}}/>
}

export const GetValueOfInputByRef = ()=> {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const save = ()=> {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={save}>save</button> -actual value {value}</>
}