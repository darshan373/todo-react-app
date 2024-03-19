import {useState} from 'react';
function Appdatainp({onnewitem}){
   const todoname1= (e) => {
    let newtodoname=e.target.value;
           settodoname(newtodoname)

   }
   const tododate1=(e) =>{
    let tododate=e.target.value;
    settododate(tododate);
   }
   const handleaddbutton= () => {
    onnewitem(todoname,tododate);
    settododate("");
    settodoname("");
   }
  const [todoname,settodoname]= useState();
  const [tododate,settododate] = useState();
    return (<div className="text-container container">
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          name="inputdata"
          value={todoname}
          id="inputdata"
          placeholder="Add a task"
          onChange={(e) => todoname1(e)}
        />
      </div>
      <div className="col-4">
        <input type="date" name="inputdate"  id="inputdate" value={tododate}
        onChange={(e) => tododate1(e)}/>
      </div>
    
      <div className="col-2">
        <button type="button" className="btn btn-success kgbutton"
           onClick={handleaddbutton}
           >
          ADD
        </button>
      </div>
    </div>
    </div>);
    } export default Appdatainp;