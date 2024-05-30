import React from 'react';
import logo from './logo.svg';
import { Navbar } from '../navbar/Navbar';
import { TodoList } from '../todo/TodoList';


function App() {
  return (
    <div className='uk-container'>
      <Navbar />
      <TodoList />
    </div>
  );
}

export default App;
