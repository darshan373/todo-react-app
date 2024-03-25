import styles from "./Todoitems.module.css"
import Todoitem from "./Todoitem";
import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-items";
function Todoitems(){
  const todocontext=useContext( TodoitemsContext);
  const todoitems=todocontext.todoitems;
  

  
 
    return <>
     <div className={`${styles["items"]}`}>
        {todoitems.map((item)=> <Todoitem key={item} work={item.name} date={item.date} ></Todoitem>)}
    
      </div>
    </>
}
export default Todoitems;