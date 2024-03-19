import styles from "./Todoitems.module.css"
import Todoitem from "./Todoitem";
function Todoitems({todoitems,handledeleteitem}){
    return <>
     <div className={`${styles["items"]}`}>
        {todoitems.map((item)=> <Todoitem key={item} work={item.name} date={item.date} handledeleteitem={handledeleteitem}></Todoitem>)}
    
      </div>
    </>
}
export default Todoitems;