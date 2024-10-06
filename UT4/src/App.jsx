import React, { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import DeleteButton from './components/DeleteButton/deleteButton';
import EditButton from './components/EditButton/editButton';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const startEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Input addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {editIndex === index ? (
              <Input
                initialValue={task}
                onSave={(updatedTask) => editTask(index, updatedTask)}
              />
            ) : (
              <>
                {task}
                <EditButton onClick={() => startEdit(index)} />
                <DeleteButton onClick={() => deleteTask(index)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
