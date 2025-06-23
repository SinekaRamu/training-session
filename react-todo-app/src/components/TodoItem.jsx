function TodoItem(todo) {

    return  ( <>
            <div>
                <input type="checkbox" name="" id={todo.id} />
                <label htmlFor={todo.id}>{todo.task}</label>
            </div> 
            </>)
                
}

export default TodoItem;