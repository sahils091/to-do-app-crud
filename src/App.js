import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      Hello From App!
      <TodoInput/>
      <TodoItem/>
      
    </div>
  );
}

export default App;
