import React from 'react';
import Person from './Component/ComponentWithProp/Person';
import Greet from './Component/ComponentWithProp/Greet';
import PersonList from './Component/ComponentWithProp/PersonList';
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
function App() {
  return (
    <>
    <Greet isLoggedIn={true} name='Prabin'/>
    <Person person = {person}/>
    <PersonList personList={personList}/>
    </>
  );
}

export default App;
