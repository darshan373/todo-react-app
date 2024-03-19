

import Appname from "./components/Appname";
import Appdatainp from "./components/Appdatainp";
import {useState} from "react"
import Todoitems from "./components/Todoitems";
import "./App.css";
import Msgempty from "./components/Msgempty";
function App() {
  const  inittodoitems=[];
  const onnewitem=(itemname,itemduedate)=>{
    const newtodoitem=[...todoitems,{name:itemname,date:itemduedate}]
    settodoitems(newtodoitem)
    
  }
  const handledeleteitem=(todoitemname)=>{
    const newitem=todoitems.filter((todoitem) => todoitem.name!=todoitemname);
    settodoitems(newitem);
  }
 const [todoitems,settodoitems] = useState(inittodoitems);
 

  return (
    <center className="todo-container">
      <Appname></Appname>
      <Appdatainp onnewitem={onnewitem}></Appdatainp>
{todoitems.length === 0 && <Msgempty></Msgempty>}
      <Todoitems todoitems={todoitems} handledeleteitem={handledeleteitem}></Todoitems>
     
      
      

      
      
    
      
    </center>
  );
}

export default App;
