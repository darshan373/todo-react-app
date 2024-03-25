import style from "./Msgempty.module.css"
import { useContext } from "react";
import { TodoitemsContext } from "../store/Todo-items";
function Msgempty(){
    const todocontext=useContext(TodoitemsContext);
    const todoitems=todocontext.todoitems;

    return  todoitems.length ==0 && <h1 className={style["header"]}>Enjoy Your Day</h1>
    
}
export default Msgempty;