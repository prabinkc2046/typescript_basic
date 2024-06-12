import React from 'react';
import Person from './Component/ComponentWithProp/Person';
import Greet from './Component/ComponentWithProp/Greet';
import PersonList from './Component/ComponentWithProp/PersonList';
import Status from './Component/ComponentWithProp/Status';
import Heading from './Component/ComponentWithProp/Heading';
import Prabin from './Component/ComponentWithProp/Prabin';

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

let status:  "error" | "loading" | "success" = "loading"
function App() {
  return (
    <>
    <Greet isLoggedIn={true} name='Prabin' messageCount={19}/>
    <Person person = {person}/>
    <PersonList personList={personList}/>
    <Status status={status}/>
    <Heading>
      Hello world 
    </Heading>

    <Prabin>
      <Heading>
        some text formatted by heading component passed as children prop
      </Heading>
    </Prabin>
    </>
  );
}

export default App;
