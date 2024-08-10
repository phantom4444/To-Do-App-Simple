import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";



function App() {

  const [data, setData] = useState([]);

  function addData(newEntry){
    setData((prev) => {
      if(newEntry != "")
        return [...prev, newEntry];
      else return prev;
    });
  }

  function deleteItem(id){
    setData((prev)=>{
      return prev.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClick={addData} />
      <div>
        <ul>
          {data.map((todoItem, index)=> (
            <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
