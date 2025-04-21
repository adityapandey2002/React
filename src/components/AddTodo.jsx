import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleDueDate = (event) => {
    setTodoDate(event.target.value);
  };
  const handleItemName = (event) => {
    setTodoName(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleItemName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDueDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
