import Appname from "./components/Appname";
import Appdatainp from "./components/Appdatainp";
import { useState,useReducer } from "react";
import Todoitems from "./components/Todoitems";
import "./App.css";
import Msgempty from "./components/Msgempty";
import TodoitemsContextProvider, { TodoitemsContext } from "./store/Todo-items";

const todoItemsReducer=(currTodoitems,action)=>{
  let newtodoitems=currTodoitems;
  if(action.type === "NEW_ITEM"){
 newtodoitems=[...currTodoitems,{name:action.payload.itemname,itemduedate:action.payload.itemduedate}]
  }else if(action.type === "REMOVE_ITEM"){
   newtodoitems= currTodoitems.filter(
      (todoitem) => todoitem.name != action.payload.todoitemname
    );
  }
  return newtodoitems;
}

function App() {
  //const inittodoitems = [];
 // const [todoitems, settodoitems] = useState(inittodoitems);
  const [todoitems,dispatchtodoitems]=useReducer(todoItemsReducer,[]);
  const addNewItem = (itemname, itemduedate) => {
    const NewItemAction={
      type: "NEW_ITEM",
      payload:{
        itemname,itemduedate
      }
     
    } ;
    dispatchtodoitems(NewItemAction);
   /* settodoitems((currValue) => [
      ...currValue,
      { name: itemname, date: itemduedate },
    ]);*/
  };
  const deleteNewItem = (todoitemname) => {
   /* 
    settodoitems(newitem);*/
    const DeleteItemAction={
      type: "REMOVE_ITEM",
      payload:{
        todoitemname
      }
     
    } ;
    dispatchtodoitems(DeleteItemAction);
  };
 
  return (
    <TodoitemsContextProvider><center className="todo-container">
    <Appname></Appname>
    <Appdatainp  ></Appdatainp>
    <Msgempty ></Msgempty>
    <Todoitems
      
    ></Todoitems>
  </center></TodoitemsContextProvider>
    
      
   
  );
}

export default App;
