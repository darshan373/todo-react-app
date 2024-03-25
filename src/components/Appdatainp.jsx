import {useState,useRef} from 'react';
import { TodoitemsContext } from '../store/Todo-items';
import { useContext } from 'react';
function Appdatainp(){

  const todocontext=useContext(TodoitemsContext);
  const onnewitem=todocontext.addNewItem;
  const todonameElement=useRef();
  const tododateElement=useRef();
  
/*
   const todoname1= (e) => {
    let newtodoname=e.target.value;
           settodoname(newtodoname)

   }
   const tododate1=(e) =>{
    let tododate=e.target.value;
    settododate(tododate);
   }*/
   const handleaddbutton= (event) => {
   

    event.preventDefault();
    const todoname=todonameElement.current.value;
    const tododate=tododateElement.current.value;
    todonameElement.current.value="";
    tododateElement.current.value="";


   onnewitem(todoname,tododate);
    
   }/*
  const [todoname,settodoname]= useState();
  const [tododate,settododate] = useState();*/
    return (<div className="text-container container">
    <form  action='submit'  onSubmit={handleaddbutton} className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          ref={todonameElement}
          name="inputdata"
        
          id="inputdata"
          placeholder="Add a task"
         
        />
      </div>
      <div className="col-4">
        <input type="date" name="inputdate"  id="inputdate"  ref={tododateElement}
        />
      </div>
    
      <div className="col-2">
        <button type="submit" className="btn btn-success kgbutton"
           
           >
          ADD
        </button>
      </div>
    </form>
    </div>);
    } export default Appdatainp;