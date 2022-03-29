import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

// useState stores data inside of a component.
// Typescript allows you to see type errors during development in code.

export interface IState {
  people: {
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLob1v4T_RAK4ixnA_yoV1mGRCBQdrENfoA&usqp=CAU",
      age: 36,
      note: 'The actual GOAT.'
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people = {people}/>
      <AddToList people = {people} setPeople = {setPeople}/>
    </div>
  );
}

export default App;
