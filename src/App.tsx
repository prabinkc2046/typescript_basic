import React, {useState} from 'react';
import { actionTypes, classifyAge } from './Component/General/basic';

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
import DynamicForm from './Component/State/DynamicForm/DynamicForm';
import ChildComponent from './Component/Context/ChildComponent';
import { GreetingContext, GreetingContextProvider } from './Component/Context/GreetingContext';
import ParentComponent from './Component/Context/ParentComponent';
import { CartContextProvider } from './Component/Context/Cart/CartContext';
import { CartContextProviderTest } from './Component/Context/Cart-with-reducer/CartContext';
import ShoppingCartTest from './Component/Context/Cart-with-reducer/ShoppingCart';
import { FormContextProvider } from './Component/Context/ValidForms/ValidFormsContext';
import FormConsumer from './Component/Context/ValidForms/Form';
import { AuthUserContextProvider } from './Component/Context/AuthUser/AuthUserContext';
import AuthUserConsumer from './Component/Context/AuthUser/AuthUserConsumer';
import Focus from './Component/Ref/Focus';
import ClickMeOrNot from './Component/Ref/ClickMeOrNot';
import KeepingTrackOfPreviousValue from './Component/Ref/KeepingTrackOfPreviousValue';
import StoringMutableObject from './Component/Ref/StoringMutableObject';
import FocusOnTextField from './Component/Ref/FocusOnTextField';
import FocusFirstInputField from './Component/Ref/FocusFirstInputField';
import ShowPreviousInputValue from './Component/Ref/ShowPreviousInputValue';
import CommentSecion from './Component/ComponentAsProp/CommentSecion';
import Post from './Component/ComponentAsProp/Post';
import Menu, { MenuItems } from './Component/ComponentAsProp/Menu';
import LinkItem from './Component/ComponentAsProp/LinkItem';
import ActionItem from './Component/ComponentAsProp/ActionItem';
import TextCard, { TextCardProps } from './Component/ComponentAsProp/Card/TextCard';
import ImageCard from './Component/ComponentAsProp/Card/ImageCard';
import CardComponent from './Component/ComponentAsProp/Card/CardComponent';
import List from './Component/GenericType/List';
import GenericListComponenet from './Component/GenericType/GenericListComponenet';
import RenderSortableList from './Component/GenericType/SortedByPropertyGenericList/RenderSortableList';
import FilterableList from './Component/GenericType/FilterableList/FilterableList';
import RenderFilterableList from './Component/GenericType/FilterableList/RenderFilterableList';
import PaginatedList from './Component/GenericType/PaginatedList/PaginatedList';
import RandomValue from './Component/RestrictingProps/RandomValue';
import CustomButton from './Component/Custom/CustomButton';
import CustomButtonWithMoreProps from './Component/Custom/CustomButtonWithMoreProps';
import CustomInput from './Component/Custom/CustomInput';
import { backgroundColor } from './Component/Context/Greeting';
import CustomCard from './Component/Custom/CustomCard';
import CustomAlert from './Component/Custom/CustomAlert';
import RestricToCertainElement from './Component/Custom/RestricToCertainElement';
import { Alice, Em } from './Component/General/Class/Person';
import { transformArray } from './Component/GenericType/GenericFunction/genericFunctions';
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




Alice.greet()
Em.greet()
const newArray = transformArray(["sdfdf", "dfdsfs", "dsfdfds"], (str) => str.length)
console.log(newArray);
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

console.log(actionTypes.ADD_ITEM)
classifyAge(9)

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

  const menuItems: MenuItems[] = [
    { type: 'link', label: 'Home', url: '/' },
    { type: 'link', label: 'About', url: '/about' },
    { type: 'action', label: 'Logout', onClick: () => console.log('Logging out...') }
];


type MyUser = {
  name: string;
  age: number;
}
const myUser: MyUser[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
]


  return (
    <>
    {/* <Form onSubmit={handleSubmit} onChange={handleChange} formData={formData}/> */}
    {/* <PlaceHolder><h2>Hello world</h2></PlaceHolder> */}
    {/* <ProfileCard avatar={<img src='avatar.jpeg'/>}/> */}
    {/* <ProductList products={products}/> */}
    {/* <GreetingContextProvider>
    <PageLayout children={<p>This is body</p>} footer={<h2>Footer component</h2>} header={<h3>Header component</h3>}/>
    <StyledComponent style={{display:'flex', flexDirection:'column', margin:'auto', justifyContent:'space-between', alignItems:'center', padding:'5px'}}/>
    <User userData={user2} handleLogin={handleLogin} handleLogout={handleLogout}/>
    <ParentCounter />
    <TaskList />
    <Fridge />
    <Counter />
    <DynamicForm />
   
    
      <ChildComponent />
      <ParentComponent />
    </GreetingContextProvider> */}

    {/* <CartContextProviderTest>
      <ShoppingCartTest />
    </CartContextProviderTest>

    <FormContextProvider>
      <FormConsumer />
    </FormContextProvider> */}

      {/* <AuthUserContextProvider>
        <AuthUserConsumer />
      </AuthUserContextProvider> */}
      {/* <Focus /> */}
      {/* <ClickMeOrNot /> */}
      {/* <KeepingTrackOfPreviousValue /> */}
      {/* <StoringMutableObject /> */}

      {/* <FocusOnTextField /> */}
      {/* <FocusFirstInputField /> */}
      {/* <ShowPreviousInputValue /> */}
      {/* <CommentSecion id={1}/> */}
      {/* <Post isCommented={true} childComponent={<CommentSecion id={2}/>}/> */}
      {/* <Post isCommented={true} component={CommentSecion}/>
      <Menu menuItems={menuItems}/>
      <LinkItem label='new label' url='go no where'/>
      <ActionItem label='click me' onClick={() => console.log("you click me")}/> */}
      <TextCard text='Hello'/>
      <ImageCard imageUrl='favicon.ico'/>
      {/* <CardComponent variant='image' imageurl='favicon.ico'  text='hello from parent' componentText={TextCard} componentImage={ImageCard}/> */}
      {/* <List<Item> itemList={itemList} onClick={handleItemClick}/> */}
        {/* <GenericListComponenet<MyUser>  list={myUser} renderItem={(user: MyUser) => (
          <li>
            {user.name} - {user.age}
          </li>
        )}/> */}
      
      <RenderSortableList />
      {/* <FilterableList /> */}
      <RenderFilterableList />
      <PaginatedList />

      <RandomValue  value={20} isNegative/>
      
      <CustomButton onClick={() => console.log("clicked me you moran")} style={{color:'black'}}>
        hello world
      </CustomButton>
      <CustomButtonWithMoreProps label='click me' isActive onClick={() => console.log("clicked")}/>
      <CustomInput style={{backgroundColor:'lightblue'}} type='text' placeholder='type your name' onChange={(e) => console.log(e.target.value)}/>
    <CustomCard title='New card' style={{backgroundColor:'lightgray'}}>
      <p>This is a content</p>
    </CustomCard>
    <CustomAlert message='Hello, Nepal' style={{backgroundColor:'lightcyan', padding:'10px'}}/>
    <RestricToCertainElement element='section'>
      <div>hello world</div>
    </RestricToCertainElement>
    </>
  );
}

export default App;
