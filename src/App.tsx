import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating";


function App() {
    console.log ('App rendering')
    return(
        <div>
            <input/>
            <input checked={true} value="yo" type="password"/>
        <AppTitle />
            Article 1
        <Rating value={3}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"kitty"}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>



        </div>

    )
}
function hello() {
  console.log ("hello rendering")

  
  alert('Hello kity')
  
  
}
hello();


function AppTitle() {
  console.log ("AppTitle rendering")
  return(
  <div>This is APP component</div>
  )
}


export default App;
