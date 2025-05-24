import { useState } from 'react'
import Heading from './Components/Heading'
import About from './Components/About'


function App() { 
    return (
        <div>
            <Heading />
            <About title={"About React"} content={"React is a JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications (SPAs).It allows developers to create reusableUI component and efficiently manage the state of an application."}/>
            <About title={"Why we should learn React?"} content={"React is a popular, in-demand JavaScript library for building fast, scalable UIs. It’s component-based, easy to manage, and supported by a strong ecosystem. Learning React also opens paths to mobile development with React Native."}/>
        </div>
    )
}
export default App