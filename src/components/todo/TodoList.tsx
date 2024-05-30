import React, { useContext } from 'react'
import { ContextType, TodoProps } from '../../types/types'
import { Todo } from './Todo';
import { TodoContext } from '../../context/todoContext';

export const TodoList: React.FC = () => {

  const {todos} = useContext<ContextType>(TodoContext)

  return (
    <div>
      <table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
          <tr>
            <td>#</td>
            <td>titulo</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <Todo key={todo.id} {...todo}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}
