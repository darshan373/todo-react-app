import { createContext } from "react";
import { useReducer } from "react";
export const TodoitemsContext=createContext(
   {
    todoitems:[],
    addNewItem: ()=>{   },
    deleteNewItem : ()=>{}
   }

);
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

function TodoitemsContextProvider({children}){
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


    return (<TodoitemsContext.Provider value={{todoitems,addNewItem,deleteNewItem}}>
        {children}
    </TodoitemsContext.Provider>);
}export default TodoitemsContextProvider;