import {useState} from 'react'
import TodoInput from './components/Input'
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <h1>TODO Application</h1>
      <TodoInput todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
