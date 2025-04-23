import { useRef } from "react";
import { FcAddRow } from "react-icons/fc";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState();
  // const [todoDate, setTodoDate] = useState();

  const todoItemName = useRef();
  const todoDueDate = useRef();

  // const handleDueDate = (event) => {
  //   setTodoDate(event.target.value);
  // };
  // const handleItemName = (event) => {
  //   setTodoName(event.target.value);
  // };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoItemName.current.value;
    const todoDate = todoDueDate.current.value;
    onNewItem(todoName, todoDate);
    todoItemName.current.value = "";
    todoDueDate.current.value = "";
    // setDueDate("");
    // setTodoName("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoItemName}
            // value={todoName}
            // onChange={handleItemName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueDate}
            // value={todoDate} onChange={handleDueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <FcAddRow />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
