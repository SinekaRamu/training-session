
function TodoList({todos, onDelete}) {
    return (<>
     <div className="row mt-5">
        <div className="col"></div>
        <div className="col" id="todo-list">
           {todos.map((todo, k) => ( 
            <div key={k}>
                <input type="checkbox" name="" id={todo.id} />
                <label htmlFor={todo.id}>{todo.task}</label>               
                <button onClick={() => onDelete(todo.id)} className="btn ms-4">🗑️</button>
            </div> 
        ))}
        </div>
        <div className="col"></div>
      </div>
    </>)
}

export default TodoList;