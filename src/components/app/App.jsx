
import React from "react"
import { useState } from "react";
import Todo from "../todo";
import TodoForm from "../todoform";

export default function App() {
  const [todos, useTodos] = useState([])

  const addTask = () => {

  }

  const removeTask = () => {
    
  }

  const handleToggle = () => {
    
  }
  
  return (
    <div className="App">
      <header>
        <h1>Tasks {todos.length} </h1>
      </header>
      <TodoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
          <Todo
          todo={todo} 
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )
      })}
    </div>
    
  )
}


