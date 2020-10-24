
const Todos = ({todos, deleteTodo}) => {
  const todosListLength = todos.length;

  const todosList = 
    (todosListLength) ? (
      todos.map(todo => {
        return (
          <div className='collection-item' key={todo.id}>
            <div onClick={() => deleteTodo(todo.id)}>{todo.content}</div>
          </div>
        )
      })
    ) : (
      <p className="collection-item center"> No todos </p>
    )
  

  return (
    <div className="todos collection">
      { todosList }
    </div>
  )
}

export default Todos;