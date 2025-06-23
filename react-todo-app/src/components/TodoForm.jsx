import { useState } from "react";

function TodoForm({onAdd}) {
    // const {onAdd, pro} = props
    let [task, setTask] = useState("")

    // function handleChage(e){
    //     setTask(e.target.value);       
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task){
            onAdd(task);
        }
        setTask = " "
    }

    return <>
      <div className="row">
        <div className="col"></div>
        <div className="col todo-form p-4 rounded-4">
          <h1 className="text-center mb-3">Todo App</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="todo"
              value={task}
              placeholder="Enter things to do..."
              onChange = {(e) => setTask(e.target.value)}
              required
            />
            <button className="btn btn-outline-dark" type="submit">Add</button>
          </form>
        </div>
        <div className="col"></div>
      </div> 
    </>
}

export default TodoForm;