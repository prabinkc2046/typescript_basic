import React, {useState} from 'react';
import Person from './Component/ComponentWithProp/Person';
import Greet from './Component/ComponentWithProp/Greet';
import PersonList from './Component/ComponentWithProp/PersonList';
import Status from './Component/ComponentWithProp/Status';
import Heading from './Component/ComponentWithProp/Heading';
import Prabin from './Component/ComponentWithProp/Prabin';
import ClickEvent from './Component/ComponentWithProp/ClickEvent';
import InputEvent from './Component/ComponentWithProp/InputEvent';
import Greeting from './Component/TestComponentWithProp/Greeting';
import UserInfo from './Component/TestComponentWithProp/UserInfo';
import ItemList from './Component/TestComponentWithProp/ItemList';
import Button from './Component/TestComponentWithProp/Button';
import Form from './Component/TestComponentWithProp/Form';
import PlaceHolder from './Component/TestComponentWithProp/PlaceHolder';
import ProfileCard from './Component/TestComponentWithProp/ProfileCard';
import ProductList from './Component/TestComponentWithProp/ProductList';
import PageLayout from './Component/TestComponentWithProp/PageLayout';
import StyledComponent from './Component/ComponentWithProp/StyledComponent';
import User from './Component/State/User';
import { UserStateType } from './Component/State/User.types';
import ParentCounter from './Component/State/Counter/ParentCounter';
import TaskList from './Component/State/Tasks/TaskList';
import Fridge from './Component/State/Fridge/Fridge';
import Counter from './Component/State/Counter/Counter';
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
    
//   const handleClick = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log('Clicked item is', id, event);
// }

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setInputValue(event.target.value)
// }
// let user = {
//   name: "Sumit",
//   age: 34
// }

const items = [
  "apple",
  "mango",
  "pears",
  "banana",
  "Grapes"
]
const handleClick = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Button is Clicked", id, event)
}

const [formData, setFormData] = useState({
  name: "",
  email: "",
  salary: 0
})

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({...formData, [event.target.name]: event.target.value })
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(formData);
}

const products = [
  {id: 1, name: "milk", price: 2.4},
  {id: 2, name: "bread", price: 3},
  {id: 3, name: "Juice", price: 2.4}
]

const user2 = {
  isLoggedIn: false,
  name: "Prabin",
  email: "prabin@example"
}
const [user, setUser] = useState<null | UserStateType>(user2)
  const handleLogin = () => {
    setUser({
      isLoggedIn: true,
      name: "Prabin",
      email: "prabin@example"
    })
  }

  const handleLogout = () => {
    setUser({
      isLoggedIn: false,
      name: "Prabin",
      email: "prabin@example"
    })
  }
  return (
    <>
    {/* <Form onSubmit={handleSubmit} onChange={handleChange} formData={formData}/> */}
    {/* <PlaceHolder><h2>Hello world</h2></PlaceHolder> */}
    {/* <ProfileCard avatar={<img src='avatar.jpeg'/>}/> */}
    {/* <ProductList products={products}/> */}
    <PageLayout children={<p>This is body</p>} footer={<h2>Footer component</h2>} header={<h3>Header component</h3>}/>
    <StyledComponent style={{display:'flex', flexDirection:'column', margin:'auto', justifyContent:'space-between', alignItems:'center', padding:'5px'}}/>
    <User userData={user2} handleLogin={handleLogin} handleLogout={handleLogout}/>
    {/* <ParentCounter /> */}
    {/* <TaskList /> */}
    <Fridge />
    <Counter />
    </>
  );
}

export default App;
