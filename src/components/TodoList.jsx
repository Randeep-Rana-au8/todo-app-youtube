import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div>
        {todos.map(todo => <h3>{todo}</h3>)}
    </div>
  )
}

export default TodoList