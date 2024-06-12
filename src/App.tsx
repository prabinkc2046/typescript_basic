import React, {useState} from 'react';
import Person from './Component/ComponentWithProp/Person';
import Greet from './Component/ComponentWithProp/Greet';
import PersonList from './Component/ComponentWithProp/PersonList';
import Status from './Component/ComponentWithProp/Status';
import Heading from './Component/ComponentWithProp/Heading';
import Prabin from './Component/ComponentWithProp/Prabin';
import ClickEvent from './Component/ComponentWithProp/ClickEvent';
import InputEvent from './Component/ComponentWithProp/InputEvent';

const person = {
  firstName: "Prabin",
  lastName: "K C",
}

const personList = [
  {
    firstName: "Prabin",
    lastName: "K C",
    age: 23
  },
  {
    firstName: "hari",
    lastName: "K C",
    age: 17
  },
  {
    firstName: "Shyam",
    lastName: "K C",
    age: 45
  }
]

let status:  "error" | "loading" | "success" = "loading";



function App() {
  const [inputValue, setInputValue] = useState("");
    
  const handleClick = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked item is', id, event);
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value)
}
  return (
    <>
    <ClickEvent handleClick={handleClick}/>
    <InputEvent value={inputValue} handleChange={handleChange}/>
    </>
  );
}

export default App;
