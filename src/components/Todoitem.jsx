import { useContext } from "react";
import styles from "./Todoitem.module.css"
import { TodoitemsContext } from "../store/Todo-items";
function Todoitem({work,date}) {
 const {deleteNewItem}=useContext(TodoitemsContext)
  return (
    <div className={`  ${styles["left"]}container`}>
      <div className="row kg-row">
        <div className="col-6">{work}</div>
        <div className="col-4">{date}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger kgbutton"
          onClick={() => deleteNewItem(work)}>
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
