import React, { useState } from 'react'

const TodoInput = ({todos, setTodos}) => {
    const [todo, setTodo] = useState('')
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleAddTodo = () => {
        setTodos([...todos, todo])
        setTodo('')
    }
    return (<>
    <input type='text' value={todo} onChange={handleChange} />
    <button onClick={handleAddTodo}>Add</button>
</>)
}

export default TodoInput;