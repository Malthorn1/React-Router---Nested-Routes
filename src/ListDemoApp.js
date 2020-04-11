import React, { useState } from "react";
 
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map(n => <li key={n}>{n}</li>);
  return  listItems ;
}
function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
           <h1>Onsdags Opgave</h1>
      <h2>All numbers passed in via props</h2>
      <ul  className="App"  display="table"> 
      <NumberList numbers={props.numbers} />
      </ul>
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
 
