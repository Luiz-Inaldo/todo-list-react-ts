import React, { useContext, useRef } from 'react'
import { ContextType, TodoProps } from '../../types/types'
import { TodoContext } from '../../context/todoContext'

export const Todo = (todo: TodoProps) => {

    const {toggleDone, deleteTodo} = useContext<ContextType>(TodoContext);

    return (
        <tr key={todo.id} className='uk-animation-slide-bottom-medium'>
            <td className='uk-width-auto'>
                <label>
                    <input className='uk-checkbox' type="checkbox" checked={todo.done}
                        onChange={() => toggleDone(todo.id)}
                    />
                </label>
            </td>
            <td className="uk-width-expand">{todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon='trash' onClick={() => deleteTodo(todo.id)}></button>
            </td>
        </tr>
    )
}
