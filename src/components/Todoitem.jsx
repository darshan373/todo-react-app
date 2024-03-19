import styles from "./Todoitem.module.css"
function Todoitem({work,date,handledeleteitem}) {
 
  return (
    <div className={`  ${styles["left"]}container`}>
      <div className="row kg-row">
        <div className="col-6">{work}</div>
        <div className="col-4">{date}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger kgbutton"
          onClick={() => handledeleteitem(work)}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
